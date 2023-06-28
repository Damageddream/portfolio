import dribble from "../../assets/images/dribble.png";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import figma from "../../assets/images/figma.png";
import profilPic from "../../assets/images/profilePict.png";
import Button from "../../components/UI/Button";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="home">
      <div className="homeMain">
        <div className="icons">
          <img src={github} alt="icon of github" />
          <img src={linkedin} alt="icon of linkedin" />
          <img src={dribble} alt="icon of dribble" />
          <img src={figma} alt="icon of figma" />
        </div>
        <header className="homeTitle">
          <p className="hello">Hello</p>
          <h2 className="name">
            <span className="im">I'm </span>Marcin Grabowski
          </h2>
        </header>
        <div className="homeInfo">
          A full stack developer based in Poland
        </div>
        <Button onClick={() => navigate("/")} variant="primary">
          My portfolio
        </Button>
      </div>
      <img src={profilPic} alt="A headshot photograph of Marcin" />
    </main>
  );
};

export default HomePage;
