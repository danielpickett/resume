import React from 'react'

export const ResourceLink = ({
  resource,
  link,
}: {
  resource: string
  link: string
}) => {
  return (
    <div className="ResourceLink">
      <span className="ResourceLink__resource">{resource}: </span>
      <a className="ResourceLink__link" href={link}>
        {link}
      </a>
    </div>
  )
}
