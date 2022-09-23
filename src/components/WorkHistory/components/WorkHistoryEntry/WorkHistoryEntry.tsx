import React from 'react'
import { List } from '../../../List'

export const WorkHistoryEntry = ({
  company,
  title,
  dates,
  bullets,
}: {
  company: string
  title: string
  dates: string
  bullets: string[]
}) => {
  return (
    <div className="WorkHistoryEntry">
      <h3 className="WorkHistoryEntry__header">
        <span>{title}</span>
        <span>{dates}</span>
      </h3>
      <div className="WorkHistoryEntry__company">{company}</div>
      <List items={bullets} />
    </div>
  )
}
