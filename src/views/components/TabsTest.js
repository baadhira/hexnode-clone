import { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "./components/tabs/tabs";

const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

const TabPanelContainer = styled.div`
  height: 100vh;
`;

export default function TabsTest() {

  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    < >
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="Tab 1" value={0}></Tab>
          <Tab label="Tab 2" value={1}></Tab>
          <Tab label="Tab 3" value={2}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
          <h1>Tab 1</h1>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <h1>Tab 2</h1>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <h1>Tab 3</h1>
        </TabPanel>
      </TabPanelContainer>
    </>
  );
}
