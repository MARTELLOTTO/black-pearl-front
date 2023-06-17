import { Navbar } from "@/components/navbar/Navbar";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Navbar />
      <main
        className={`w-full h-screen flex flex-col justify-center items-center gap-[40px]`}
      >
        <h1 className="text-[60px] font-bold">
          Ir a{" "}
          <Link className="text-blue-600" href="/">
            Home
          </Link>
        </h1>

        <p className="font-normal">
          Get Started by editing{" "}
          <code className="bg-slate-100 p-2 rounded-md ml-1">
            pages/index.js
          </code>
        </p>
      </main>
    </>
  );
}
