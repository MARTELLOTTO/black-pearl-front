import { Card } from "@/components/card/Card";
import { LoginForm } from "@/components/loginForm/LoginForm";

import CardImage from "@/public/cardImage.jpeg";

export default function Login() {
  return (
    <div className="h-screen w-full p-[30px] lg:p-[40px] flex justify-center items-center gap-5">
      <Card img={CardImage}>
        <LoginForm />
      </Card>
    </div>
  );
}
