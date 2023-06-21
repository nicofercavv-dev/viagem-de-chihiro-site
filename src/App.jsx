import "./App.css";
import logo from "./assets/logo.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import youtube from "./assets/youtube.svg";
import illustration from "./assets/illustration.png";
import play from "./assets/play.svg";

function App() {
  return (
    <div className="page">
      <nav className="nav-bar">
        <img id="logo" src={logo} />
        <ul>
          <li>
            <a href="https://www.facebook.com/GhibliUSA/" target="_blank" rel="external noopener noreferrer">
              <img src={facebook} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ghibliusa/" target="_blank" rel="external noopener noreferrer">
              <img src={instagram} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/JP_GHIBLI" target="_blank" rel="external noopener noreferrer">
              <img src={twitter} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@StudioGhibliBrasil" target="_blank" rel="external noopener noreferrer">
              <img src={youtube} />
            </a>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        <img className="illustration" src={illustration} />
        <div className="content-text">
          <h2>Hayao Miyazaki</h2>
          <h1>A viagem de Chihiro</h1>
          <p>
            Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que
            a desobedecem são transformados em animais.
          </p>
        </div>
        <span className="link-to-watch">
          <img src={play} />
          <a href="https://www.netflix.com/br/title/60023642" target="_blank" rel="external noopener">Assistir agora</a>
        </span>
        <span>
          <a className="link-to-trailer" href="">
            Assista o trailer
          </a>
        </span>
      </main>
    </div>
  );
}

export default App;
