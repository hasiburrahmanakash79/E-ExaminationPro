import {
    createClient,
    createScreenVideoTrack
    ,
    createMicrophoneAndCameraTracks,
} from 'agora-rtc-react'
const appId = "b1c5f419638d428cb4b18561affead9b";
const token = null
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };

export const useClient = createClient(config);

export const useScreenVideoTrack = createScreenVideoTrack()

export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
