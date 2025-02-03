const logotext = "JOHN";
const meta = {
    title: "Ben Dyson Portfolio",
    description: "",
};

const introdata = {
    title: "I’m Ben Dyson",
    animated: {
        first: "I love coding",
        second: ""
    },
    description: "2nd year Computer Scientist at the University of Manchester",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "About me",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: require("./assets/img/ProjectImage/cryptoDeal.png"),
        description: "This website simulates a trading platform allowing users to practise trading cryptocurrency with up-to-date prices. It offers features such as latest news articles and watchlists for certain currencies. It uses laravel, JavaScript, CSS, html and PHP.",
        link: "https://github.com/Sergey-Mr/CryptoDeal",
    },
    {
        img: require("./assets/img/ProjectImage/MusicTranscriber.png"),
        description: "This is a website that converts an audio sample of music to a rough sheet music. It was created for my A-Level coursework. It uses flask, html, CSS and python.",
        link: "https://github.com/Ben-Dyson-official/MusicTranscriber",
    },
    {
        img: require("./assets/img/ProjectImage/Starmapper.png"),
        description: "This website has a couple features - constellation identifying, image denoising and star/cluster recognition. It was created as part of a hackathon in a team of three over two days. It uses flask and python as well as the OpenCV and tensorflow libraries.",
        link: "https://github.com/Ben-Dyson-official/mush2024",
    },
    {
        img: require("./assets/img/ProjectImage/MarioClone.png"),
        description: "This is a game created using python's tkinter GUI. It is a clone for super mario bros and was created as part of a university module.",
        link: "https://github.com/Ben-Dyson-official/MarioBrosClone",
    },
    {
        img: require("./assets/img/ProjectImage/ProjectEuler.png"),
        description: "This is a website containing a series of mathematical based coding challenges and problems I have worked on in my free time. I have solved 63 so far.",
        link: "",
    },

];

const contactConfig = {
    YOUR_EMAIL: "benj.dyson@gmail.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_s76muee",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "rcWA3PX7d7lG6d1w5",
};

const socialprofils = {
    github: "https://github.com/Ben-Dyson-official",
    linkedin: "https://www.linkedin.com/in/ben-dyson-uk/",
    email: "mailto:benj.dyson@gmail.com"
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};