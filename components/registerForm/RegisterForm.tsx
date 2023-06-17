import {
  mdiAccount,
  mdiAt,
  mdiCake,
  mdiCardAccountDetailsOutline,
} from "@mdi/js";
import { Input } from "../input/Input";

export const RegisterForm = () => {
  return (
    <div className="w-full h-full flex flex-col items-center py-7 px-4 lg:px-[40px] gap-7 rounded-2xl ">
      <h1 className="font-bold text-3xl">Sign up</h1>
      <Input type="text" placeholder="Ingrese su nombre" icon={mdiAccount} />
      <Input
        type="number"
        placeholder="Ingrese su documento"
        icon={mdiCardAccountDetailsOutline}
      />
      <Input type="date" placeholder="Ingrese su edad" icon={mdiCake} />
      <Input type="email" placeholder="Ingrese su email" icon={mdiAt} />
    </div>
  );
};
