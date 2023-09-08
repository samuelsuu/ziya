import React , { useEffect }from "react";
import wristwatch from "../../assets/images/wr.jpg";
import shoes from "../../assets/images/sh.jpg";
import Jew from "../../assets/images/je.jpg";
import bags from "../../assets/images/bagss.jpg";
import 'hover.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import "./Menu.css";

function Menu() {
//   AOS TRASIST
useEffect(() => {
  AOS.init();
}, []);
  return (
    <section>
      <div className="menu"data-aos="fade-up"
     data-aos-duration="3000">
        <div className="me">
          <div className="card hvr-grow">
            <img src={wristwatch} alt="zinaWorld" />
            <h2>Wrist Watch</h2>
          </div>
          <div className="card hvr-grow">
            <img src={shoes} alt="zinaWorld" />
            <h2>Shoes</h2>
          </div>
        </div>

        <div className="me">
          <div className="card hvr-grow">
            <img src={Jew} alt="zinaWorld" />
            <h2>Jeweries</h2>
          </div>
          <div className="card hvr-grow">
            <img src={bags} alt="zinaWorld" />
            <h2>Bags</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
