import { Container, Row, Col } from "react-bootstrap"
import logo from '../assets/img/Logo.png';
import linkedInLogo from '../assets/img/linkedInlogo.svg';
import emailImg from '../assets/img/email.png';
import githubLogo from '../assets/img/githubLogo.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={ logo } alt="logo"/>
                    </Col>
                    <Col sm={6} className="text-center">
                        <div className="social-footer">
                            <div className="social-icon">
                                <a href="https://github.com/Ben-Dyson-official"><img src={githubLogo} alt=""/></a>
                                <a href="https://www.linkedin.com/in/ben-dyson-636717223/"><img src={linkedInLogo} alt=""/></a>
                                <a href="mailto:benj.dyson@gmail.com"><img src={emailImg} alt=""/></a>
                            </div>
                            <p>CopyRight 2024. All rights reserved by Ben Dyson</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}