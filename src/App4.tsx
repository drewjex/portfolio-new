import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1b1c1e;
    display: flex;

    @media screen and (min-width: 1400px) {
        padding: 0 11em; //only on wide screens
        max-width:1800px;
    }

    @media screen and (max-width: 1000px) {
        padding: 0 11em;
        max-width:1800px;
        flex-direction: column;
    }

    @media screen and (max-width: 700px) {
        padding: 0 3em;
        max-width:1800px;
        flex-direction: column;
    }

    p {
        color: #bbb;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        unicode-bidi: isolate;
        line-height:1.6;
        letter-spacing: .025em;
    }
`

const NavSection = styled.div`
    flex: 3;
    padding: 4em;
    position: sticky;
    top: 0;
    max-height: 100vh;

    @media screen and (max-width: 1000px) {
        position: relative;
        padding: 0;
        padding-top: 4em;
    }

    h2 {
        margin-top:5px;
        color: #dce0e5;
    }

`

const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5em;

    @media screen and (max-width: 1000px) {
        margin-top: 0;
    }

     @media screen and (max-width: 500px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`

const NavLink = styled.div`
    width: fit-content;
    text-transform: uppercase;
    font-weight:900;
    color: #bbb;
    font-size: 14px;
    line-height:1.6;
    letter-spacing: .155em;
    margin: 10px 0;
    position: relative;
    padding-left:30px;
    transform: translate(0px, 0px);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translate(3px, 0px);
        cursor: pointer;
    }  

    &.selected {
        color: #fff;
        //transform: translate(0px, 0px);
        transition: transform 0.2s ease-in-out;

        &::before {
            box-shadow: 0px 0px 20px rgba(197, 239, 24, 0.7);
        }
    }

    &::before {
        content: '';
        position: absolute;
        left:0;
        top:50%;
        transform: translate(0, -50%);
        width:14px;
        height:14px;
        background-color: #c5ef18;
        border-radius:100%;
    }
`

const BodySection = styled.div`
    flex: 7;
    padding: 4em;
    padding-top:5.9em;

    @media screen and (max-width: 1000px) {
        position: relative;
        padding: 0;
        padding-top: 5em;
    }
`

const SubHeader = styled.span`
    color: #c5df57;
    border: 1px solid #c5df57;
    padding: .15em 1.25em;
    border-radius: 25px;
    font-weight:700;
    font-size:15px;
    height:50px;
    position:relative;
    top: -12px;
    line-height:1.6;
    letter-spacing: .025em;
`

const ContentSection = styled.div`
    scroll-margin-top: 50px;
    border-left: 1px solid #c5df57;
    position: relative;
    //padding: 1em;
    padding-left: 40px;
    padding-bottom:7em;

    &.selected {
         &::before {
            box-shadow: 0px 0px 20px rgba(197, 239, 24, 0.7);
        }
    }

    &::before {
        content: '';
        position: absolute;
        top:0;
        left:-7px;
        transform: translate(0, -50%);
        width:14px;
        height:14px;
        background-color: #c5ef18;
        border-radius:100%;

    }

`

const TextContent = styled.div`
    padding: 0 1em;
`

const Header = styled.div`
    color: #c5df57;
    font-weight: 700;
    font-size: 68px;
    text-shadow: 0px 1px 4px rgba(0, 0, 0, 1);
    animation: E .7s cubic-bezier(.5, 1.5, .5, 1) both;
    animation-delay: .5s;
    transform: scale(1) translateY(0px);
    opacity: 1;
`

const RoleContainer = styled.div`
    display: flex;
    border-radius: .4rem;
    margin-bottom:3em;
    color: #fff;
    padding:1em;
    border:1px solid rgba(226,232,240,0);
    transition: all 0.2s ease-in-out;

    &:first-of-type {
        margin-top: 1em;  
    }

     @media screen and (max-width: 1000px) {
        flex-direction: column;
    }

    &:hover {
        //border-color: rgba(226,232,240,.3);
        border-top: 1px solid rgba(226,232,240,.15);
        border-left: 1px solid rgba(226,232,240,.05);
        border-right: 1px solid rgba(226,232,240,.05);
        background-color: rgba(226,232,240,.08);
        cursor: pointer;
    }

    h3 {
        margin-top: 0;
        margin-bottom:0;
        font-weight:600;
        line-height:1.6;
        letter-spacing: .025em;
        font-size: 1.1em;
    }

    p {
        font-size:14px;
        letter-spacing: .015em;
    }

    ul {
        display: flex;
        list-style-type: none;
        padding-left: 0;

        @media screen and (max-width: 1000px) {
            display:flex;
            flex-wrap: wrap;
        }

        li {
            border-radius:.25em;
            margin-left:1em;
            //border: 1px solid #c5df57;
            background-color: rgb(197 223 87 / 20%);
            padding: .6em 1.25em;
            border-radius: 25px;
            font-size:12px;
            font-weight:400;

            &:first-child {
                margin-left:0;
            }
        }
    }

`

