import { useState, useEffect } from 'react'
import {
  config,
  useClient,
  useMicrophoneAndCameraTracks,
  channelName
} from './Settings.js'
import Controls from './Controls.jsx'
import Video from './Video.jsx'
import useAuth from '../../Hooks/useAuth/useAuth.jsx'

const VideoCall = ({ setInCall }) => {
  const [localTracks, setLocalTracks] = useState([])
  const [remoteUsers, setRemoteUsers] = useState([])
  //   const [users, setUsers] = useState([])
  const { user } = useAuth()
  const [start, setStart] = useState(false)
  const uid = user?.email
  const client = useClient()
  const { ready, tracks } = useMicrophoneAndCameraTracks()
  useEffect(() => {
    const newTracks = tracks.map(track => {
      return { ...track, userId: uid }
    })
    setLocalTracks(newTracks)
  }, [tracks, uid])
  useEffect(() => {
    let init = async name => {
      client.on('user-published', async (user, mediaType) => {
        await client.subscribe(user, mediaType)
        if (mediaType === 'video') {
          setRemoteUsers(prevUsers => {
            return [...prevUsers, user]
          })
        }
        if (mediaType === 'audio') {
          user.audioTrack.play()
        }
      })

      client.on('user-unpublished', (user, mediaType) => {
        if (mediaType === 'audio') {
          if (user.audioTrack) user.audioTrack.stop()
        }
        if (mediaType === 'video') {
          setUsers(prevUsers => {
            return prevUsers.filter(User => User.uid !== user.uid)
          })
        }
      })

      client.on('user-left', user => {
        setUsers(prevUsers => {
          return prevUsers.filter(User => User.uid !== user.uid)
        })
      })

      try {
        await client.join(config.appId, name, config.token, null)
      } catch (error) {
        console.log('error')
      }

      if (tracks) await client.publish([tracks[0], tracks[1]])
      setStart(true)
    }

    if (ready && tracks) {
      try {
        init(channelName)
      } catch (error) {
        console.log(error)
      }
    }
  }, [channelName, client, ready, tracks])

  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-1'>
        {ready && tracks && (
          <Controls
            localTracks={localTracks}
            // remoteUsers={remoteUsers}
            // tracks={tracks}
            // setStart={setStart}
            // setInCall={setInCall}
          />
        )}
      </div>
      <div className='col-span-2'>
        {start && tracks && (
          <Video
            // uid={uid}
            localTracks={localTracks}
            remoteUsers={remoteUsers}
            // tracks={tracks}
            // users={users}
          />
        )}
      </div>
    </div>
  )
}

export default VideoCall
