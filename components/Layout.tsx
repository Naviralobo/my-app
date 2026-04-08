"use client";
import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow container mx-auto px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}
