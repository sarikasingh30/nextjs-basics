"use client"
import { useRouter } from "next/navigation"

export default function OrderProduct(){
    const router=useRouter()
    const handleClick=()=>{
        console.log("Order Placed")
        router.push("/")

    }
    return (
        <>
        <h1>Order-Product Now........</h1>
        <button onClick={handleClick}>Place Now...</button>
        </>
    )
}