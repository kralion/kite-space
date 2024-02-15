import { LoginForm } from "@/components/login-form";
import { SignedOut } from "@clerk/clerk-react";

export default function SignIn() {
  return (
    <SignedOut>
      <LoginForm />
    </SignedOut>
  );
}
