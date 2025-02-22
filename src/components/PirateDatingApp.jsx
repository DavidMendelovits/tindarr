import React, { useState } from 'react';
import { Heart, Anchor, Compass, MessageSquare, X } from 'lucide-react';
import TinderCard from 'react-tinder-card';
import styles from './PirateDatingApp.module.css';
import ladyPirate from '../assets/pirate_pictures/ladypirate.webp';
import fishGuy from '../assets/pirate_pictures/Collier-Tinder-Guy-Holding-a-Fish.webp';

const PirateDatingApp = () => {
  const [lastDirection, setLastDirection] = useState();

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

  const pirateProfiles = [
    {
      name: "Captain Sally 'Silver Tongue' Smith",
      age: "32 Summers at Sea",
      ship: "The Sassy Serpent",
      location: "Caribbean Waters",
      bio: "Looking for a first mate who can handle both treasure maps and deep conversations. Must love parrots!",
      interests: ["Treasure hunting", "Sword fighting", "Star navigation"],
      image: ladyPirate
    },
    {
      name: "Jack 'Storm Chaser' Johnson",
      age: "45 Voyages Young",
      ship: "Thunder's Wake",
      location: "Spanish Main",
      bio: "Seasoned captain seeking adventure partner. Gold is temporary, but love is eternal.",
      interests: ["Storm navigation", "Sea shanties", "Pearl diving"],
      image: fishGuy
    },
    {
      name: "'Mystic' Mary Morgan",
      age: "28 Tides Old",
      ship: "Moonlight Marauder",
      location: "Tortuga",
      bio: "Part-time mystic, full-time pirate. Looking for someone to share the horizon with.",
      interests: ["Fortune telling", "Spyglass crafting", "Treasure mapping"],
      image: ladyPirate
    }
  ];

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <Anchor className={styles.headerIcon} size={32} />
        <h1 className={styles.title}>Shipmates</h1>
      </div>

      {/* Cards Container */}
      <div className={styles.cardsContainer}>
        {pirateProfiles.map((profile) => (
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

      {/* Navigation Bar */}
      <div className={styles.navigationBar}>
        <div className={styles.navigationContent}>
          <button className={`${styles.navButton} ${styles.active}`}>
            <Compass size={24} />
            <span className={styles.navLabel}>Discover</span>
          </button>
          <button className={styles.navButton}>
            <MessageSquare size={24} />
            <span className={styles.navLabel}>Messages</span>
          </button>
          <button className={styles.navButton}>
            <Anchor size={24} />
            <span className={styles.navLabel}>Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PirateDatingApp; 