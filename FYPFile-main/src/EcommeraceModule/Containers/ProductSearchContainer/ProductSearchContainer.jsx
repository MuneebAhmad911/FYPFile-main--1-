import React, { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { products } from "../../../constants/Products";
import ProductGrid from "../../Components/ProductSearchComponents/ProductGridComponent/ProductGrid";
import Pagination from "../../Components/ProductSearchComponents/Pagination/Pagination";
import SortDropdown from "../../Components/ProductSearchComponents/ProductSearchSideBarComponent/SortDropdownComponent/SortDropdown";
import PriceFilter from "../../Components/ProductSearchComponents/ProductSearchSideBarComponent/PriceFilterComponent/PriceFilter";
import TagsFilter from "../../Components/ProductSearchComponents/ProductSearchSideBarComponent/TagsFilterComponent/TagsFilter";
import BrandsFilter from "../../Components/ProductSearchComponents/ProductSearchSideBarComponent/BrandsFilterComponent/BrandsFilter";

function ProductSearchContainer() {
  const at800 = useMediaQuery("(max-width: 820px)");
  const isMobile = useMediaQuery("(max-width:670px)");

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("featured");
  const [selectedTags, setSelectedTags] = useState([]);
  const [priceRange, setPriceRange] = useState({ from: "", to: "" });
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [open, setOpen] = useState(false);

  const allTags = [...new Set(products.flatMap((product) => product.tags))];
  const allBrands = [...new Set(products.map((product) => product.brand))];
  console.log("Tags are", allTags);
  console.log("brands are:", allBrands);
  // Handle sorting logic
  const sortProducts = (products, option) => {
    switch (option) {
      case "best-selling":
        return [...products].sort((a, b) => b.sales - a.sales);
      case "alphabetically-a-z":
        return [...products].sort((a, b) => a.heading.localeCompare(b.heading));
      case "alphabetically-z-a":
        return [...products].sort((a, b) => b.heading.localeCompare(a.heading));
      case "price-low-high":
        return [...products].sort((a, b) => Number(a.price) - Number(b.price));
      case "price-high-low":
        return [...products].sort((a, b) => Number(b.price) - Number(a.price));
      default:
        return products;
    }
  };

  // Filter products
  let filteredProducts = products;

  if (selectedTags.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      product.tags.some((tag) => selectedTags.includes(tag))
    );
  }
  

  if (selectedBrands.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedBrands.some((brand) => product.brand.trim().toLowerCase() === brand.trim().toLowerCase())
    );
  }
  

  if (priceRange.from !== "" || priceRange.to !== "") {
    filteredProducts = filteredProducts.filter((product) => {
      const productPrice = Number(product.price);
      const fromPrice = priceRange.from ? Number(priceRange.from) : 0;
      const toPrice = priceRange.to ? Number(priceRange.to) : Infinity;
      return productPrice >= fromPrice && productPrice <= toPrice;
    });
  }

  const sortedProducts = sortProducts(filteredProducts, sortOption);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Box
      sx={{
        display: "block",
        gap: 2,
        width: "100%",
        height: "100%",
        p: "4rem 1rem",
        backgroundColor: "#f5f5f7",
      }}
    >
      <Box sx={{ display: at800 ? "block" : "flex", gap: 2 }}>
        <Box sx={{ display: at800 ? "flex" : "block", flexBasis: "30%" }}>
          {!at800 && (
            // Desktop Mode - Filters Always Visible
            <Box
              sx={{
                display: "block",
                borderRadius: "8px",
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
                bgcolor: "white",
                width: "100%",
                padding: "1rem",
              }}
            >
              <PriceFilter
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
              <TagsFilter
                tags={allTags}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              />
              <BrandsFilter
                brands={allBrands}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
              />
            </Box>
          )}
        </Box>
        <Box sx={{ flexBasis: "120%" }}>
          {!at800 && (
            <SortDropdown
              sortOption={sortOption}
              setSortOption={setSortOption}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          )}
          {at800 && (
            <>
              <SortDropdown
                sortOption={sortOption}
                setSortOption={setSortOption}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              >
                <PriceFilter
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                />
                <TagsFilter
                  tags={allTags}
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
                />
                <BrandsFilter
                  brands={allBrands}
                  selectedBrands={selectedBrands}
                  setSelectedBrands={setSelectedBrands}
                />
              </SortDropdown>
            </>
          )}

          <ProductGrid products={paginatedProducts} />
        </Box>
      </Box>
      <Pagination
        totalProducts={sortedProducts.length}
        productsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />
    </Box>
  );
}

export default ProductSearchContainer;
