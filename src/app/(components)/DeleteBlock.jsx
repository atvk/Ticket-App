"use client"
import { X } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation";

export default function DeleteBlock({ id }) {

  const router = useRouter();

  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE"
    })
    if (res.ok) {
      router.refresh()
    }
  }

  return (
    <X size={32}
      className="text-nav hover:cursor-pointer hover:text-btn-hover"
      onClick={deleteTicket}

    />

  )
}