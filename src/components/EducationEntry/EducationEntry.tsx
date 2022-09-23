import React from 'react'
import { List } from '../List'

export const EducationEntry = ({
  name,
  subjects,
  dates,
}: {
  name: string
  subjects: string[]
  dates: string
}) => {
  return (
    <div className="EducationEntry">
      <h3 className="EducationEntry__name">{name}</h3>
      <div className="EducationEntry__dates">{dates}</div>
      <List items={subjects} />
    </div>
  )
}
