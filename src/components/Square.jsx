import React from 'react'
const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  return (
    <div  onClick={() => updateBoard(index)} className={className}>{children}</div>
  )
}
export default Square