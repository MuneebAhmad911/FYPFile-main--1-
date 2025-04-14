import ImportsProductPage from "./ImportsProductPage/ImportsProductPage";

function ProductPage() {
  const { ProductPageContainer, products,Box } = ImportsProductPage();
  return (
    <>
    <Box sx={{p:"2rem",  backgroundColor: "#f5f5f7"}}>
      <ProductPageContainer products={products[0]} />
    </Box>
    </>
  );
}

export default ProductPage;
