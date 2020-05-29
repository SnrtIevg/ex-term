import React from 'react';
import { Layout } from 'antd';
import { TabObj } from '../component/TabContent/tci';
import TabContent  from '../component/TabContent/index';

const { Sider } = Layout;

const timestamp: number = new Date().getTime();
const activeKey: string = `1-${timestamp}`;
const tabs: TabObj[] = [
  { id: 0, title: 'bash', active: false, timestamp: new Date().getTime(), initCommand: 'cd ~' },
  { id: 1, title: 'zsh', active: true, timestamp: timestamp, initCommand: 'cd ~' }
];
const onchange = (activeKey: string): void => {
  console.log('active key is ', activeKey);
};
const onclose = () => {
  console.log('close');
};

function App() {
  return (
    <Layout>
      <Sider>ssss</Sider>
      <Layout>
        <TabContent tabs={tabs} activeKey={activeKey} onChange={onchange} onClose={onclose}/>
      </Layout>
    </Layout>
  );
}

export default App;
