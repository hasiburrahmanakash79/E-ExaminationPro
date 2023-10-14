/* eslint-disable react/prop-types */

import { AgoraVideoPlayer } from 'agora-rtc-react'

const Video = props => {
  const { users, tracks, screenTrack } = props

  return (
    <div className='grid items-center grid-cols-2 '>
      <div className='w-36 h-36 avatar'>
        <AgoraVideoPlayer className='rounded-xl ' videoTrack={tracks[1]} />
      </div>
      {/* Display screen sharing video track if available */}
      <div className='w-36 '>
        {screenTrack && (
          <div className=' w-36 h-36 hover:w-96 avatar'>
            <AgoraVideoPlayer
              videoTrack={screenTrack}
              className='mask mask-squircle'
            />
          </div>
        )}
      </div>
      <div>
        {users?.length > 0 &&
          users?.map(user => (
            <div key={user.uid} className='w-24 h-24 avatar'>
              {user.videoTrack ? (
                <AgoraVideoPlayer
                  videoTrack={user.videoTrack}
                  className='rounded-full'
                />
              ) : (
                <div
                  className='rounded-full'
                  style={{
                    width: '100%',
                    height: '100%',
                    border: '2px solid #000'
                  }}
                ></div>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}
export default Video
