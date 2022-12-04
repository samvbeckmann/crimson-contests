import { Flap } from './Flap';

interface Props {
  mode?: string;
  className?: string;
  value: string;
  prevValue: string;
  final: boolean;
}

export const FlapDigit = ({ className, value, prevValue, final, mode, ...restProps }: Props) => {
  return (
    <div className="split-flap-digit" data-kind="digit" data-mode={mode}>
      <Flap {...restProps}>{value}</Flap>
      <Flap bottom {...restProps}>
        {prevValue}
      </Flap>
      <Flap key={`top-${prevValue}`} animated final={final} {...restProps}>
        {prevValue}
      </Flap>
      {final && (
        <Flap key={`bottom-${value}`} bottom animated final {...restProps}>
          {value}
        </Flap>
      )}
    </div>
  );
};
