import { Navbar, Container, Nav } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from "react";
import logo from '../assets/img/Logo.png';
import linkedInLogo from '../assets/img/linkedInlogo.svg';
import emailImg from '../assets/img/email.png';
import githubLogo from '../assets/img/githubLogo.png';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/Ben-Dyson-official"><img src={githubLogo} alt=""/></a>
                            <a href="https://www.linkedin.com/in/ben-dyson-636717223/"><img src={linkedInLogo} alt=""/></a>
                            <a href="mailto:benj.dyson@gmail.com"><img src={emailImg} alt=""/></a>
                        </div>
                        {/* <HashLink to='#connect'>
                            <button className="vvd"><span>Let’s Connect</span></button>
                        </HashLink> */}
                        <button className="vvd" onClick={()=> console.log("connect")}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}