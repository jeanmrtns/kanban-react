import { Logo, SidebarNav } from '@/components'
import '@/styles/main.css'

export const metadata = {
  title: 'Kanban App',
  description: 'Kanban App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/task.ico" type="image/x-icon" />
      </head>
      <body className='min-h-screen w-full bg-violet-600 flex'>
        <aside className='flex flex-col pl-9 pr-12 py-8 w-56 gap-14'>
          <Logo />

          <SidebarNav />
        </aside>
        <div className='mt-1 rounded-tl-3xl bg-zinc-50 px-8 py-12 w-full'>
          {children}
        </div>
      </body>
    </html>
  )
}
