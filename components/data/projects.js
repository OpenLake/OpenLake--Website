// The only file to edit when adding real projects.
// imageUrl: put screenshots in /public/projects/ and reference like '/projects/bitefy.png'
// playableUrl: live demo link. codeUrl: GitHub repo link. Either can be null.

export const domains = [
  { id: 'webdev', label: 'Web Dev', tagline: 'Sites, dashboards, and tools that live on the internet.' },
  { id: 'appdev', label: 'App Dev', tagline: 'Android, iOS, and cross-platform builds.' },
  { id: 'gamedev', label: 'Game Dev', tagline: 'Engines, jams, and playable weirdness.' },
  { id: 'aiml', label: 'AI / ML', tagline: 'Models, agents, and experiments that learn.' },
]

export const projects = [
  // ---- Web Dev ----
  {
    domain: 'webdev',
    person: 'Garvit',
    projectName: 'Bitefy',
    blurb: 'a QR-based restaurant ordering platform, live at Tech Cafe',
    imageUrl: null,
    playableUrl: 'https://bitefy.in',
    codeUrl: null,
  },
  {
    domain: 'webdev',
    person: 'Ananya',
    projectName: 'driftboard',
    blurb: 'a kanban board for running contribution drives across repos',
    imageUrl: null,
    playableUrl: null,
    codeUrl: 'https://github.com/openlake',
  },
  {
    domain: 'webdev',
    person: 'Kabir',
    projectName: 'mess-menu',
    blurb: "a live mess menu tracker the whole hostel actually uses",
    imageUrl: null,
    playableUrl: null,
    codeUrl: 'https://github.com/openlake',
  },
  {
    domain: 'webdev',
    person: 'Sneha',
    projectName: 'eventpulse',
    blurb: 'a campus events aggregator with calendar sync',
    imageUrl: null,
    playableUrl: null,
    codeUrl: 'https://github.com/openlake',
  },

  // ---- App Dev ----
  {
    domain: 'appdev',
    person: 'Rohan',
    projectName: 'AttendX',
    blurb: 'an attendance tracker that predicts your bunk budget',
    imageUrl: null,
    playableUrl: null,
    codeUrl: 'https://github.com/openlake',
  },
  {
    domain: 'appdev',
    person: 'Priya',
    projectName: 'CampusGo',
    blurb: 'a Flutter app for navigating IIT Bhilai with indoor maps',
    imageUrl: null,
    playableUrl: null,
    codeUrl: 'https://github.com/openlake',
  },
  {
    domain: 'appdev',
    person: 'Dev',
    projectName: 'NoteDrop',
    blurb: 'peer-to-peer notes sharing that works offline',
    imageUrl: null,
    playableUrl: null,
    codeUrl: 'https://github.com/openlake',
  },

  // ---- Game Dev ----
  {
    domain: 'gamedev',
    person: 'Arjun',
    projectName: 'Ripple Runner',
    blurb: 'an endless runner across a glowing lake, built in Godot',
    imageUrl: null,
    playableUrl: null,
    codeUrl: 'https://github.com/openlake',
  },
  {
    domain: 'gamedev',
    person: 'Mira',
    projectName: 'Hostel Havoc',
    blurb: 'a chaotic multiplayer party game made in a 48-hour jam',
    imageUrl: null,
    playableUrl: null,
    codeUrl: 'https://github.com/openlake',
  },
  {
    domain: 'gamedev',
    person: 'Yash',
    projectName: 'pixelforge',
    blurb: 'a tiny 2D game engine written from scratch in C++',
    imageUrl: null,
    playableUrl: null,
    codeUrl: 'https://github.com/openlake',
  },

  // ---- AI / ML ----
  {
    domain: 'aiml',
    person: 'Isha',
    projectName: 'LectureLens',
    blurb: 'a model that turns recorded lectures into searchable notes',
    imageUrl: null,
    playableUrl: null,
    codeUrl: 'https://github.com/openlake',
  },
  {
    domain: 'aiml',
    person: 'Aditya',
    projectName: 'pixsqueeze',
    blurb: 'neural image compression for low-bandwidth transmission',
    imageUrl: null,
    playableUrl: null,
    codeUrl: 'https://github.com/openlake',
  },
  {
    domain: 'aiml',
    person: 'Tanvi',
    projectName: 'mess-forecast',
    blurb: 'an LSTM that predicts mess rush hours from swipe data',
    imageUrl: null,
    playableUrl: null,
    codeUrl: 'https://github.com/openlake',
  },
]