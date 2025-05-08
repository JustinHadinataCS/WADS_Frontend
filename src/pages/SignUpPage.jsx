import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import InputField from "../features/auth/InputField";
import GoogleLogin from "../features/auth/GoogleLogin";
import OrSection from "../features/auth/OrSection";
import SignInPrompt from "../features/auth/SignInPrompt";

function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("Form submitted successfully", formData);
      alert("Account created successfully!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-2 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Sign Up
        </h1>

        <GoogleLogin />
        <OrSection />
        <div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <InputField
              icon={<User size={16} />}
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />

            <InputField
              icon={<User size={16} />}
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
          </div>

          <InputField
            icon={<Mail size={16} />}
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <InputField
            icon={<Lock size={16} />}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <InputField
            icon={<Lock size={16} />}
            type="password"
            name="confirmPassword"
            placeholder="Password Confirmation"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 mt-4"
          >
            CREATE ACCOUNT
          </button>
        </div>
        <SignInPrompt />
      </div>
    </div>
  );
}

export default SignUpPage;
