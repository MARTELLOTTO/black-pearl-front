import { mdiAt, mdiLockOutline } from "@mdi/js";
import { Input } from "../input/Input";
import { useRouter } from "next/router";

export const LoginForm = () => {
  const router = useRouter();
  const handleLogin = () => {
    alert("Tambien te la creiste xD");
    router.push("/");
  };
  return (
    <div className="w-full h-full flex flex-col items-center py-7 px-4 lg:px-[40px] gap-7 rounded-2xl ">
      <h1 className="font-bold text-3xl">Login</h1>
      <Input type="email" placeholder="Type your email" icon={mdiAt} />
      <Input
        type="password"
        placeholder="Type your password"
        icon={mdiLockOutline}
      />
      <button
        onClick={handleLogin}
        className="bg-purple-400 rounded-lg py-3 px-4 text-white"
      >
        Continue
      </button>
    </div>
  );
};
