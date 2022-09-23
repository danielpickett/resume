import React from 'react'

export const SidebarBullets = ({ bullets }: { bullets: string[] }) => (
  <ul className="SidebarBullets">
    {bullets.map((bullet) => (
      <li className="SidebarBullets__bullet" key={bullet}>
        {bullet}
      </li>
    ))}
  </ul>
)
