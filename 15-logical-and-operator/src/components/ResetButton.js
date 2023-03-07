import React from 'react'
const buttonStyle = { backgroundColor: 'lightgreen' }

const ResetButton = ({ onClick, count }) => {
  return (
    <div>
      {count > 0 && (
        <div>
          <button style={buttonStyle} onClick={onClick}>
            Reset
          </button>
        </div>
      )}
    </div>
  )
}

export default ResetButton
