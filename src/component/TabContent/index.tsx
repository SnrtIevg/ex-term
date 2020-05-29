import React from 'react';
import { Tabs } from 'antd';

import { TabContentProps, TabObj } from './tci';


const { TabPane } = Tabs;

function TabContent(props: TabContentProps) {
  const { tabs, activeKey, onChange } = props;

  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}>
      {tabs.map((tab: TabObj) => {
          let key: string = `${tab.id}-${tab.timestamp}`;
          return (
            <TabPane tab={tab.title} key={key} closable={true}>
              {tab.initCommand}
            </TabPane>
          );
        }
      )}
    </Tabs>
  );
}

export default TabContent;