import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="flex justify-center font-mono">
        <Link href="/">
            <a className="mx-4 px-4">Home</a>
        </Link>
      </nav>
    </>
  );
}
