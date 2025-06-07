import React from "react";
import "./welcome.css";
import welcomeImage from "./img/img/Welcome.jpg";

function Welcome() {
  return (
    <div>
      <div>
        <div className="container">
          <img src={welcomeImage} alt="Welcome" className="bg-img" />
          <div className="welcome flex">
            <div className="flex lang">
              <div className="lang-title">
                <div>
                  welcome to Cafe Lupon!<br />
                  <br />
                  <span dir="rtl" className="yekan">
                    به کافه لوپن خوش آمدید!
                  </span>
                  <br />
                  <br />
                  Bienvenue au Café Lupon !
                </div>
              </div>
            </div>
            <div className="flex btns">
              <button className="btn-farsi yekan " onClick={() => navigate("/Persian")}>فارسی</button>
              <button className="btn-english pbold" onClick={() => navigate("/English")}>English</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
