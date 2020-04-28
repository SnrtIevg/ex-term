import { onTabClosed } from '../func';
import React from 'react';

export interface BaseProps extends React.ComponentProps<any> {
}
export interface ActiveBarProps extends BaseProps{
  'className'?: string
  'tabs': Array<string>
  'onTabClose': onTabClosed<string>
}