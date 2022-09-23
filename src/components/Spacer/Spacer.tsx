import React from 'react'

export const Spacer = ({ size = '1rem' }: { size?: string }) => (
  <div className="Spacer" style={{ height: size, width: size }} />
)
