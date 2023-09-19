import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    inCall: false,
    audioMuted: true,
    videoMuted: false
}
const ExamRoomControlSlice = createSlice({
    name: 'ExamRoomControls',
    initialState,
    reducers: {
        toggleCall: state => {
            state.inCall = !state.inCall
        }
        ,
        toggleAudioMute: state => {
            state.audioMuted = !state.audioMuted
        },
        toggleVideoMute: state => {
            state.videoMuted = !state.videoMuted
        },
        resetControls: state => {
            state.audioMuted = true;
            state.videoMuted = false;

        }


    }
})
export const { toggleCall, toggleAudioMute, toggleVideoMute, resetControls } = ExamRoomControlSlice.actions
export default ExamRoomControlSlice.reducer