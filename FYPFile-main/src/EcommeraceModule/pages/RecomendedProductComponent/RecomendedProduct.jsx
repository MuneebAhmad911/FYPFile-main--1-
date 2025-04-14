import TabsPanel from "./TabsPanel/TabsPanel";
function RecomendedProduct() {
  const Tabs = ["Headphone", "Speaker", "Laptops", "Mobiles",];
  return (
    <>
      <TabsPanel tabsName={Tabs} tableName="this Table" status={Tabs} />
    </>
  );
}

export default RecomendedProduct;
