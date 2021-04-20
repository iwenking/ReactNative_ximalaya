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

let Iconzhanghaoxinxi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M514.558721 0c143.8001 0 259.966017 114.630685 259.966017 255.872064s-116.677661 255.872064-259.966017 255.872064c-143.8001 0-259.966017-114.630685-259.966017-255.872064-0.511744-141.241379 116.165917-255.872064 259.966017-255.872064z"
        fill={getIconColor(color, 0, '#F95352')}
      />
      <Path
        d="M514.558721 0c143.8001 0 259.966017 114.630685 259.966017 255.872064s-116.677661 255.872064-259.966017 255.872064c-143.8001 0-259.966017-114.630685-259.966017-255.872064-0.511744-141.241379 116.165917-255.872064 259.966017-255.872064z"
        fill={getIconColor(color, 1, '#FF8080')}
      />
      <Path
        d="M416.815592 597.205397h216.97951c185.763118 0 336.215892 147.894053 336.215893 330.586707v21.493253c0 72.155922-150.452774 74.714643-336.215893 74.714643H416.815592c-185.763118 0-336.215892 0-336.215892-74.714643v-21.493253c0-182.692654 150.452774-330.586707 336.215892-330.586707z"
        fill={getIconColor(color, 2, '#F95352')}
      />
    </Svg>
  );
};

Iconzhanghaoxinxi.defaultProps = {
  size: 18,
};

Iconzhanghaoxinxi = React.memo ? React.memo(Iconzhanghaoxinxi) : Iconzhanghaoxinxi;

export default Iconzhanghaoxinxi;
