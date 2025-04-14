import React from "react";
import SpecialProductsContainer from "../../Containers/SpecialProductsContainer/SpecialProductsContainer";
import { SpecialProduct1,SpecialProduct2,SpecialProduct3,SpecialProduct4 } from "./ProductsImages/ProductsImages";
const products = [
  {
    pImg: [
      SpecialProduct1.sp1,
      SpecialProduct1.sp2,
      SpecialProduct1.sp3,
      SpecialProduct1.sp4,
      SpecialProduct1.sp5,
    ],
    subHeadingTop: "Samsung",
    heading: "Samsung Galaxy Note 10+ Mobile Phone",
    price: "$500",
    stars: 5,
  },
  {
    pImg: [
      SpecialProduct2.sp1,
      SpecialProduct2.sp2,
      SpecialProduct2.sp3,
      SpecialProduct2.sp4,
    ],
    subHeadingTop: "Samsung",
    heading: "Samsung Galaxy Note 10+ Mobile Phone",
    price: "$500",
    stars: 5,
  },
  {
    pImg: [
      SpecialProduct3.sp1,
      SpecialProduct3.sp2,
      SpecialProduct3.sp3,
      SpecialProduct3.sp4,
    ],
    subHeadingTop: "Samsung",
    heading: "Samsung Galaxy Note 10+ Mobile Phone",
    price: "$500",
    stars: 5,
  },
  {
    pImg: [
      SpecialProduct4.sp1,
      SpecialProduct4.sp2,
      SpecialProduct4.sp3,
    ],
    subHeadingTop: "Samsung",
    heading: "Samsung Galaxy Note 10+ Mobile Phone",
    price: "$500",
    stars: 5,
  },
];

function SpecialProduct() {
  return (
    <>
      <SpecialProductsContainer pData={products} />
    </>
  );
}

export default SpecialProduct;
