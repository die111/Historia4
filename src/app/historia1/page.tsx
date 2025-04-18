"use client";
import Header from "@/components/ui/Header";
import Ui1Component from "@/components/ui/historia1/ui1Component"; 

export default function Historia1Page() {
  return (
    <div>
      <Header />
      <div className="p-8">
        <Ui1Component /> 
      </div>
    </div>
  );
}