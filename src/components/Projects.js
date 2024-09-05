import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import starmapperImg from '../assets/img/ProjectImage/Starmapper.png';
import cryptoDealImg from '../assets/img/ProjectImage/cryptoDeal.png';
import NEAImg from '../assets/img/ProjectImage/NEA.png';
import marioCloneImg from '../assets/img/ProjectImage/MarioClone.png';
import portfolioImg from '../assets/img/ProjectImage/Portfolio.png';
import projectEulerImg from '../assets/img/ProjectImage/ProjectEuler.png';

export const Projects = () => {

    const webDevProjects = [
        {
            title: "Music Transcriber",
            description: "This is a website that converts an audio sample of music to a rough sheet music. It was created for my A-Level coursework. It uses flask, html, css and python.",
            imgUrl: NEAImg,
            gitLink: 'https://github.com/Ben-Dyson-official/MusicTranscriber'
        },
        {
            title: "Cryptodeal",
            description: "This website simulates a trading platform allowing users to practise trading cryptocurrency with up-to-date prices. It offers features such as latest news articles and watchlists for certain currencies. It uses laravel, JavaScript, css, html and PHP.",
            imgUrl: cryptoDealImg,
            gitLink: 'https://github.com/Sergey-Mr/CryptoDeal'
        },
        {
            title: "StarMapper",
            description: "This website has a couple features - constellation identifying, image denoising and star/cluster recognition. It was created as part of a hackathon in a team of three over two days. It uses flask and python as well as the OpenCV and tensorflow libraries.",
            imgUrl: starmapperImg,
            gitLink: 'https://github.com/Ben-Dyson-official/mush2024'
        },
        {
            title: "Portfolio Website",
            description: "This the portfolio website you are currently viewing",
            imgUrl: portfolioImg,
            gitLink: ''
        }
    ];

    const AIProjects = [
        {
            title: "StarMapper",
            description: "This website has a couple features - constellation identifying, image denoising and star/cluster recognition. It was created as part of a hackathon in a team of three over two days. It uses flask and python as well as the OpenCV and tensorflow libraries.",
            imgUrl: starmapperImg,
            gitLink: 'https://github.com/Ben-Dyson-official/mush2024'
        }
    ];

    const otherProjects = [
        {
            title: "Mario Bros clone",
            description: "This is a game created using python's tkinter GUI. It is a clone for super mario bros and was created as part of a university module.",
            imgUrl: marioCloneImg,
            gitLink: 'https://github.com/Ben-Dyson-official/MarioBrosClone'
        },
        {
            title: "Project Euler",
            description: "This is a website containing a series of mathematical based coding challenges and problems I have worked on in my free time. I have solved 63 so far.",
            imgUrl: projectEulerImg
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here are some examples of projects I have worked on. Click on the cards to view their github repositories.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">WebDev</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">AI</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Other</Nav.Link>
                                </Nav.Item>
                                {/* Add more pills here */}
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">Tab 6</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            webDevProjects.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            AIProjects.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                        </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            otherProjects.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                                {/* Add more pills here */}
                                {/* <Tab.Pane eventKey="fourth">
                                    jrg k kjsdojgnoerng
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    oenvoenborb
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                    eoinaonrvoenbr
                                </Tab.Pane> */}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* Can add a background image here */}
            {/* <img /> */}
        </section>

    )
}