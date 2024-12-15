import { useState } from 'react'

interface SidebarLinkGroupProps {
  children: (handleClick: () => void, openGroup: boolean) => React.ReactNode
  open?: boolean
}

export default function SidebarLinkGroup({
  children,
  open = false
}: SidebarLinkGroupProps) {
  const [openGroup, setOpenGroup] = useState<boolean>(open)

  const handleClick = () => {
    setOpenGroup(!openGroup);
  }

  return (
    <li className={`pr-3 py-2 rounded-sm mb-0.5 last:mb-0 group is-link-group ${open && 'bg-app-red-900'} list-none`}>
      {children(handleClick, openGroup)}
    </li>
  )
}