"use client"
import { Avatar } from "@/components";
import { Pen } from "phosphor-react";

export default function Home() {
  return (
    <main className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h2 className="font-bold text-[2rem]">Meu Kanban</h2>
        <button>
          <Pen size={24} color="#C7C7CD" weight="fill" />
        </button>
      </div>

      <Avatar />
    </main>
  )
}