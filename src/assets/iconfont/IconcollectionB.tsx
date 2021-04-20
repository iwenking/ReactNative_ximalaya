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

let IconcollectionB: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1025 1024" width={size} height={size} {...rest}>
      <Path
        d="M1024 384a103.04 103.04 0 0 0-72.32-64l-215.68-58.24L590.72 49.92A101.12 101.12 0 0 0 512 0a92.8 92.8 0 0 0-78.72 51.84l-120.32 192-161.28 49.28L72.96 320a97.28 97.28 0 0 0-68.48 56.96 115.2 115.2 0 0 0 19.84 97.28l140.8 178.56-7.68 256a117.76 117.76 0 0 0 17.92 88.96 64 64 0 0 0 49.92 21.12 181.76 181.76 0 0 0 60.8-13.44l208-84.48 236.16 87.68a141.44 141.44 0 0 0 42.88 7.68c29.44 0 78.72-13.44 82.56-103.68l-12.8-230.4 152.96-205.44A106.88 106.88 0 0 0 1024 384"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcollectionB.defaultProps = {
  size: 18,
};

IconcollectionB = React.memo ? React.memo(IconcollectionB) : IconcollectionB;

export default IconcollectionB;
