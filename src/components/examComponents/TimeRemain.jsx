import React from 'react';
import './TimeRemain.css'
const TimeRemain = ({timerProgress,timeRemaining}) => {
    return (
        <div className="relative h-4 w-full bg-gray-200 rounded">
            <div
                className=" h-full mt-2 animate-progress rounded "
                style={{
                    width: `${timerProgress}%`,
                }}
            ></div>
            <div className='text-3xl text-center my-7 font-semibold'>
                Time Remaining: {Math.floor(timeRemaining / 60)}:{timeRemaining % 60}
            </div>
        </div>
    );
};

export default TimeRemain;