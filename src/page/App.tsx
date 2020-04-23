import React, { useState } from 'react';
import Layout from '../component/Layout';
import './App.css';
import { onTabClosed } from '../interface/func';

const originTabs: Array<string> = [
  'tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6', 'tab7', 'tab8', 'tab9'
];


function App() {
  const [tabs, setTabs] = useState(originTabs);

  const tabCloseHandler: onTabClosed<string> = (index, item) => {
    console.log('close tab which name is ', item);
    let newTags = tabs.filter((val , ind) => val !== item && ind !== index);
    setTabs(newTags);
  };

  return (
    <React.Fragment>
      <Layout tabs={tabs} onTabClose={tabCloseHandler}>
        <div>child</div>
      </Layout>
    </React.Fragment>
  );
}

export default App;
