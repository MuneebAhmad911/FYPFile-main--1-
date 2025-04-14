import first from "../../../StoreAssets/images/main-banner-1.jpg";
import second from "../../../StoreAssets/images/catbanner-01.jpg";
import third from "../../../StoreAssets/images/catbanner-02.jpg";
import fourth from "../../../StoreAssets/images/catbanner-03.jpg";
import fifth from "../../../StoreAssets/images/catbanner-04.jpg";
import sixth from "../../../StoreAssets/images/service.png";
import seventh from "../../../StoreAssets/images/service-02.png";
import eighth from "../../../StoreAssets/images/service-03.png";
import ninth from "../../../StoreAssets/images/service-04.png";
import tenth from "../../../StoreAssets/images/service-05.png";
import Camerapic from "../../../StoreAssets/img/SpecialProduct2/sp1.jpg";
import TV from "../../../StoreAssets/images/tv.jpg";
import Speaker from "../../../StoreAssets/img/speakerhover.jpg";
import Watch from "../../../StoreAssets/img/watchhovered.jpg";
import HP from "../../../StoreAssets/img/HP.jpg";
import Console from "../../../StoreAssets/img/Console.jpg";
import Accesories from "../../../StoreAssets/img/accesories.jpg";
import Monitor from "../../../StoreAssets/img/SpecialProduct3/sp1.jpg";
import { Link } from "react-router-dom";
import { Box, Grid2 as Grid, Typography, useMediaQuery } from "@mui/material";
import FeaturedCollectionComponent from "../../FeaturedCollection/FeaturedCollectionComponent";
import MainProductsComponent from "../../MainProductsComponent/MainProductsComponent";
import SpecialProduct from "../../SpecialProductComponent/SpecialProduct";
import RecomendedProduct from "../../RecomendedProductComponent/RecomendedProduct";
import LogoSliderComponent from "../../LogoSliderComponent/LogoSliderComponent";
import { ColorsEcommrace as C } from "../../../Theme/EcommeraceTheme";

const pictures = [
  {
    picture: second,
    subHeading: "SUPERCHARGED FOR PROS.",
    mainHeading: "IPAD S13+ Pro.",
    desc: "From $999.00 or $41.62/mo. <br /> for 24 mo.",
    lineebreak: "",
  },
  {
    picture: third,
    subHeading: "SUPERCHARGED FOR PROS.",
    mainHeading: "IPAD S13+ Pro.",
    desc: "From $999.00 or $41.62/mo. <br /> for 24 mo.",
    lineebreak: "",
  },
  {
    picture: fourth,
    subHeading: "SUPERCHARGED FOR PROS.",
    mainHeading: "IPAD S13+ Pro.",
    desc: "From $999.00 or $41.62/mo. <br /> for 24 mo.",
    lineebreak: "",
  },
  {
    picture: fifth,
    subHeading: "SUPERCHARGED FOR PROS.",
    mainHeading: "IPAD S13+ Pro.",
    desc: "From $999.00 or $41.62/mo. <br /> for 24 mo.",
    lineebreak: "",
  },
];
const sectionPics1 = [
  {
    Heading: "Smart Television",
    items: "10 Items",
    picture: TV,
    border:"1px solid #ededed"
  },
  {
    Heading: "Smart Watches",
    items: "17 Items",
    picture: Watch,
    border:"1px solid #ededed"

  },
  {
    Heading: "Music & Gaming",
    items: "16 Items",
    picture: Console,
    border:"1px solid #ededed"

  },
  {
    Heading: "Accessories",
    items: "20 Items",
    picture: Monitor,
    border:"none"
  },
  {
    Heading: "Poratable Speaker",
    items: "15 Items",
    picture: Speaker,
    border:"none"

  },
  {
    Heading: "Home Appliances",
    items: "15 Items",
    picture: Accesories,
    border:"none"

  },
];


export {
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth,
    Camerapic,
    TV,
    Speaker,
    Watch,
    HP,
    Console,
    Accesories,
    Monitor,
    Link,
    Box,
    Grid,
    Typography,
    FeaturedCollectionComponent,
    MainProductsComponent,
    SpecialProduct,
    RecomendedProduct,
    LogoSliderComponent,
    C,
    pictures,
    sectionPics1,
    useMediaQuery
  };
  