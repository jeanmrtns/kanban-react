"use client"
import { Avatar } from "@/components";
import { Faders, MagnifyingGlass, Pen } from "phosphor-react";

export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="font-bold text-[2rem]">Meu Kanban</h2>
          <button>
            <Pen size={24} color="#C7C7CD" weight="fill" />
          </button>
        </div>

        <Avatar />
      </header>

      <section className="mt-11 flex items-center gap-4">
        <button className="flex items-center gap-2 bg-violet-600 py-3 px-8 rounded text-white hover:bg-violet-500 transition-colors">
          <Faders size={24} weight="fill" />
          Filtrar
        </button>

        <label className="flex items-center border border-zinc-200 flex-1 py-3 gap-2 px-6 bg-white rounded focus-within:border-violet-500">
          <MagnifyingGlass size={24} weight="fill" className="text-zinc-500" />
          <input type="text" placeholder="Busque por cards, assuntos ou responsáveis..." className="placeholder:text-zinc-400 w-full border-0 outline-none" />
        </label>
      </section>
    </main>
  )
}