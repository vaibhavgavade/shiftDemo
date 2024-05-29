import Svg, {SvgProps, G, Circle, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: animateTransform */
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    stroke="#E2006A"
    {...props}>
    <G
      fill="none"
      fillRule="evenodd"
      strokeWidth={2}
      transform="translate(1 1)">
      <Circle cx={18} cy={18} r={18} strokeOpacity={0.5} />
      <Path d="M36 18c0-9.94-8.06-18-18-18" />
    </G>
  </Svg>
);
export default SvgComponent;
