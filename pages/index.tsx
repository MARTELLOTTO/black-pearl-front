import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className={`w-full h-screen flex flex-col justify-center items-center gap-[40px]`}
      >
        <h1 className="text-[60px] font-bold">
          Ir a{" "}
          <Link className="text-blue-600" href="/about">
            About
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
