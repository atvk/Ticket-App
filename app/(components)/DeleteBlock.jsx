"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
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
    <FontAwesomeIcon
      icon={faX}
      className="text-nav hover:cursor-pointer hover:text-btn-hover"
      onClick={deleteTicket}

    />

  )
}