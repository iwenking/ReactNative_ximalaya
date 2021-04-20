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

let Iconshouye1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1091 1024" width={size} height={size} {...rest}>
      <Path
        d="M1079.645443 485.307597a88.81129 88.81129 0 0 1-84.443522 56.780989h-30.089071v361.554159a120.841592 120.841592 0 0 1-120.356284 120.356284h-210.623497v-242.653798a28.633148 28.633148 0 0 0-30.089071-30.089071H486.114252a28.633148 28.633148 0 0 0-30.089071 30.089071v242.653798H243.460454a120.841592 120.841592 0 0 1-121.3269-122.297514v-361.55416h-30.089071A97.061519 97.061519 0 0 1 8.086269 485.307597a83.472907 83.472907 0 0 1 23.780072-101.429288L486.114252 22.809457a90.267213 90.267213 0 0 1 120.356284 0l451.336065 361.068852a83.472907 83.472907 0 0 1 24.26538 99.488057z"
        fill={getIconColor(color, 0, '#EC3A4E')}
      />
    </Svg>
  );
};

Iconshouye1.defaultProps = {
  size: 18,
};

Iconshouye1 = React.memo ? React.memo(Iconshouye1) : Iconshouye1;

export default Iconshouye1;
