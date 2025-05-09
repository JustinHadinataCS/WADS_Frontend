import { useState } from "react";
import AuthForm from "../features/auth/AuthForm";

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
    } else {
      if (typeof onSubmitSuccess === "function") {
        onSubmitSuccess(formData);
      }
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
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleSubmitSuccess = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <AuthForm
      onSubmitSuccess={handleSubmitSuccess}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      validateForm={validateForm}
    >
      <AuthForm.Title title="Sign Up" />
      <AuthForm.GoogleLogin onClick={handleGoogleLogin} />
      <AuthForm.OrSection />
      <AuthForm.FlexContainer>
        <AuthForm.InputField preset="firstName" />
        <AuthForm.InputField preset="lastName" />
      </AuthForm.FlexContainer>
      <AuthForm.InputField preset="email" />
      <AuthForm.InputField preset="password" />
      <AuthForm.InputField preset="confirmPassword" />
      <AuthForm.ContinueButton />
      <AuthForm.SignInPrompt
        title="Already have an account? "
        subtitle="Sign in"
      />
    </AuthForm>
  );
}

export default SignUpPage;
