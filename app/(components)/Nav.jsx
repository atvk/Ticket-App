"use client"
import Link from "next/link"
import { House, Ticket } from "@phosphor-icons/react/dist/ssr"

export default function Nav() {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/"><House size={32} className="icon" /></Link>
        <Link href="/TicketPage/new"><Ticket size={32} className="icon" /></Link>
      </div>
      <div>
        <p className="text-default-text">steblovskiyanton@gmail.com</p>
      </div>
    </nav>
  )
}

