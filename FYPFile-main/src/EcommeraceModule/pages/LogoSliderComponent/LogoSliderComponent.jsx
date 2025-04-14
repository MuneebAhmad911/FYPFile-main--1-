import React from "react";
import "./slider.css";
import L4 from "../../StoreAssets/img/LogosSliderAssets/LogoLG.png";
import L3 from "../../StoreAssets/img/LogosSliderAssets/LogoDell.png";
import L7 from "../../StoreAssets/img/LogosSliderAssets/LogoBose.png";
import L1 from "../../StoreAssets/img/LogosSliderAssets/LogoSony.png";
import L6 from "../../StoreAssets/img/LogosSliderAssets/LogoCanon.png";
import L2 from "../../StoreAssets/img/LogosSliderAssets/LogoIntel.png";
import L8 from "../../StoreAssets/img/LogosSliderAssets/LogoApple.png";
import L5 from "../../StoreAssets/img/LogosSliderAssets/LogoSanDisk.png";

const LogoSliderComponent = () => {
  return (
    <div class="logos">
      <div class="logos-slide">
        <img src={L1} />
        <img src={L2} />
        <img src={L3} />
        <img src={L4} />
        <img src={L5} />
        <img src={L6} />
        <img src={L7} />
        <img src={L8} />
      </div>

      <div class="logos-slide">
        <img src={L1} />
        <img src={L2} />
        <img src={L3} />
        <img src={L4} />
        <img src={L5} />
        <img src={L6} />
        <img src={L7} />
        <img src={L8} />
      </div>
    </div>
  );
};

export default LogoSliderComponent;
