/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let Iconfaxian1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-57.6 0a57.6 57.6 0 1 0 115.2 0 57.6 57.6 0 1 0-115.2 0Z"
        fill={getIconColor(color, 0, '#666666')}
      />
      <Path
        d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z m81.6 596.8L236.8 784l187.2-356.8L780.8 240 593.6 596.8z"
        fill={getIconColor(color, 1, '#666666')}
      />
      <Path
        d="M512 512m-57.6 0a57.6 57.6 0 1 0 115.2 0 57.6 57.6 0 1 0-115.2 0Z"
        fill={getIconColor(color, 2, '#666666')}
      />
      <Path
        d="M512 512m-57.6 0a57.6 57.6 0 1 0 115.2 0 57.6 57.6 0 1 0-115.2 0Z"
        fill={getIconColor(color, 3, '#666666')}
      />
    </Svg>
  );
};

Iconfaxian1.defaultProps = {
  size: 18,
};

Iconfaxian1 = React.memo ? React.memo(Iconfaxian1) : Iconfaxian1;

export default Iconfaxian1;
