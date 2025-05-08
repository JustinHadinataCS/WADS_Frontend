import AuthForm from "../features/auth/AuthForm";

function SignUpPage() {
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleSubmitSuccess = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <AuthForm onSubmitSuccess={handleSubmitSuccess}>
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
