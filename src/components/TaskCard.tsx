"use client"

interface TaskCardProps {
  title: string
  content: string
  tags: string[]
}

export function TaskCard({ title, content, tags }: TaskCardProps) {
  return (
    <div className="p-6 rounded shadow-md h-[153px] w-full bg-white">
      <header>
        <strong className="font-bold text-sm">
          {title}
        </strong>
      </header>

      <p className="text-zinc-600 font-medium mt-[0.625rem] text-sm h-11 overflow-hidden">
        {content}
      </p>

      <footer className="mt-[0.625rem]">
        <ul className="flex items-center gap-2">
          {tags.map(tag => (
            <li key={tag} className="text-[11px] rounded-lg font-medium text-violet-500 bg-violet-300 px-2 py-1">
              {tag}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  )
}