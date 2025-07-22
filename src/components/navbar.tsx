import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <div className="">
        <Link className="lg:text-lg font-bold" href="/">
          Wan Chat
        </Link>
      </div>
      <Link href="/chat">
        <Button className="rounded bg-blue-800 hover:bg-blue-600 transition-all duration-300 ease-in-out">
          New Chat
        </Button>
      </Link>
    </header>
  );
};
