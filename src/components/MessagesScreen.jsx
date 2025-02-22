import React, { useState } from 'react';
import styles from './MessagesScreen.module.css';
import ladyPirate from '../assets/pirate_pictures/ladypirate.webp';
import fishGuy from '../assets/pirate_pictures/Collier-Tinder-Guy-Holding-a-Fish.webp';
import couplePirate from '../assets/pirate_pictures/looking43rd.webp';
import pegleglady from '../assets/pirate_pictures/pegleg.webp';
import ChatScreen from './ChatScreen';

const MessagesScreen = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const messages = [
    {
      id: 1,
      name: "Captain Sally 'Silver Tongue' Smith",
      avatar: ladyPirate,
      lastMessage: "Ahoy! Fancy a drink at the Rusty Anchor?",
      time: "2h ago",
      unread: true
    },
    {
      id: 2,
      name: "Mary and Jack",
      avatar: couplePirate,
      lastMessage: "We've got room in our crew for one more...",
      time: "1d ago",
      unread: false
    }
  ];

  if (selectedChat) {
    return <ChatScreen chat={selectedChat} onBack={() => setSelectedChat(null)} />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Messages</h1>
      <div className={styles.messagesList}>
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={styles.messageItem}
            onClick={() => setSelectedChat(message)}
          >
            <img src={message.avatar} alt={message.name} className={styles.avatar} />
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
        ))}
      </div>
    </div>
  );
};

export default MessagesScreen; 