const YearsContainer = styled.div`
    flex:2;
    line-height:1.6;
    letter-spacing: .025em;
    font-size:12px;
    color: #ccc;
`

const RoleDetails = styled.div`
    flex: 6;

`   

const IconsContainer = styled.div`
    // @media screen and (max-width: 1000px) {
    //     padding: 0 11em; //only on wide screens
    //     max-width:1800px;
    // }

    // @media screen and (min-width: 1400px) {
    //     padding: 0 11em; //only on wide screens
    //     max-width:1800px;
    // }

    bottom:5em;
    position:absolute;

    @media screen and (max-width: 1000px) {
        position:relative;
        bottom:0;
    }

    svg:hover {
        cursor: pointer;
        color: #c5df57;
    }
`

function App() {
    const [section, setSection] = useState("About");

    return (
        <Wrapper>
            <NavSection>
                <Header>Drew Jex</Header>
                <h2>Software Engineer</h2>
                <p>
                    Hello, I'm Drew! I'm a Senior Front End Engineer at AWS.
                </p>
                <NavLinks>
                    <NavLink onClick={() => {
                        setSection("About");
                        document.getElementById("about__content")?.scrollIntoView({ behavior: "smooth", block: "start"});
                    }} className={section === "About" ? "selected" : ""}>
                        About
                    </NavLink>
                    <NavLink onClick={() => {
                        setSection("Experience");
                        document.getElementById("experience__content")?.scrollIntoView({ behavior: "smooth", block: "nearest"});
                    }} className={section === "Experience" ? "selected" : ""}>
                        Experience
                    </NavLink>
                    {/* <NavLink>
                        Projects
                    </NavLink> */}
                </NavLinks>
                <IconsContainer>
                    <a href="https://github.com/drewjex" target="blank"><FontAwesomeIcon size="3x" color="#ccc" icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/drewjex/" target="blank"><FontAwesomeIcon size="3x" color="#ccc" icon={faLinkedin} /></a>
                </IconsContainer>
            </NavSection>
            <BodySection>
                <ContentSection id="about__content" className={section === "About" ? "selected" : ""}>
                    <TextContent>
                        <SubHeader>About Me</SubHeader>
                        <p>I'm a Senior Front-End Engineer at AWS with deep experience designing and leading large-scale, customer-focused applications. I have a proven record driving front-end architecture, UX strategy, and cross-team initiatives impacting over 1 million customers. Expertise in React, TypeScript, and cloud-native architectures with a passion for building performant, maintainable systems that scale. I also have experience mentoring engineers and contributing to team growth.</p>
                        <p>I own entire web applications in AWS Cost Management space, including the assets, the CI/CD configurations, and the underlying infrastructure used to scale these applications to millions of users.</p>
                        <p>I have experience mentoring other engineers and helping entire teams grow together.</p>
                        <p>In my spare time, I'm usually playing tennis, running, or writing a new piano concerto.</p>
                    </TextContent>
                </ContentSection>
                <ContentSection id="experience__content" className={section === "Experience" ? "selected" : ""}>
                    <TextContent>
                    <SubHeader>Experience</SubHeader>
                    <RoleContainer>
                        <YearsContainer>
                            2019 - PRESENT
                        </YearsContainer>
                        <RoleDetails>
                            <h3>Amazon Web Services</h3>
                            <p>Led redesign and front-end modernization of the AWS Budgets console (serving 1M+ customers) and delivered critical features and performance improvements for the AWS ECS console.</p>
                            <p>Drove technical vision for the Budgets console redesign, deprecating legacy systems and migrating to a scalable, serverless architecture leveraging AWS CDK and modern tooling.</p>
                            <ul>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>AWS</li>
                                <li>Vite</li>
                            </ul>
                        </RoleDetails>
                    </RoleContainer>
                    <RoleContainer>
                        <YearsContainer>
                            2018 - 2019
                        </YearsContainer>
                        <RoleDetails>
                            <h3>Access Development</h3>
                            <p>Architected and led adoption of a reusable React component library that standardized UX and accelerated feature delivery for a flagship product serving 300k+ users.</p>
                            <ul>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Redux</li>
                            </ul>
                        </RoleDetails>
                    </RoleContainer>
                    <RoleContainer>
                        <YearsContainer>
                            2017 - 2018
                        </YearsContainer>
                        <RoleDetails>
                            <h3>SkyWest Airlines</h3>
                            <p>Optimized critical JavaScript iPad application used by airline mechanics, reducing load times by 30% and enhancing frontline operational efficiency.</p>
                            <p>Trained employees on MVVM architecture and component reusability, improving maintainability and delivery velocity.</p>
                            <ul>
                                <li>JavaScript</li>
                                <li>C#</li>
                            </ul>
                        </RoleDetails>
                    </RoleContainer>
                    </TextContent>
                </ContentSection>
            </BodySection>
        </Wrapper>
    )
}

export default App;
