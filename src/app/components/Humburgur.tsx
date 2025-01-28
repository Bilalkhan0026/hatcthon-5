"use client"
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";



  

import {
  Sheet,
 
  SheetContent,
  

  SheetHeader,

  SheetTrigger,
} from "@/components/ui/sheet"


const SHEET_SIDES = [ "right"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className=" gap-2 bg-black">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side} >
          <SheetTrigger asChild className="lg:hidden">
            <TiThMenu className="text-2xl "/>
          </SheetTrigger >
          <SheetContent side={side}>
            <SheetHeader>
              
            </SheetHeader>
             {/* navigation bar */}
             <ul className="bg-black">
             <li className=" grid grid-cols-1 space-y-5 place-items-start bg-black">   
             <Link className="ml-[25px]" href="/">Home</Link>
          <Link className="ml-[25px]" href="/menu">Menu</Link>
          <Link className="ml-[25px]" href="/blog">Blog</Link>
          <Link className="ml-[25px]" href="/cheekout-page">Pages</Link>
          <Link className="ml-[25px]" href="/about">About</Link>
          <Link className="ml-[25px]" href="/shop">Shop </Link>
          <Link className="ml-[25px]" href="/sign-up">Contact </Link>
                </li>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}