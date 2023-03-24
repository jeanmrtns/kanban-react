"use client"

export function TaskCard() {
  return (
    <div className="p-6 rounded shadow-md h-[153px] w-full bg-white">
      <header>
        <strong className="font-bold text-sm">#boraCodar um Kanban 🧑‍💻</strong>
      </header>

      <p className="text-zinc-600 font-medium mt-[0.625rem] text-sm h-11 overflow-hidden">Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>

      <footer className="mt-[0.625rem]">
        <ul className="flex items-center gap-2">
          <li className="text-[11px] rounded-lg font-medium text-violet-500 bg-violet-300 px-2 py-1">Rocketseat</li>
          <li className="text-[11px] rounded-lg font-medium text-violet-500 bg-violet-300 px-2 py-1">Desafio</li>
        </ul>
      </footer>
    </div>
  )
}