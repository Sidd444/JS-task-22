import React from 'react'

export default function Card(props) {
  return (
    <div className="card">
        <p>{props.user.id}</p>
        <h3>{props.user.title}</h3>
        <p>{props.user.body}</p>
    </div>
  )
}
