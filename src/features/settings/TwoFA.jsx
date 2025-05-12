// TwoFA.jsx
import ContentToggle from "./ContentToggle";
import Button from "../../components/app/Button";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { getUserProfile, updateUserProfile } from "../../api/setting";

const TwoFA = () => {
  const { user } = useAuthContext();

  // Initialize with default values
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: {
      enabled: false,
      method: "authenticator" // Default to app authenticator
    }
  });

  const [serverSettings, setServerSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const fetchSecuritySettings = async () => {
      try {
        const data = await getUserProfile(user?.token);
        console.log("Raw security settings response:", data);

        if (data.securitySettings?.twoFactorEnabled !== undefined) {
          const normalizedData = {
            twoFactorAuth: {
              enabled: Boolean(data.securitySettings.twoFactorEnabled),
              method: data.securitySettings.twoFactorMethod || "authenticator",
            },
          };

          console.log("Normalized 2FA settings:", normalizedData);

          setSecuritySettings(normalizedData);
          setServerSettings(JSON.parse(JSON.stringify(normalizedData)));
        } else {
          console.warn("Server response did not contain twoFactorAuth settings!");
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching security settings:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (user?.token) {
      fetchSecuritySettings();
    } else {
      setLoading(false);
    }
  }, [user]);

  const handleToggle = () => {
    console.log(`Toggling 2FA from:`, securitySettings.twoFactorAuth.enabled);
    
    setSecuritySettings((prev) => {
      // Create a deep copy to avoid reference issues
      const updated = JSON.parse(JSON.stringify(prev));
      
      // Toggle the 2FA enabled state
      updated.twoFactorAuth.enabled = !updated.twoFactorAuth.enabled;
      
      console.log("Updated security settings after toggle:", updated);
      
      // Check for changes by comparing with server settings
      const hasChanges = JSON.stringify(updated) !== JSON.stringify(serverSettings);
      setHasChanges(hasChanges);
      
      return updated;
    });
  };

  const handleMethodChange = (method) => {
    console.log(`Changing 2FA method to:`, method);
    
    setSecuritySettings((prev) => {
      // Create a deep copy to avoid reference issues
      const updated = JSON.parse(JSON.stringify(prev));
      
      // Update the method
      updated.twoFactorAuth.method = method;
      
      console.log("Updated security settings after method change:", updated);
      
      // Check for changes
      const hasChanges = JSON.stringify(updated) !== JSON.stringify(serverSettings);
      setHasChanges(hasChanges);
      
      return updated;
    });
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      console.log("Sending security settings to server:", securitySettings);

      // Make sure we're sending the method value even when 2FA is disabled
      // This ensures the method is always updated in the database
      const data = await updateUserProfile(user?.token, {
        securitySettings: {
          twoFactorEnabled: securitySettings.twoFactorAuth.enabled,
          twoFactorMethod: securitySettings.twoFactorAuth.enabled 
            ? securitySettings.twoFactorAuth.method 
            : null, // Set to null if 2FA is disabled as per schema enum
        },
      });

      console.log("2FA settings saved, server response:", data);

      setServerSettings(JSON.parse(JSON.stringify(securitySettings)));
      setHasChanges(false);
      alert("Two-factor authentication settings saved successfully!");
    } catch (err) {
      console.error("Save error:", err);
      alert(`Failed to save 2FA settings: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    console.log("Cancelling changes, reverting to server settings");
    // Reset to server settings
    setSecuritySettings(JSON.parse(JSON.stringify(serverSettings)));
    setHasChanges(false);
  };

  if (loading) return <div className="p-6 text-gray-600">Loading security settings...</div>;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;

  return (
    <div>
      <ContentToggle
        text="Two-Factor Authentication"
        desc="Add an extra layer of security to your account"
        checked={securitySettings.twoFactorAuth.enabled}
        onChange={handleToggle}
      />
      
      {securitySettings.twoFactorAuth.enabled && (
        <div className="mt-4 ml-6">
          <div className="flex gap-4">
            <div onClick={() => handleMethodChange("authenticator")}>
              <Button 
                type={securitySettings.twoFactorAuth.method === "authenticator" ? "blue" : "clear"} 
                size="sm"
              >
                Authenticator App
              </Button>
            </div>

           <div onClick={() => handleMethodChange("sms")}>
  <Button 
    type={securitySettings.twoFactorAuth.method === "sms" ? "blue" : "clear"} 
    size="sm"
  >
    SMS verification
  </Button>
</div>

          </div>
      
        </div>
      )}

      {hasChanges && (
        <div className="flex justify-end space-x-4 mt-6">
          <div
            onClick={!saving ? handleCancel : undefined}
            className={`${saving ? "pointer-events-none opacity-50" : ""}`}
          >
            <Button type="clear">Cancel</Button>
          </div>
          <div
            onClick={!saving ? handleSave : undefined}
            className={`${saving ? "pointer-events-none opacity-50" : ""}`}
          >
            <Button type="blue">{saving ? "Saving..." : "Save Changes"}</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TwoFA;