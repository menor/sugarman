import React from 'react'

const Bookmark = ({stroke, fill}) => (
  <svg viewBox="0 0 30 38" width="26px" height="26px">
    <desc>A bookmark icon</desc>

    <path
      id="Bookmark"
      transform="translate(-10.000000, -6.000000)"
      stroke-width="2"
      stroke={stroke || '#000'}
      fill={fill || 'none'}
      d="M11,7 L11,41.7991956 L25,29.5742202 L39,41.7991956 L39,7 L11,7 Z"
    />
  </svg>
)

export default Bookmark
