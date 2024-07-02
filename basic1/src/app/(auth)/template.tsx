"use client"
import Link from "next/link";
import "./styles.css"
import { usePathname } from "next/navigation";
import { useState } from "react";
const navLinks=[
    {name:"Register", href:"/register"},
    {name:"Login", href:"/login"},
    {name:"Forget Password", href:"/forget-password"}
]

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const pathName=usePathname()
    const [input,setInput]=useState("")
    return (
      <div>
        <div>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        </div>
        {navLinks?.map((el,index)=>{
            const isActive=pathName.startsWith(el.href)
             return (<Link href={el.href} key={index} className={isActive?"font-bold mr-5":"text-blue-500 mr-5"}>{el.name}</Link>)
        })}
        {children}
      </div>
    );
  }
  