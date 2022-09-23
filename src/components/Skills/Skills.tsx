import React from 'react'
import { SkillChip } from './components'

export const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <div className="Skills">
      {skills.map((skill) => (
        <SkillChip key={skill}>{skill}</SkillChip>
      ))}
    </div>
  )
}
