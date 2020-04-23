import React from 'react';
import './layout.css';
import { LayoutProps } from '../../interface/props';


function Layout({ }: LayoutProps) {

  return (
    <div className={'container'}>
      <div className={'left-side'}>侧边栏</div>
      <div className={'layout-main'}>
      </div>
    </div>
  );
}

export default Layout;