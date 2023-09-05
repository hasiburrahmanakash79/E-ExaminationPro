import React, { useState } from 'react'
import VideoCall from './VideoCall'

const TempClassRoom = () => {
  const [inCall, setInCall] = useState(false)
  return (
    <div className='App' style={{ height: '100%' }}>
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <button className='btn btn-primary' onClick={() => setInCall(true)}>
          Join Call
        </button>
      )}
    </div>
  )
}

export default TempClassRoom
