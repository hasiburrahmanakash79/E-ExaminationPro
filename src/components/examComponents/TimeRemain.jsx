import React, { useEffect, useState } from 'react';
import './TimeRemain.css'
const TimeRemain = ({  handleFinishExam,setTimer,examType,start,timerProgress,setTimerProgress,totalDuration,timeRemaining,setTimeRemaining,setTakingTime }) => {


    useEffect(() => {
        if (timeRemaining <= 0) {
            // Time is up, finish the exam 
            handleFinishExam()
            return
        }

        if(((examType == 'multimedia_mcq' && start==true)||(examType == 'mcq')||(examType=='FillInTheBlank'))){
            const timer = setInterval(() => {
                setTimeRemaining(prevTime => prevTime - 1)
                setTimerProgress((timeRemaining / totalDuration) * 100)
                setTakingTime(prevTime=>prevTime+1)
            }, 1000) // Decrease timeRemaining every 1 second
    
            setTimer(timer)// send timer function to a variable timer 
    
            return () => clearInterval(timer) 

        }

       // Clean up the timer when component unmounts

    }, [timeRemaining,totalDuration])

    return (
        <div className=" my-10 h-4 w-full  ag-gray-200 rounded">
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