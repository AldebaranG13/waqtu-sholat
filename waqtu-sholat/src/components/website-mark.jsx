import { useState } from 'react'
import websiteMark from '../assets/websiteMark.png'
import './website-mark.css'

function WebsiteMark() {
  const [zoomed, setZoomed] = useState(false)

  return (
    <>
      <div className="website-mark-spacer" />
      <div
        className="website-mark-wrapper"
        onClick={() => setZoomed(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            setZoomed(true)
          }
        }}
      >
        <img src={websiteMark} alt="Website Mark" />
      </div>
      <div
        className={`website-mark-overlay ${zoomed ? 'visible' : ''}`}
        onClick={() => setZoomed(false)}
      >
        <img src={websiteMark} alt="Website Mark enlarged view" />
      </div>
    </>
  )
}

export default WebsiteMark
