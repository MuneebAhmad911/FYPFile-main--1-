import React from "react";
import MainProductCard from "../../Components/MainProductCard/MainProductCard";
import mobile from "../../StoreAssets/img/mobile2.jpg";
import laptop from "../../StoreAssets/img/laptop2.jpg";
import watch from "../../StoreAssets/img/watch2.jpg";
import speaker from "../../StoreAssets/img/Speaker2.jpg";
import { Grid2 as Grid,useMediaQuery } from "@mui/material";

function MainProductsComponent() {
const at780 = useMediaQuery('(min-width:780px)');
  return (
    <>
      <Grid container spacing={2} m={"0 1rem"}>
        <Grid item size={at780 ? 3 : 6}>
          <MainProductCard
            image={watch}
            topSubHeading={"BIG SCREEN"}
            bottomSubHeading={"Pay $399 to buy this Watch "}
            Heading={"Smart Watch Series 7"}
            text={"white"}
          />
        </Grid>
        <Grid item size={at780 ? 3 : 6}>
          <MainProductCard
            image={mobile}
            topSubHeading={"Smartphones"}
            bottomSubHeading={"Pay $2000 to buy this mobile "}
            Heading={"Iphone 16 Pro Max"}
            text={"black"}
          />
        </Grid>
        <Grid item size={at780 ? 3 : 6}>
          <MainProductCard
            image={laptop}
            topSubHeading={"Studio Display"}
            bottomSubHeading={"27 Inch 5K retina display"}
            Heading={"600 nits of Brightness "}
            text={"black"}
          />
        </Grid>
        <Grid item size={at780 ? 3 : 6}>
          <MainProductCard
            image={speaker}
            topSubHeading={"Home Speakers"}
            bottomSubHeading={"Pay $700 to buy this Item "}
            Heading={"Room Filling Sound"}
            text={"black"}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default MainProductsComponent;
