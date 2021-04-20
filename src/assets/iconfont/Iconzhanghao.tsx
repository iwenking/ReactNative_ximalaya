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

let Iconzhanghao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M327.913498 374.358047a191 191 0 1 0 371.775791-87.788161 191 191 0 1 0-371.775791 87.788161Z"
        fill={getIconColor(color, 0, '#231815')}
      />
      <Path
        d="M635.3 563H390.2C270.8 563 174 659.7 174 779.1v68.5c0 8.8 7.1 15.9 15.9 15.9h645.7c8.8 0 15.9-7.1 15.9-15.9v-68.5c0-119.4-96.8-216.1-216.2-216.1z"
        fill={getIconColor(color, 1, '#231815')}
      />
    </Svg>
  );
};

Iconzhanghao.defaultProps = {
  size: 18,
};

Iconzhanghao = React.memo ? React.memo(Iconzhanghao) : Iconzhanghao;

export default Iconzhanghao;
