import React, { useState } from 'react';
import styles from './MessagesScreen.module.css';
import ChatScreen from './ChatScreen';

const MessagesScreen = ({ matches }) => {
  const [selectedChat, setSelectedChat] = useState(null);

  if (selectedChat) {
    return <ChatScreen chat={selectedChat} onBack={() => setSelectedChat(null)} />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Messages</h1>
      <div className={styles.messagesList}>
        {matches.length === 0 ? (
          <div className={styles.noMatches}>
            <p>No matches yet! Keep swiping to find your crew! 🏴‍☠️</p>
          </div>
        ) : (
          matches.map((message) => (
            <div 
              key={message.id} 
              className={styles.messageItem}
              onClick={() => setSelectedChat(message)}
            >
              <img 
                src={message.avatar} 
                alt={message.name} 
                className={styles.avatar} 
                draggable="false"
              />
              <div className={styles.messageContent}>
                <div className={styles.messageHeader}>
                  <h3 className={styles.messageName}>{message.name}</h3>
                  <span className={styles.messageTime}>{message.time}</span>
                </div>
                <p className={`${styles.messageText} ${message.unread ? styles.unread : ''}`}>
                  {message.lastMessage}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MessagesScreen; 