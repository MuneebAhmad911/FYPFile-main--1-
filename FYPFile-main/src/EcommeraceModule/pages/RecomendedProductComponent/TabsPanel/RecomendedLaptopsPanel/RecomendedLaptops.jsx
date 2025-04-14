import React from 'react'
import RecomendedProductContainer from "../../../../Containers/RecomendedProductContainer/RecomendedProductContainer";
import camera from "../../../../StoreAssets/img/camers.jpg";
import headphone from "../../../../StoreAssets/img/headphone1.jpg";
import speaker from "../../../../StoreAssets/img/speaker.jpg";
import tab from "../../../../StoreAssets/images/tab.jpg";
import watch from "../../../../StoreAssets/images/watch.jpg";
import cameraHovered from "../../../../StoreAssets/img/CameraHovered.jpg";
import headphonehover from "../../../../StoreAssets/img/headphonehover.jpg";
import speakerhover from "../../../../StoreAssets/img/speakerhover.jpg";
import tabhover from "../../../../StoreAssets/images/tab1.jpg";
import watchhover from "../../../../StoreAssets/img/watchhovered.jpg";
import RP1 from "../../../../StoreAssets/img/RP4.webp";
function RecomendedLaptops() {
  const products = [
    RP1,
    {
      id: 1,
      image: camera,
      heading: "Olympus pen, EZ lens",
      subHeading: "Sony",
      stars: 5,
      price: "200",
      imageonHover: cameraHovered,
    },
    {
      id: 2,
      image: headphone,
      heading: "Headphones from Havells",
      subHeading: "Havells",
      stars: 5,
      price: "200",
      imageonHover: headphonehover,
    },
    {
      id: 3,
      image: speaker,
      heading: "Portable Speakers",
      subHeading: "Bajaj",
      stars: 5,
      price: "200",
      imageonHover: speakerhover,
    },
  ];
  return (
    <>
      <RecomendedProductContainer spData={products} />
    </>
  );
}

export default RecomendedLaptops
