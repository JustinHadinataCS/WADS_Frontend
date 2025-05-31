import SettingDesc from "./SettingDesc";
import Label from "./Label";
import { PasswordModal } from "./PasswordModal";
import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

import { formatDistanceToNow } from "date-fns";

const PasswordStrength = ({ lastChanged }) => {
  const { user } = useAuthContext();
  const [isModalOpen, setModalOpen] = useState(false);

  if (!user) return null;

  const timeAgo = lastChanged
    ? formatDistanceToNow(new Date(lastChanged), { addSuffix: true })
    : "Unknown";

  return (
    <div className="border-b border-gray-200 pb-6 mb-6">
      <div className="flex justify-between items-center mb-1">
        <Label children="Password" />
        <button
          onClick={() => setModalOpen(true)}
          className="text-[#0A3E74] hover:text-[#1F61AF] font-medium"
        >
          Change
        </button>
      </div>

      <div className="mb-4">
        <SettingDesc desc={`Last changed ${timeAgo}`} />
      </div>

      <div className="relative h-2 w-full bg-gray-300 rounded-full mb-2">
        <div className="absolute top-0 left-0 h-2 w-4/5 bg-green-500 rounded-full"></div>
      </div>

      <SettingDesc desc="Your password strength is good" />

      <PasswordModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        userId={user._id}
        token={user.accessToken}
      />
    </div>
  );
};


export default PasswordStrength;