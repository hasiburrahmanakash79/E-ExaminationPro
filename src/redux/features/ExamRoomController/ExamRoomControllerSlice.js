import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    audioMuted: true,
    videoMuted: false
}
const ExamRoomControlSlice = createSlice({
    name: 'ExamRoomControls',
    initialState,
    reducers: {
        toggleAudioMute: state => {
            state.audioMuted = !state.audioMuted
        },
        toggleVideoMute: state => {
            state.videoMuted = !state.videoMuted
        },
        resetControls: state => {
            audioMuted: true;
            videoMuted: false

        }


    }
})
export const { toggleAudioMute, toggleVideoMute, resetControls } = ExamRoomControlSlice.actions
export default ExamRoomControlSlice.reducer