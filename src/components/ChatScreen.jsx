import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import styles from './ChatScreen.module.css';

const ChatScreen = ({ chat, onBack }) => {
  const [messageText, setMessageText] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'them',
      text: "Ahoy! We've matched! Let's set sail together!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    // Add user message
    const newMessage = {
      id: chatMessages.length + 1,
      sender: 'me',
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatMessages(prev => [...prev, newMessage]);
    setMessageText('');

    // Simulate response after a delay
    setTimeout(() => {
      const responses = [
        "Yarr, that's interesting! Tell me more!",
        "By Blackbeard's beard, you don't say!",
        "Shiver me timbers, what a tale!",
        "Aye, that's the spirit!",
        "Blimey! You're quite the storyteller!"
      ];
      
      const responseMessage = {
        id: chatMessages.length + 2,
        sender: 'them',
        text: responses[Math.floor(Math.random() * responses.length)],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setChatMessages(prev => [...prev, responseMessage]);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

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
        {chatMessages.map((message) => (
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
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form className={styles.inputContainer} onSubmit={handleSendMessage}>
        <input 
          type="text" 
          placeholder="Send a message..." 
          className={styles.input}
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
        <button type="submit" className={styles.sendButton}>
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default ChatScreen; 