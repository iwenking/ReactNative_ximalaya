/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconshouye from './Iconshouye';
import IconcollectionB from './IconcollectionB';
import Iconzhanghaoxinxi from './Iconzhanghaoxinxi';
import Iconfaxian from './Iconfaxian';
import Iconshouye1 from './Iconshouye1';
import Iconfaxian1 from './Iconfaxian1';
import Iconzhanghao from './Iconzhanghao';
import Iconshoucang from './Iconshoucang';

export type IconNames = 'iconshouye' | 'iconcollection-b' | 'iconzhanghaoxinxi' | 'iconfaxian' | 'iconshouye1' | 'iconfaxian1' | 'iconzhanghao' | 'iconshoucang';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconshouye':
      return <Iconshouye key="1" {...rest} />;
    case 'iconcollection-b':
      return <IconcollectionB key="2" {...rest} />;
    case 'iconzhanghaoxinxi':
      return <Iconzhanghaoxinxi key="3" {...rest} />;
    case 'iconfaxian':
      return <Iconfaxian key="4" {...rest} />;
    case 'iconshouye1':
      return <Iconshouye1 key="5" {...rest} />;
    case 'iconfaxian1':
      return <Iconfaxian1 key="6" {...rest} />;
    case 'iconzhanghao':
      return <Iconzhanghao key="7" {...rest} />;
    case 'iconshoucang':
      return <Iconshoucang key="8" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
