interface Props {
  Icon: React.FunctionComponent;
  className?: string;
  fill?: string;
  flip?: boolean;
  opacity?: string;
  style?: React.CSSProperties;
}

export default function MonsterIcon({ Icon, className, style, ...props }: Props): JSX.Element {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="2048px"
      height="2048px"
      viewBox="0 0 2048 2048"
      xmlSpace="preserve"
      className={className}
      style={style}
    >
      <g fill={props.fill} opacity={props.opacity} transform={props.flip ? 'scale(-1, 1) translate(-2048, 0)' : ''}>
        <Icon />
      </g>
    </svg>
  );
}
