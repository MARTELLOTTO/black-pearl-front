import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ActiveLink } from "../activeLink/ActiveLink";
import Head from "next/head";
import { Input } from "../input/Input";
import { mdiMagnify, mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";

export const Navbar = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <nav className="justify-center bg-white relative border-b-2 w-full px-[40px] py-3 flex lg:justify-start   gap-16 items-center">
        <div
          onClick={() => alert("Te la creiste we")}
          className=" cursor-pointer absolute left-0 lg:hidden ml-6 flex justify-center items-center"
        >
          <Icon path={mdiMenu} size={1} />
        </div>
        <Link
          style={{
            fontFamily: "'Bagel Fat One', cursive",
          }}
          className="text-[30px] cursor-pointer"
          href="/"
        >
          Black Pearl
        </Link>

        <div className="hidden lg:block">
          <ActiveLink title="Home" href="/" />
          <ActiveLink title="About" href="/about" />
          <ActiveLink title="Register" href="/register" />
        </div>

        <div className="hidden lg:block max-w-[600px] w-full absolute right-0">
          <Input icon={mdiMagnify} type="text" placeholder="Search" />
        </div>
      </nav>
    </>
  );
};
