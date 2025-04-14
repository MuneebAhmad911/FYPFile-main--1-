import TabsPanel from "./TabsPanel/TabsPanel";
function ProfileSetting() {
  const Tabs = [
    "Profile",
    "Edit Password",
    "Billing Address",
    "Notification",
  ];
  return (
    <>
      <TabsPanel tabsName={Tabs} tableName="this Table" status={Tabs} />
    </>
  );
}

export default ProfileSetting;
