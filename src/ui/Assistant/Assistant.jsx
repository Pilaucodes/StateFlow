import "./Assistant.css";
import { useState, useEffect, useRef } from "react";
import { askAssistant } from "../../openAiintegration/openai";
// displays the AI Assistant page
function Assistant() {
  // stores user's message
  const [message, setMessage] = useState("");

  // stores all chat messages
const [messages, setMessages] = useState([
  {
    sender: "ai",
    text: "Hello there:) It's Shell, your Assistant. Ask me about productivity or your tasks.",
  },
]);

// bottom of chat reference
const chatEndRef = useRef(null);

// Adds the user's message to the chat
async function sendMessage() {

  // Don't send empty messages
  if (message.trim() === "") {
    return;
  }

  // Create the user's message
  const userMessage = {
    sender: "user",
    text: message,
  };

  // for asking AI
const aiReply = await askAssistant(message);

// for AI response
const assistantMessage = {
  sender: "ai",
  text: aiReply,
};

  // adds both messages to the chat
  setMessages([
    ...messages,
    userMessage,
    assistantMessage,
  ]);

  // clears input box
  setMessage("");
}

// automatically scrolls to the latest message
useEffect(() => {

  chatEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });

}, [messages]);

 return (
  <div className="assistant">

    <h1>Assistant</h1>

    <div className="chat-container">

      {/* displays every chat message */}
      {messages.map((chat, index) => (

        <div
          key={index}
          className={
            chat.sender === "ai"
              ? "ai-message"
              : "user-message"
          }
        >
          {chat.text}
        </div>

      ))}

      <div ref={chatEndRef}></div>

    </div>

    {/* message area */}
    <div className="chat-input">

      <input
  type="text"
  placeholder="Ask me anything..."
  value={message}
  onChange={(event) =>
    setMessage(event.target.value)
  }
  onKeyDown={(event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  }}
/>

      <button onClick={sendMessage}>
        Send
      </button>

    </div>

  </div>
);
}

export default Assistant;