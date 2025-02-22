import React from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import styles from './ChatScreen.module.css';

const ChatScreen = ({ chat, onBack }) => {
  const messages = [
    {
      id: 1,
      sender: 'them',
      text: "Ahoy! Fancy a drink at the Rusty Anchor?",
      time: "2:30 PM"
    },
    {
      id: 2,
      sender: 'me',
      text: "Aye! What time shall we meet?",
      time: "2:35 PM"
    },
    {
      id: 3,
      sender: 'them',
      text: "I need to tell you a secret. I've got scurvy",
      time: "2:36 PM"
    },
    {
      id: 4,
      sender: 'me',
      text: "I'm sorry to hear that. I'll bring you some medicine.",
      time: "2:37 PM"
    },
    {
      id: 5,
      sender: 'them',
      text: "And herpes.",
      time: "2:38 PM"
    },
    {
      id: 6,
      sender: 'me',
      text: "Har Har so does everyone on my ship.",
      time: "2:39 PM"
    }
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <button onClick={onBack} className={styles.backButton}>
          <ArrowLeft size={24} />
        </button>
        <img src={chat.avatar} alt={chat.name} className={styles.avatar} />
        <div className={styles.headerInfo}>
          <h2 className={styles.name}>{chat.name}</h2>
        </div>
      </div>

      {/* Messages */}
      <div className={styles.messages}>
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`${styles.message} ${message.sender === 'me' ? styles.sent : styles.received}`}
          >
            <div className={styles.messageContent}>
              <p className={styles.messageText}>{message.text}</p>
              <span className={styles.messageTime}>{message.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className={styles.inputContainer}>
        <input 
          type="text" 
          placeholder="Send a message..." 
          className={styles.input}
        />
        <button className={styles.sendButton}>
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatScreen; 