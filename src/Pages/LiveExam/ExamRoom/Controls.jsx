/* eslint-disable react/prop-types */
import { useState } from 'react'
import {
  LogOut,
  Mic,
  MicOff,
  MonitorIcon,
  MonitorOff,
  VideoIcon,
  VideoOffIcon
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Controls (props) {
  const {
    tracks,
    setStart,
    setInCall,
    client,
    screenTrack,
    isScreenSharing,
    setIsScreenSharing
  } = props
  const [trackState, setTrackState] = useState({ video: true, audio: true })
  const mute = async type => {
    if (type === 'audio') {
      await tracks[0].setEnabled(!trackState.audio)
      setTrackState(ps => {
        return { ...ps, audio: !ps.audio }
      })
    } else if (type === 'video') {
      await tracks[1].setEnabled(!trackState.video)
      setTrackState(ps => {
        return { ...ps, video: !ps.video }
      })
    }
  }
  const leaveChannel = async () => {
    await client.leave()
    client.removeAllListeners()
    tracks[0].close()
    tracks[1].close()
    setIsScreenSharing(false)
    setStart(false)
    setInCall(false)
  }

  return (
    <div className='flex justify-between w-full px-4'>
      <div>
        <button
          className={`btn ${
            trackState.audio ? 'btn-primary' : 'btn-secondary'
          } `}
          onClick={() => mute('audio')}
        >
          {trackState.audio ? <Mic /> : <MicOff />}
        </button>
      </div>
      <div>
        <button
          className={`btn tooltip tooltip-secondary tooltip-bottom  ${
            isScreenSharing ? 'btn-primary' : 'btn-secondary'
          } `}
          data-tip='you can not disable screen share during the exam!'
        >
          {isScreenSharing ? <MonitorIcon /> : <MonitorOff />}
        </button>
      </div>
      <div>
        <button
          className={`btn ${
            trackState.video ? 'btn-primary' : 'btn-secondary'
          } `}
          onClick={() => mute('video')}
        >
          {trackState.video ? <VideoIcon /> : <VideoOffIcon />}
        </button>
      </div>
      <div>
        <Link to='/'>
          <button
            className={`btn ${
              trackState.audio ? 'btn-primary' : 'btn-secondary'
            } `}
            onClick={() => leaveChannel()}
          >
            <LogOut />
          </button>
        </Link>
      </div>
    </div>
  )
}
