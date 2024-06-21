"use client"
import Image from "next/image";
import CategoryList from "../components/Home/CategoryList";

export default function Home() {
  return (
   <div className="grid grid-cols-4 h-screen">
    <div className="p-3"><CategoryList/></div>
    <div className="  col-span-3">Sec</div>
   </div>
  );
}
