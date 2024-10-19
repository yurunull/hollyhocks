import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [fine, setfine] = useState(0);
  let [ill, setill] = useState(0);

  return (
    <div className="App-header bg-light-pink">
      <header className="App-header bg-lightpink">
        <img
          src="https://w7.pngwing.com/pngs/806/733/png-transparent-big-hero-6-baymax-illustration-baymax-tadashi-hamada-hiro-hamada-groot-the-walt-disney-company-others-white-mammal-carnivoran-thumbnail.png "
          className="App-logo"
          alt="logo"
        />
        <p className="text-white text-3xl">Baymax Clinic</p>
        <a
          className="text-lightpink underline hover:text-yellow"
          href="https://www.disney.co.jp/fc/bighero6"
          rel="noopener noreferrer"
        >
          Which is your physical condition?
        </a>
        <p
          className="text-pastel-purple text-2xl bg-yellow p-1 m-2 rouded-lg hover:text-4xl"
          onClick={() => {
            setfine(fine + 1);
            document.getElementById("That's nice!");
          }}
        >
          😊{fine}
        </p>

        <p
          className="text-pastel-purple text-2xl bg-yellow p-1 m-2 rouded-lg hover:text-4xl"
          onClick={() => {
            setill(ill + 1);
            document.write("bless you...");
          }}
        >
          😥{ill}
        </p>
      </header>
    </div>
  );
}

export default App;
