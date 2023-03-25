"use client"
import { Avatar, TaskCard } from "@/components";
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

        <label className="flex shadow-sm items-center border border-zinc-200 flex-1 py-3 gap-2 px-6 bg-white rounded focus-within:border-violet-500">
          <MagnifyingGlass size={24} weight="fill" className="text-zinc-500" />
          <input type="text" placeholder="Busque por cards, assuntos ou responsáveis..." className="placeholder:text-zinc-400 w-full border-0 outline-none" />
        </label>
      </section>

      <section className="grid grid-cols-3 gap-[4.5rem] mt-14">
        <div>
          <strong className="font-bold text-zinc-800 text-xl">A fazer</strong>
          <ul className="mt-6 flex flex-col gap-6">
            <TaskCard
              tags={["initial", "first"]}
              content="The content of this task"
              title="First task"
            />
          </ul>
        </div>

        <div>
          <strong className="font-bold text-zinc-800 text-xl">Fazendo</strong>
          <ul className="mt-6 flex flex-col gap-6">
          </ul>
        </div>

        <div>
          <strong className="font-bold text-zinc-800 text-xl">Feito</strong>
          <ul className="mt-6 flex flex-col gap-6">
          </ul>
        </div>
      </section>
    </main>
  )
}