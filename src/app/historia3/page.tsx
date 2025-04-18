"use client";
import Header from "@/components/ui/Header";
import { Tasklist } from "@/components/ui/historia3/Tasklist";

export default function Historia3Page() {
  return (
    <div>
      <Header />
      <div className="p-8">
        <Tasklist />
      </div>
    </div>
  );
}