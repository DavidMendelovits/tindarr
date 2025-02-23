import React, { useState, useEffect } from 'react';
import { Heart, Anchor, Compass, MessageSquare, X } from 'lucide-react';
import TinderCard from 'react-tinder-card';
import styles from './PirateDatingApp.module.css';
import { pirateProfiles, grindrProfiles } from '../data/pirateData';
import MessagesScreen from './MessagesScreen';
import MatchModal from './MatchModal';

const PirateDatingApp = ({ type }) => {
  const [currentScreen, setCurrentScreen] = useState('discover');
  const [lastDirection, setLastDirection] = useState();
  const [matches, setMatches] = useState([]);
  const [currentMatch, setCurrentMatch] = useState(null);
  const [shuffledProfiles, setShuffledProfiles] = useState([]);

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Initialize shuffled profiles on mount
  useEffect(() => {
    const profiles = type === 'tinder' ? pirateProfiles : grindrProfiles;
    setShuffledProfiles(shuffleArray(profiles));
  }, [type]);

  // Add swipe configuration
  const swipeConfig = {
    preventSwipe: ['up', 'down'], // Only allow left/right swipes
    swipeRequirementType: 'position',
    swipeThreshold: 80, // Make it easier to swipe
    maxTilt: 15, // Reduce tilt for smoother feel
    flickOnSwipe: true,
  };

  // Add spring animation configuration
  const animationConfig = {
    tension: 200, // Controls the speed (lower = smoother)
    friction: 20, // Controls the bounce (higher = less bounce)
    mass: 1, // Controls the weight feel
    clamp: true, // Prevents overshooting
    restDelta: 0.01 // Controls when the spring is considered at rest
  };

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);

    if (direction === 'right') {
      const profiles = type === 'tinder' ? pirateProfiles : grindrProfiles;
      const profile = profiles.find(p => p.name === nameToDelete);
      if (profile && Math.random() < (profile.matchProbability || 0.5)) {
        // Create match with reference to original profile
        const newMatch = {
          ...profile,
          id: matches.length + 1,
          lastMessage: profile.messages?.[0] || "Ahoy! We've matched! Let's set sail together!",
          time: "Just now",
          unread: true,
          avatar: profile.image
        };
        setMatches(prevMatches => [...prevMatches, newMatch]);
        setCurrentMatch(newMatch);
      }
    }
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  const handleMessageMatch = () => {
    setCurrentScreen('messages');
    setCurrentMatch(null);
  };

  const renderScreen = () => {
    switch(currentScreen) {
      case 'messages':
        return <MessagesScreen matches={matches} />;
      case 'profile':
        return <div>Profile Screen (Coming Soon)</div>;
      default:
        return (
          <div className={styles.cardsContainer}>
            {shuffledProfiles.map((profile) => (
              <TinderCard
                className={styles.swipe}
                key={profile.name}
                onSwipe={(dir) => swiped(dir, profile.name)}
                onCardLeftScreen={() => outOfFrame(profile.name)}
                {...swipeConfig}
                swipeAnimationDuration={300}
                preventSwipe={['up', 'down']}
                springConfig={animationConfig}
              >
                <div className={styles.card}>
                  {/* Profile Image */}
                  <div className={styles.profileImage}>
                    <img 
                      src={profile.image} 
                      alt={profile.name}
                      className={styles.profilePicture}
                      draggable="false"
                    />
                  </div>

                  {/* Profile Info */}
                  <div className={styles.profileInfo}>
                    <h2 className={styles.profileName}>{profile.name}</h2>
                    <p className={styles.profileMeta}>{profile.age} • {profile.location}</p>
                    <p className={styles.profileShip}>{profile.ship}</p>
                    
                    <p className={styles.profileBio}>{profile.bio}</p>
                    
                    <div className={styles.interestsSection}>
                      <h3 className={styles.interestsTitle}>Interests:</h3>
                      <div className={styles.interestsTags}>
                        {profile.interests.map((interest, index) => (
                          <span 
                            key={index}
                            className={styles.interestTag}
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className={styles.actionButtons}>
                    <button 
                      onClick={() => swiped('left', profile.name)}
                      className={`${styles.actionButton} ${styles.rejectButton}`}
                    >
                      <X size={24} />
                    </button>
                    <button 
                      onClick={() => swiped('right', profile.name)}
                      className={`${styles.actionButton} ${styles.likeButton}`}
                    >
                      <Heart size={24} />
                    </button>
                  </div>
                </div>
              </TinderCard>
            ))}
          </div>
        );
    }
  };

  return (
    <div className={`${styles.container} ${type === 'grindr' ? styles.grindr : ''}`}>
      {/* Header */}
      <div className={styles.header}>
        <Anchor className={styles.headerIcon} size={32} />
        <h1 className={styles.title}>
          {type === 'tinder' ? 'Tind-arrrrgh' : 'Grind-aaarrrrgh'}
        </h1>
      </div>

      {/* Main Content */}
      {currentScreen === 'messages' ? (
        <MessagesScreen matches={matches} />
      ) : (
        renderScreen()
      )}

      {/* Navigation Bar */}
      <div className={styles.navigationBar}>
        <div className={styles.navigationContent}>
          <button 
            className={`${styles.navButton} ${currentScreen === 'discover' ? styles.active : ''}`}
            onClick={() => setCurrentScreen('discover')}
          >
            <Compass size={24} />
            <span className={styles.navLabel}>Discover</span>
          </button>
          <button 
            className={`${styles.navButton} ${currentScreen === 'messages' ? styles.active : ''}`}
            onClick={() => setCurrentScreen('messages')}
          >
            <MessageSquare size={24} />
            <span className={styles.navLabel}>Messages</span>
          </button>
          <button 
            className={`${styles.navButton} ${currentScreen === 'profile' ? styles.active : ''}`}
            onClick={() => setCurrentScreen('profile')}
          >
            <Anchor size={24} />
            <span className={styles.navLabel}>Profile</span>
          </button>
        </div>
      </div>

      {currentMatch && (
        <MatchModal
          match={currentMatch}
          onClose={() => setCurrentMatch(null)}
          onMessage={handleMessageMatch}
        />
      )}
    </div>
  );
};

export default PirateDatingApp; 