/* eslint-disable no-unused-vars */
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function Tasks(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9 11l3 3L22 4"
        stroke="#AFAFAF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
        stroke="#AFAFAF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Tasks;
