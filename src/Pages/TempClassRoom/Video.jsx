import { AgoraVideoPlayer } from 'agora-rtc-react'
import { useState, useEffect } from 'react'

const Video = ({ remoteUsers, localTracks }) => {
  useEffect(() => {
    remoteUsers.forEach(user => {
      const { audioTrack } = user
      if (audioTrack) audioTrack.play()
    })
  }, [remoteUsers])

  //   const [gridSpacing, setGridSpacing] = useState(12)
  //   const remoteTracks = remoteUsers.map(user => user.videoTrack).filter(Boolean)
  //   useEffect(() => {
  //     setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4))
  //   }, [users, tracks])

  return (
    <div className='grid h-screen grid-cols-3 border'>
      <div className='w-12 h-12 avatar'>
        <AgoraVideoPlayer
          className='rounded-full '
          videoTrack={localTracks[1]}
          //   style={{ height: '100%', width: '100%', borderRadius: '50%' }}
        />
      </div>
      {users.length > 0 &&
        remoteUsers.map(user => {
          if (user.videoTrack) {
            return (
              <div className='w-12 h-12 border-black avatar'>
                <AgoraVideoPlayer
                  videoTrack={user.videoTrack}
                  key={user.uid}
                  className='rounded-full'
                  //   style={{ borderRadius: '50%', height: '50%', width: '50%' }}
                />
              </div>
            )
          } else return null
        })}
    </div>
  )
}

export default Video
