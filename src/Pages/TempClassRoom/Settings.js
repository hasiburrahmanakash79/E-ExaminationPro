import {
    // AgoraVideoPlayer,
    createClient,
    createMicrophoneAndCameraTracks,
    // ClientConfig,
    // IAgoraRTCRemoteUser,
    // ICameraVideoTrack,
    // IMicrophoneAudioTrack
} from 'agora-rtc-react'
import useAuth from '../../Hooks/useAuth/useAuth';
const appId = "cd0ea10aef9c4468b497a8c629bb9da1";
const token = null
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };

const { user } = useAuth()
export const getUserId = () => {
    return user?.email
}

export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
