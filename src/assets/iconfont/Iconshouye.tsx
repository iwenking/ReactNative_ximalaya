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

let Iconshouye: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M979.2 473.6l-19.2 0L531.2 57.6c-12.8-12.8-25.6-12.8-38.4 0L57.6 473.6 44.8 473.6C19.2 473.6 0 492.8 0 518.4l0 38.4c0 25.6 19.2 44.8 44.8 44.8l115.2 0L160 896c0 25.6 19.2 44.8 44.8 44.8l185.6 0c25.6 0 44.8-19.2 44.8-44.8l0-236.8 153.6 0L588.8 896c0 25.6 19.2 44.8 44.8 44.8l185.6 0c25.6 0 44.8-19.2 44.8-44.8L864 601.6l115.2 0c25.6 0 44.8-19.2 44.8-44.8L1024 518.4C1024 492.8 1004.8 473.6 979.2 473.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshouye.defaultProps = {
  size: 18,
};

Iconshouye = React.memo ? React.memo(Iconshouye) : Iconshouye;

export default Iconshouye;
