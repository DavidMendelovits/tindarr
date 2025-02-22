import ladyPirate from '../assets/pirate_pictures/ladypirate.webp';
import manwithfish from '../assets/pirate_pictures/manwithfish.webp';
import couplePirate from '../assets/pirate_pictures/looking43rd.webp';
import pegleglady from '../assets/pirate_pictures/pegleg.png';
import mermaid from '../assets/pirate_pictures/hotmermaid.png';
import piratewithfish from '../assets/pirate_pictures/piratewithfish.png';
import nami from '../assets/pirate_pictures/nami.avif';
import luffy from '../assets/pirate_pictures/luffy.webp';


export const pirateProfiles = [
  {
    id: 1,
    name: "Mary and Jack",
    age: "44 and 45",
    ship: "The Upside down pineapple",
    location: "Santa Monica, CA",
    bio: "We are a couple of pirates looking for a new crew member to join us on our adventures.",
    interests: ["Cuckoldry", "Anal Beads","Treasure hunting", "Crossing Swords"],
    image: couplePirate,
    matchProbability: 0.8,
    messages: [
      "Ahoy! Room for one more in our crew?",
      "Let's just say we like to explore... everything 😈",
      "We've got a special plank for you to walk... if you're interested 🏴‍☠️",
      "Our ship has very thick walls, if you know what we mean 😏",
      "Ever been in a three-way sword fight?",
      "We've got plenty of booty to share..."
    ]
  },
  {
    id: 2,
    name: "Captain Sally 'Silver Tongue' Smith",
    age: "32 Summers at Sea",
    ship: "The Sassy Serpent",
    location: "Caribbean Waters",
    bio: "Looking for a first mate who can handle both treasure maps and deep conversations. Must love parrots!",
    interests: ["Pegging", "Sword fighting", "Astrology"],
    image: pegleglady,
    matchProbability: 0.9,
    messages: [
      "Ahoy! Board my ship will ye?",
      "I need to tell you a secret. I've got scurvy",
      "And herpes.",
      "Most of my crew does too, we're very close 😉",
      "Want to compare symptoms?",
      "I know a witch doctor who can help us both..."
    ]
  },
  {
    id: 3,
    name: "Sheila the mermaid",
    age: "28 Tides Old",
    ship: "Moonlight Marauder",
    location: "Tortuga",
    bio: "Looking for someone to crash into this rock if you know what I mean 😉",
    interests: ["Singing for literally no reason", "Swimming", "handjobs"],
    image: mermaid,
    matchProbability: 0.7,
    messages: [
      "Hey sailor, wanna hear me sing? 🎵",
      "Only the cute ones get to see my rock collection 😘",
      "I promise not to drown you... much 💦",
      "Ever done it with scales before?",
      "I know all the wettest spots around here",
      "My bottom half isn't the only thing that's fishy 😉"
    ]
  },
  {
    id: 4,
    name: "Jake P",
    age: "29",
    ship: "The Sassy Serpent",
    location: "Tortuga",
    bio: "Looking for someone who will let me lick their face",
    interests: ["Pegging", "Sword fighting", "Astrology"],
    image: manwithfish,
    matchProbability: 0.9,
    messages: [
      "Ahoy! Board my ship will ye?",
      "I need to tell you a secret. I've got scurvy",
      "And herpes.",
      "Most of my crew does too, we're very close 😉",
      "Want to compare symptoms?",
      "I know a witch doctor who can help us both..."
    ]
  },
  {
    id: 5,
    name: "Luke Longdick",
    age: "29",
    ship: "The Sassy Serpent",
    location: "Tortuga",
    bio: "Looking for someone who doesn't smell like a fish",
    interests: ["Pegging", "Sword fighting", "Astrology"],
    image: piratewithfish,
    matchProbability: 0.9,
    messages: [
      "Ahoy! Board my ship will ye?",
      "I need to tell you a secret. I've got scurvy",
      "And herpes.",
      "Most of my crew does too, we're very close 😉",
      "Want to compare symptoms?",
      "I know a witch doctor who can help us both..."
    ]
  },
  {
    id: 6,
    name: "Nami",
    age: "29",
    ship: "The Sassy Serpent",
    location: "Tortuga",
    bio: "STOP WITH THE HENTAI",
    interests: ["Pegging", "Sword fighting", "Astrology"],
    image: nami,
    matchProbability: 0.9,
    messages: [
      "Ahoy! Board my ship will ye?",
    ]
  },
  {
    id: 7,
    name: "Luffy",
    age: "29",
    ship: "The Strawhat Pirates",
    location: "Grand Line",
    bio: "I’m gonna be king of the pirate and find the One Piece (of that ass)",
    interests: ["meat"],
    image: luffy,
    matchProbability: 0.9,
    messages: [
    ]
  }
];

export const defaultMessages = [
  {
    id: 1,
    sender: 'them',
    text: "Ahoy! We've matched! Let's set sail together!",
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
]; 