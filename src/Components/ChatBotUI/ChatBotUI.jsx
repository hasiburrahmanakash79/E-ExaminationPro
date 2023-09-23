import React from "react";

const ChatBotUI = () => {
  return (
    <div className="h-[600px]  ">
      <div className="p-3 flex flex-col justify-between">
        <div className="justify-between flex items-center ">
          <div>
            <p className="text-2xl">E-ExamPro</p>
            <p className="text-xs">Ask any exam related question you have</p>
          </div>
          <div>
            <button className="p-2 rounded-full  ag-slate-600">X</button>
          </div>
        </div>
        <div>
          <input
            type="text"
            className="  border rounded p-2 focus:outline-none"
            placeholder="Ask me anything"
          />
          <button className="rounded p-2 border">sent</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBotUI;
