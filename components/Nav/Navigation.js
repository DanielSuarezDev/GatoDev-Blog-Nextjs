import React from "react";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav>
      <Link href="/">Inicio</Link>
      <Link href="/">Populares</Link>
      <Link href="/">Nuevo Post</Link>
    </nav>
  );
};
