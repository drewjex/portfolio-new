import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faDownLong, faEnvelope, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import plantnobg from "./assets/plant3nobg.png";
import logo from "./assets/logo.png";
import profile from "./assets/hillsarealive.jpg"
import signature from "./assets/signature.png";
import { useState } from "react";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Side = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  display:none;
`;

const Main = styled.div`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Plant = styled.div`
  flex: 1;
  position: relative;

  > img {
    object-fit: cover;
    border-radius:50%;
    filter: drop-shadow(85px 15px 30px #bbb);
  }
`;

const Pencils = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaperWrapper = styled.div`
  perspective: 1000px;
  max-width:70em;
  width:100%;
  min-height: 80%;
  //background-color: rgb(235 229 223);
  filter: url();
`

const Paper = styled.div`
  transition: transform 0.6s;
  transform-style: preserve-3d;

  &.flipped {
    transform: rotateY(180deg);
  }
`;

const LeftPage = styled.div`
  flex: 1;
  display: flex;
`;

const LeftColumn = styled.div`
  flex: 1;
  writing-mode: tb-rl;
  transform: rotate(180deg);
  color: #998576;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  letter-spacing: 4px;
  font-weight: 600;
  font-size: 12px;

  h3 {
    padding: 0;
    margin: 0;
    font-size:18px;
  }
`;

const LeftColumnIcons = styled.div`
  margin-top: 1em;
  transform: rotate(180deg);
  font-size:2em;

  > svg {
    margin: .5em;
  }
`;

const MainTitle = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled.div`
  flex: 1;
`

const PageNumber = styled.div`
  flex: 1;
  color: #998576;
  font-size: 48px;
  font-weight: 900;
  text-align: right;
`;

const Logo = styled.div`
  flex: 1;
  // background-color: #998576;
  // width: 10px;
  // height: 10px;

  > img {
    mix-blend-mode: multiply;
    object-fit: contain;
    width: 8em;
  }
`;

const TitleArea = styled.div`
  flex: 1;
`;

const Name = styled.div`
  font-size: 3em;
  color: #443e38;
  letter-spacing: 15px;
  font-weight: 800;
`;

const Title = styled.div`
  font-size: 1.45em;
  color: #443e38;
  letter-spacing: 5px;
  font-weight: 900;
`;

const LeftPageContent = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DescriptionParagraph = styled.p`
  color: #443e38; //#998576;
  font-size: 1em;
  letter-spacing: 2px;
  font-weight: 500;
`;

const LeftPageFooter = styled.div`
  text-align: center;
  color: #998576;
  letter-spacing: 8px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const RightPage = styled.div`
  flex: 1;
  transform: rotateY(180deg);
  display: grid;
  padding: 0 3em;
  max-width:70em;
  width:100%;
  grid-template-areas: 'top top top top'
                       'content content content content'
                       'content content content content'
                       'content content content content'
`;

const Top = styled.div`
  grid-area: top;
  display: flex;
`

const TopLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left:10px;
`

const BottomLeft = styled.div`
  display: flex;
  color: #443e38;
`

const MetaContainer = styled.div`
  display: flex;
`

const Sideways = styled.div`
  flex: 1;
  writing-mode: tb-rl;
  transform: rotate(180deg);
  color: #998576;
  display: flex;
  padding: 30px 0;
  letter-spacing: 4px;
  font-weight: 600;
  font-size: 12px;
  justify-content: flex-end;

  h3 {
    padding: 0;
    margin: 0;
    font-size:18px;
  }
`

const PageNumberTwo = styled.div`
  flex: 5;
  color: #998576;
  font-size: 48px;
  font-weight: 900;
`

const RightPageName = styled.div`
font-size: 2em;
color: #443e38;
letter-spacing: 5px;
font-weight: 800;
`

const RightPageTitle = styled.div`
font-size: 1em;
color: #443e38;
letter-spacing: 5px;
font-weight: 900;
`

const Picture = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding:5em;
`

const PictureBorder = styled.div`
  border: 3px solid #998576a8;
  min-width:120%;
  height: 110%;
  position: relative;

  > img {
    position: absolute;
    object-fit: cover;
    left:50%;
    top:50%;
    transform: translateX(-50%) translateY(-50%) rotate(2deg);
    width:90%;
    min-width:300px;
    text-align: center;
    height: 400px;
    border: 8px solid white;
    box-shadow: 5px 10px 25px #ccc;
    filter: blur(0.5px);
  }
`

const Content = styled.div`
  grid-area: content;
  color: #998576;
  display: flex;
  padding-top: 4em;
`

const LeftContent = styled.div`
  flex: 1;
`
const RightContent = styled.div`
  flex: 1;
  text-align: right;
`

const TitleContainer = styled.div`

`

const PersonalInformation = styled.div`
  padding:10px;
  border: 2px solid #998576;
  background-color: #eae4da;
  width:70%;
  color: #443e38;

  > h3 {
    font-weight:900;
    font-size:22px;
    margin: 0;
  }
`

const ClickToFlip = styled.div`
  position: absolute;
  bottom: 1em;
  right: 1em;
  color: #443e38;
  font-family: 'Freehand';
  font-size: 1.5em;
  transform: rotate(-45deg);
`

const GoDown = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  color: #443e38;
  font-size:4em;
`

