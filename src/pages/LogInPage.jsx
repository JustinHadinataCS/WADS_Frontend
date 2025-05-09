import { useState } from "react";
import AuthForm from "../features/auth/AuthForm";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("Form submitted successfully", formData);
      // Here you would typically send the data to your backend
      alert("Login successful!");
    }
  };
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <AuthForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      validateForm={validateForm}
    >
      <AuthForm.Title title="Sign In" />
      <AuthForm.GoogleLogin onClick={handleGoogleLogin} />
      <AuthForm.OrSection />
      <AuthForm.InputField preset="email" />
      <AuthForm.InputField preset="password" />
      <AuthForm.ContinueButton />
      <AuthForm.SignInPrompt
        title="Don't have an account ? "
        subtitle="Create Account"
        location="/signup"
      />
    </AuthForm>
  );
}
export default LoginPage;
