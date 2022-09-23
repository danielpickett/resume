import React from 'react'

export const List = ({ items }: { items: string[] }) => {
  return (
    <ul className="List">
      {items.map((item) => (
        <li className="List__item" key={item}>
          {item}
        </li>
      ))}
    </ul>
  )
}
