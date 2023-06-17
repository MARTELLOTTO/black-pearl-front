import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface ActiveLinkProps {
  href: string;
  title: string;
}

export const ActiveLink = ({ href, title }: ActiveLinkProps) => {
  const { asPath } = useRouter();

  const isActive = asPath === href;

  const activeStyles = "bg-slate-200 rounded-full py-2 px-3";

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
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Link
        style={{
          fontFamily: "'Montserrat', sans-serif",
        }}
        className={`ml-6 font-semibold ${
          isActive ? activeStyles : ""
        } transition-all`}
        href={href}
      >
        {title}
      </Link>
    </>
  );
};
