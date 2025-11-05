import { events } from "../assets";
import  eventsimage from "../assets/images/events/eventsimage.png";
import event4 from "../assets/images/events/event4.png";
import event5 from "../assets/images/events/event5.png";
import event10 from "../assets/images/events/event10.png";
import event7 from "../assets/images/events/event7.png";
import event8 from  "../assets/images/events/event8.png";
import event9 from "../assets/images/events/event9.png"
import event11  from "../assets/images/events/event11.png";
import event12 from "../assets/images/events/event12.png";
import intro from "../assets/images/events/Intro.png"
import git from "../assets/images/events/Git.png"
import linux from "../assets/images/events/Linux.png"
const EventsTop = [
  {
    title: "Event1 - Intro Session",
    description: "For the better World",
    image: intro,
    link: "www.github.com",
  },
  {
    title: "Event2 - GitHub & Git",
    description: "Hands-on Git & GitHub workshop",
    image: git,
    link: "www.github.com",
  },
  {
    title: "Event3 - Linux Workshop",
    description: "Linux Fundamentals and Installation",
    image: linux,
    link: "www.github.com",
  },
];
const EventsBottom = [
  {
    name: "Tushar Bansal",
    designation: "Coordinator",
    image: events,
    github: "www.github.com",
    linkedln: "www.linkedln.com",
  },
  {
    name: "Madhur Jain",
    designation: "Coordinator",
    image: events,
    github: "www.github.com",
    linkedln: "www.linkedln.com",
  },
];
const programs = [
  {
    mon: "Oct",
    date: "11 25",
    image: event12,
    title: "Linux Installation Workshop",
    content:
      "Diving deep into Linux Fundamentals and Installation. From sudo to grep - everything finally made sense!",
  },
  {
    mon: "Aug",
    date: "29 25",
    image: event11,
    title: "Git & GitHub Workshop - Beginner Friendly!",
    content:
      "A hands-on Git & GitHub workshop.Perfect for freshers & anyone curious about open-source! ",
  },
  {
    mon: "Jan",
    date: "13 25",
    image: event9,
    title: "GSoC : An Introduction",
    content:
      "An inspiring and insightful session on Google Summer of Code and how to make meaningful contributions to open source",
  },
  {
    mon: "Jan",
    date: "18 25",
    image: event8,
    title: "Intro to Software Development",
    content:
      "Beginner-friendly workshop covering fundamentals of building real-world software projects.",
  },
  {
    mon: "Oct",
    date: "30 24",
    image: event7,
    title: "A Quick Start to Software Development",
    content:
      "Tailored to equip you with the knowledge and tools to kickstart your journey in software development. ",
  },
  {
    mon: "Jun",
    date: "25 23",
    image: event10,
    title: "How to Open-Source",
    content:
      "Open source Tools and Technologies and Open Source opportunities for contributing to global projects.",
  },
  {
    mon: "Aug",
    date: "15 22",
    image: event5,
    title: "OpenlySourced with Anand Panchbai",
    content:
      "An introductory workshop on open source.",
  },
  {
    mon: "Aug",
    date: "6 22",
    image: event4,
    title: "Object Oriented Programming and Flask",
    content:
      "An introductory workshop on OOP concepts and Flask framework.",
  },
  {
    mon: "Jun",
    date: "12 22",
    image: eventsimage,
    title: "HTML & CSS Tutorial + Hackathon",
    content:
      "Hands-on web development session followed by a mini hackathon, with goodies for participants.",
  },
];
export { EventsTop,EventsBottom,programs };