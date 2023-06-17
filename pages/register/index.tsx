import { Card } from "@/components/card/Card";
import { RegisterForm } from "@/components/registerForm/RegisterForm";
import CardImage from "@/public/cardImage.jpeg";

export default function Register() {
  return (
    <div className="h-screen w-full p-[30px] lg:p-[40px] flex justify-center items-center gap-5">
      <Card img={CardImage}>
        <RegisterForm />
      </Card>
    </div>
  );
}
