import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Bot = () => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e, message) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);
    window.scrollTo(0, 1e10);

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    setMessage("");

    fetch("https://chatbot-xi-mocha.vercel.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chats,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        msgs.push(data.output);
        setChats(msgs);
        setIsTyping(false);
        window.scrollTo(0, 1e10);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="relative max-w-md p-2 overflow-y-auto rounded max-h-96 bg-slate-800 font-inter">
      <div className="sticky top-0 z-50">
        <h1 className="text-2xl ">E-Exam Support</h1>
        <p className="text-xs text-orange-200">
          Ask any exam related question you have
        </p>
        <div className="divider my-1"></div>
      </div>
      <section className="p-4 mb-12 rounded-lg shadow-2xl drop-shadow-2xl z-0 overflow-hidden">
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p
                key={index}
                className={`${
                  chat.role === "user" ? "text-right ml-30 " : ""
                } ${
                  chat.role === "user" ? "flex-row-reverse" : ""
                } bg-darkslategray max-w-70 p-4  rounded-50`}
              >
                <span className="text-yellow-600">{chat.role.toUpperCase()}</span>
                <span> : </span>
                <span>{chat.content}</span>
              </p>
            ))
          : ""}
      </section>

      <div className={isTyping ? "" : "hidden"}>
        <p>
          <i>
            {isTyping ? (
              <span className="loading loading-dots loading-lg" />
            ) : (
              ""
            )}
          </i>
        </p>
      </div>

      <form
        onSubmit={(e) => chat(e, message)}
        className="flex gap-3 "
      >
        <textarea
          type="text"
          name="message"
          value={message}
          placeholder="Share with us your problem"
          onChange={(e) => setMessage(e.target.value)}
          className="textarea textarea-xs w-full max-w-xs border-none bg-white/25 focus:outline-none placeholder:text-xs placeholder:text-white text-sm"
        />
        <button className=" px-5 rounded bg-white/25">
          <FaArrowRight />
        </button>
      </form>
    </main>
  );
};

export default Bot;
