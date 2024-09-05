import { Container, Row, Col } from "react-bootstrap"
import logo from '../assets/img/Logo.png';
import NavIcon1 from '../assets/img/nav-icon1.svg';
import NavIcon2 from '../assets/img/nav-icon2.svg';
import NavIcon3 from '../assets/img/nav-icon3.svg';

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
                                <a href="https://www.linkedin.com/in/ben-dyson-636717223/"><img src={NavIcon1} alt=""/></a>
                                <a href="https://www.facebook.com/ben.dyson.754/"><img src={NavIcon2} alt=""/></a>
                                <a href="https://www.instagram.com/ben_dyson_/"><img src={NavIcon3} alt=""/></a>
                            </div>
                            <p>CopyRight 2024. All rights reserved by Ben Dyson</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}