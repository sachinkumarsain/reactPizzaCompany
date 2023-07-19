import React from 'react'
import "./Style.css"

function Footer() {
  let openTime = 10;
  let closeTime = 22;
  let date = new Date()

  let localHourUTC = date.getUTCHours();
  let indianTime = 5.5
  let indianLocalTime = (localHourUTC + indianTime) % 24
  return (
    <>
      <footer >
        <p>We're Happy to welcome you between {openTime}:00  and {closeTime}:00</p>
        <button className={indianLocalTime > openTime && indianLocalTime < closeTime ? "open" : "close"} >
          Order Now
        </button>
      </footer>

    </>
  )
}

export default Footer