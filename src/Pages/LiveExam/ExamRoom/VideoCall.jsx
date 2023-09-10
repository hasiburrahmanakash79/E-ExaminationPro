/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import {
  config,
  useClient,
  useMicrophoneAndCameraTracks,
  useScreenVideoTrack,
  channelName
} from './settings.js'
import Video from './Video'
import Controls from './Controls'

export default function VideoCall (props) {
  const { setInCall } = props
  const [users, setUsers] = useState([])
  const [start, setStart] = useState(false)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const client = useClient()

  const { ready, tracks } = useMicrophoneAndCameraTracks()
  const {
    ready: screenReady,
    tracks: screenTrack,
    error
  } = useScreenVideoTrack(isScreenSharing, ready)
  console.log(screenReady, screenTrack, error)

  useEffect(() => {
    let init = async name => {
      client.on('user-published', async (user, mediaType) => {
        await client.subscribe(user, mediaType)
        if (mediaType === 'video') {
          setUsers(prevUsers => {
            return [...prevUsers, user]
          })
        }
        if (mediaType === 'audio') {
          user?.audioTrack.play()
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
        console.log(error)
      }
      if (isScreenSharing) {
        await client?.unpublish([tracks[1]])
        await client?.publish([screenTrack])
        setStart(true)
      } else {
        // await client?.unpublish([tracks[1]])
        await client?.unpublish([screenTrack])
      }
      // if (screenReady) {
      //   try {
      //     await client.unpublish([tracks[1]])
      //     await client.publish([screenTrack])
      //     setStart(true)
      //   } catch (error) {
      //     console.error('Error publishing screen track:', error)
      //   }
      // }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelName, client, ready, tracks, isScreenSharing, screenTrack])

  return (
    <div className='flex flex-col md:max-w-[90vw] h-[85vh] mx-auto p-4 border border-purple-700 rounded-lg min-h-24'>
      <div className='flex-1  min-h-[200px]'>
        {start && tracks && (
          <Video tracks={tracks} screenTrack={screenTrack} users={users} />
        )}
      </div>
      <div className='flex-none w-full '>
        {ready && tracks && (
          <Controls
            tracks={tracks}
            screenTrack={screenTrack}
            setStart={setStart}
            client={client}
            setInCall={setInCall}
            setIsScreenSharing={setIsScreenSharing}
            isScreenSharing={isScreenSharing}
          />
        )}
      </div>
    </div>
  )
}
