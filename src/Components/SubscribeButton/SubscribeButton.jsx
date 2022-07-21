import React from 'react'
import './SubscribeButton.css'

export default function SubscribeButton({ isannual }) {
    

  return (
    <div>
        <button style={!isannual ? {backgroundColor:'#1899D6'} : {backgroundColor:'rgb(67, 24, 102)'}} className="button-19">
            Subscribe
        </button>
    </div>
  )
}
