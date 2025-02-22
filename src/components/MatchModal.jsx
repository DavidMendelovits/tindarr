import React from 'react';
import { MessageSquare, X } from 'lucide-react';
import styles from './MatchModal.module.css';

const MatchModal = ({ match, onClose, onMessage }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>
        
        <h2 className={styles.title}>It's a Match!</h2>
        <p className={styles.subtitle}>Shiver me timbers! You've found a crew mate!</p>
        
        <div className={styles.images}>
          <img src={match.avatar} alt={match.name} className={styles.matchImage} />
        </div>
        
        <h3 className={styles.matchName}>{match.name}</h3>
        
        <div className={styles.buttons}>
          <button className={styles.messageButton} onClick={onMessage}>
            <MessageSquare size={20} />
            Send a Message
          </button>
          <button className={styles.keepSwipingButton} onClick={onClose}>
            Keep Swiping
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchModal; 