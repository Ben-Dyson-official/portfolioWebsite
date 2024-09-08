import { Container, Row, Col } from "react-bootstrap";
import { Tablet } from "react-bootstrap-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import pythonImg from '../assets/img/SkillsImage/pythonLogo.png';
import javaImg from '../assets/img/SkillsImage/javaLogo.png';
import gitImg from '../assets/img/SkillsImage/gitIcon.png';
import flaskImg from '../assets/img/SkillsImage/flaskLogo.png';
import numpyImg from '../assets/img/SkillsImage/numpyLogo.png';
import jsImg from '../assets/img/SkillsImage/jsLogo.png';
import codeImg from '../assets/img/SkillsImage/codeLogo.png';

import background from '../assets/img/background.jpg';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min:3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    const skillList = ["Python", "Java", "Git", "numpy", "JavaScript", "VSCode", "Flask"];
    const skillListImg = [pythonImg, javaImg, gitImg, numpyImg, jsImg, codeImg, flaskImg];

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>This is a list of skills I am confident in.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={ skillListImg[0] } alt="img1" className="skillsImg"></img>
                                    <h5>{skillList[0]}</h5>
                                </div>
                                <div className="item">
                                <img src={ skillListImg[1] } alt="img1" className="skillsImg"></img>
                                <h5>{skillList[1]}</h5>
                                </div>
                                <div className="item">
                                <img src={ skillListImg[2] } alt="img1" className="skillsImg"></img>
                                <h5>{skillList[2]}</h5>
                                </div>
                                <div className="item">
                                <img src={ skillListImg[3] } alt="img1" className="skillsImg"></img>
                                <h5>{skillList[3]}</h5>
                                </div>
                                <div className="item">
                                <img src={ skillListImg[4] } alt="img1" className="skillsImg"></img>
                                <h5>{skillList[4]}</h5>
                                </div>
                                <div className="item">
                                <img src={ skillListImg[5] } alt="img1" className="skillsImg"></img>
                                <h5>{skillList[5]}</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}