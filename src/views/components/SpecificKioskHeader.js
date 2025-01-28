import React from 'react'
import '../styles/styles.css'
export const SpecificKioskHeader = ({title}) => {
  return (
    <section style={{ display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
    <h1 className="specificHeader">{title}</h1>
    </section>
  )
}
