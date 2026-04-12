const logotext = "BD";
const meta = {
  title: "Ben Dyson — Computer Science portfolio",
  description:
    "Third-year Computer Science student at the University of Manchester. Selected work in machine learning, full-stack web, and mobile development.",
};

const introdata = {
  title: "Ben Dyson",
  description:
    "Third-year Computer Science student at the University of Manchester. My dissertation develops Stridify — an on-device adaptive music generator for runners, powered by a custom transformer model that runs entirely on iOS. Looking for graduate software engineering roles.",
};

const dataabout = {
  title: "About me",
  aboutme:
    "I'm a third-year Computer Science student at the University of Manchester with interests in machine learning, systems programming, and full-stack web development. I'm particularly excited by the intersection of ML and biotech — applying intelligent systems to biological problems feels like one of the most impactful areas in computing right now. My dissertation project, Stridify, explores on-device generative AI — training a compact transformer model to generate music that adapts in real time to a runner's biometric data, without any server involvement. Outside of my dissertation I enjoy hackathons (Starmapper was built in 48 hours), working through algorithmic challenges, and building things that are actually useful.",
};

const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL"],
  Frameworks: ["React", "React Native", "Flask", "PyTorch", "Expo", "Node.js"],
  Tools: ["Git", "Linux", "ONNX Runtime", "OpenCV", "TensorFlow"],
};

const dataportfolio = [
  {
    title: "Stridify",
    tagline: "Adaptive music generation for runners",
    img: null,
    description:
      "Generates novel music in real time on an iOS device, continuously adapting to the runner's heart rate and cadence — no server, no fixed playlist, every run produces something unique. Built with a custom transformer model quantised to ONNX for on-device inference.",
    tech: ["Python", "PyTorch", "ONNX Runtime", "React Native", "TypeScript", "Tone.js", "Expo"],
    link: null,
    linkLabel: "Source private until June 2026",
    flagship: true,
  },
  {
    title: "Starmapper",
    tagline: "Constellation & star-cluster recognition",
    img: require("./assets/img/ProjectImage/Starmapper.webp"),
    description:
      "Hackathon project built in 48 hours with a team of three. Identifies constellations from uploaded photos, denoises astrophotography, and recognises star clusters using computer vision.",
    tech: ["Python", "Flask", "OpenCV", "TensorFlow"],
    link: "https://github.com/Ben-Dyson-official/mush2024",
  },
  {
    title: "CryptoDeal",
    tagline: "Cryptocurrency trading simulator",
    img: require("./assets/img/ProjectImage/cryptoDeal.webp"),
    description:
      "A simulated trading platform for practising crypto trades with live prices, news articles, and per-currency watchlists. Team project using a full Laravel + PHP backend.",
    tech: ["Laravel", "PHP", "JavaScript", "CSS"],
    link: "https://github.com/Ben-Dyson-official/CryptoDeal",
  },
  {
    title: "Music Transcriber",
    tagline: "Audio to sheet music",
    img: require("./assets/img/ProjectImage/MusicTranscriber.webp"),
    description:
      "Converts an audio sample into rough sheet music using pitch detection algorithms. Built for A-Level coursework.",
    tech: ["Python", "Flask"],
    link: "https://github.com/Ben-Dyson-official/MusicTranscriber",
  },
  {
    title: "Mario Bros Clone",
    tagline: "2D platformer in Python",
    img: require("./assets/img/ProjectImage/MarioClone.webp"),
    description:
      "A Super Mario Bros clone built with Python's Tkinter GUI, developed as part of a university module.",
    tech: ["Python", "Tkinter"],
    link: "https://github.com/Ben-Dyson-official/MarioBrosClone",
  },
  {
    title: "Project Euler",
    tagline: "Mathematical programming challenges",
    img: require("./assets/img/ProjectImage/ProjectEuler.webp"),
    description:
      "Working through Project Euler's mathematical programming challenges in Python. 63 problems solved so far.",
    tech: ["Python"],
    link: "https://github.com/Ben-Dyson-official/Project-Euler",
  },
];

const contactConfig = {
  YOUR_EMAIL: "benj.dyson@gmail.com",
  FORMSPREE_ID: "",
};

const socialprofils = {
  github: "https://github.com/Ben-Dyson-official",
  linkedin: "https://www.linkedin.com/in/ben-dyson-uk/",
  email: "mailto:benj.dyson@gmail.com",
};

export {
  meta,
  dataabout,
  dataportfolio,
  skills,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
