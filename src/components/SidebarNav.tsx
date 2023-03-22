"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Gear, StackSimple, Users } from "phosphor-react";

const links = [
  {
    href: '/',
    text: 'Boards',
    icon: <StackSimple size={20} />
  },
  {
    href: '/equipes',
    text: 'Equipes',
    icon: <Users size={20} />
  },
  {
    href: '/relatorios',
    text: 'Relatórios',
    icon: <FileText size={20} />
  },
  {
    href: '/ajustes',
    text: 'Ajustes',
    icon: <Gear size={20} />
  }
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className='flex flex-col gap-9'>
      {links.map(link => (
        <Link key={link.href} className={clsx('flex items-center gap-4 text-base hover:text-white', {
          'text-white font-bold': link.href === pathname,
          'text-link font-medium': link.href !== pathname
        })} href={link.href}>
          {link.icon} <span>{link.text}</span>
        </Link>
      ))}
    </nav>
  )
}