function App() {
  const [flipped, setFlipped] = useState<boolean>();
  //const [clickGoDown, setClickGoDown] = useState<boolean>();

  return (
    <AppWrapper>
      <Side>
        <Plant>
          <img src={plantnobg} />
        </Plant>
        <Pencils>
        <div className="pencil">
          <div className="top"></div>
          <div className="left"></div>
          <div className="center">
          </div>
          <div className="right"></div>
          <div className="bottom"></div>
        </div>
        <div className="pencil variant">
          <div className="top"></div>
          <div className="left"></div>
          <div className="center">
          </div>
          <div className="right"></div>
          <div className="bottom"></div>
        </div>
        </Pencils>
      </Side>
      <Main>
        <GoDown onClick={() => {
          
        }}>
          <FontAwesomeIcon icon={faCaretDown} />
        </GoDown>
        <PaperWrapper onClick={() => setFlipped(!flipped)}>
        <Paper className={`paper ${flipped ? "flipped" : ""}`}>
          {/* <PaperInner className="paper-inner"> */}
          <LeftPage className="page">
            <LeftColumn>
              <h3>RESUME V2.4</h3>
              <LeftColumnIcons>
                <FontAwesomeIcon icon={faEnvelope} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedinIn} />
              </LeftColumnIcons>
            </LeftColumn>
            <MainTitle>
              <PageNumber>01</PageNumber>
              <Logo>
                <img src={logo} />
              </Logo>
              <TitleArea>
                <Name>DREW JEX</Name>
                <Title>SOFTWARE ENGINEER</Title>
              </TitleArea>
              <LeftPageContent>
                <div>
                  <DescriptionParagraph>
                    Hello, my name is Drew Jex and I am a full-stack software
                    engineer who specializes in front-end. I have experience at
                    big tech companies and producing code used by hundreds of
                    thousands of users around the globe. I am passionate about
                    creating awesome front-end experiences that delight customers.
                    I am currently seeking employment.
                  </DescriptionParagraph>
                  <DescriptionParagraph>
                    Hello, my name is Drew Jex and I am a full-stack software
                    engineer who specializes in front-end. I have experience at
                    big tech companies and producing code used by hundreds of
                    thousands of users around the globe. I am passionate about
                    creating awesome front-end experiences that delight customers.
                    I am currently seeking employment.
                  </DescriptionParagraph>
                  <div style={{float: "right"}}>
                    <img src={signature} />
                  </div>
                </div>
                <LeftPageFooter>WWW.DREW JEX.COM</LeftPageFooter>
              </LeftPageContent>
            </MainTitle>
            <RightColumn />
            {/* <ClickToFlip><FontAwesomeIcon icon={faTurnUp} />Click to <br /> flip over<FontAwesomeIcon icon={faTurnUp} /></ClickToFlip> */}
          </LeftPage>
          <RightPage className="page">
            <Top>
            <TopLeft>
              <MetaContainer>
                <Sideways>
                  <h3>RESUME V2.4</h3>
                </Sideways>
                <PageNumberTwo>
                  02
                </PageNumberTwo>
              </MetaContainer>
              <TitleContainer>
              <RightPageName>
                DREW JEX
              </RightPageName>
              <RightPageTitle>
                FRONT END ENGINEER
              </RightPageTitle>
              {/* <DescriptionParagraph>
                I code a lot.
              </DescriptionParagraph> */}
              </TitleContainer>
            </TopLeft>
            <Picture>
              <PictureBorder>
                <img src={profile} />
              </PictureBorder>
            </Picture>
            </Top>
            <Content>
              <LeftContent>
                {/* <PersonalInformation>
                  <Title>PERSONAL INFORMATION</Title>
                  <ul>
                    <li>drewjex@gmail.com</li> 
                    <li>drewjex.com</li> 
                    <li>linkedin.com/drewjex</li>
                  </ul>
                </PersonalInformation> */}
                <BottomLeft>
                <MetaContainer>
                  <Sideways>
                    <h3>PROFICIENCY</h3>
                  </Sideways>
                  <div>
                    <h4 style={{paddingLeft: "20px"}}>
                      LANGUAGES
                    </h4>
                    <ul>
                      <li>TypeScript</li>
                      <li>React</li>
                      <li>CSS</li>
                    </ul>
                    <h4 style={{paddingLeft: "20px"}}>
                      SKILLS
                    </h4>
                    <ul>
                      <li>Working with a team</li>
                      <li>Raising the bar</li>
                      <li>Bias for Action</li>
                    </ul>
                  </div>
                  </MetaContainer>
                </BottomLeft>
              </LeftContent>
              <RightContent>
                <Title style={{marginRight: "-1em"}}>
                  EXPERIENCE
                </Title>
                <ul className="variant">
                  <li>
                    <div className="title">AMAZON WEB SERVICES</div>
                    <div className="role">SENIOR FRONT END ENGINEER</div>
                    <p>
                      I worked on both ECS and Budgets consoles and was tech lead for front-end projects in my org.
                    </p>
                  </li>
                  <li>
                    <div className="title">ACCESS DEVELOPMENT</div>
                    <div className="role">UI/UX DEVELOPER</div>
                    <p>
                      I worked on both ECS and Budgets consoles and was tech lead for front-end projects in my org.
                    </p>
                  </li>
                  <li>
                  <div className="title">SKYWEST</div>
                    <div className="role">SOFTWARE ENGINEER</div>
                    <p>
                      I worked on both ECS and Budgets consoles and was tech lead for front-end projects in my org.
                    </p>
                  </li>
                </ul>
                <Title style={{marginRight: "-1em"}}>
                  EDUCATION
                </Title>
                <ul className="variant no-line">
                  <li>
                    <div className="title">BRIGHAM YOUNG UNIVERSITY</div>
                    <div className="role">B.S. COMPUTER SCIENCE</div>
                  </li>
                </ul>
              </RightContent>
            </Content>
          </RightPage>
          {/* </PaperInner> */}
        </Paper>
        </PaperWrapper>
      </Main>
    </AppWrapper>
  );
}

export default App;
