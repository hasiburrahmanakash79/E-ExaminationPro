import { useState } from 'react'
import { useClient } from './Settings'
import { Grid } from '@mui/material'
import {
  ExclamationTriangleIcon,
  MicrophoneIcon,
  VideoCameraIcon
} from '@heroicons/react/20/solid'
import { Mic, MicOffIcon } from 'lucide-react'
// import { useDispatch, useSelector } from 'react-redux'

const Controls = ({ tracks, setStart, setInCall }) => {
  //   const dispatch = useDispatch()
  //   const { audioMuted, videoMuted } = useSelector(
  //     state => state.examRoomControls
  //   )
  const client = useClient()
  const [trackState, setTrackState] = useState({ video: true, audio: true })
  console.log(trackState)

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
    setStart(false)
    setInCall(false)
  }

  return (
    <Grid container spacing={2} alignItems='center'>
      <div>
        <button
          className={`btn ${
            trackState.audio ? 'btn-primary' : 'btn-secondary'
          } `}
          onClick={() => mute('audio')}
        >
          {trackState.audio ? <Mic /> : <MicOffIcon />}
        </button>
      </div>
      <Grid item>
        <button
          className={`btn ${
            trackState.video ? 'btn-primary' : 'btn-secondary'
          } `}
          onClick={() => mute('video')}
        >
          {trackState.video ? <p>on</p> : <p>off</p>}
        </button>
      </Grid>
      <div className='flex'>
        <button className='btn btn-accent' onClick={() => leaveChannel()}>
          Leave
        </button>
      </div>
    </Grid>
  )
}

export default Controls
