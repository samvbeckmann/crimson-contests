import { useEffect, useState } from 'react';
import { FlapStack } from './FlapStack';
import { Presets } from './Presets';

const Modes = {
  Numeric: 'num',
  Alphanumeric: 'alpha',
  Words: 'words',
};

const splitChars = (v: string) =>
  String(v)
    .split('')
    .map((c) => c.toUpperCase());

const padValue = (v: string, length: number, padChar: string, padStart: boolean) => {
  const trimmed = v.slice(0, length);
  return padStart ? String(trimmed).padStart(length, padChar) : String(trimmed).padEnd(length, padChar);
};

interface Props {
  id?: string;
  className?: string;
  value: string;
  chars?: string;
  words?: string[];
  length: number;
  padChar?: string;
  padMode?: string;
  timing?: number;
  hinge?: boolean;
}

export const FlapDisplay = ({
  id,
  className,
  value,
  chars = Presets.NUM,
  words,
  length,
  padChar = ' ',
  timing = 30,
  padMode = 'auto',
  hinge = true,
}:
Props) => {
  const [stack, setStack] = useState<string[]>([]);
  const [mode, setMode] = useState(Modes.Numeric);
  const [digits, setDigits] = useState<string[]>([]);
  const [children, setChildren] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (words && words.length) {
      setStack(words);
      setMode(Modes.Words);
    } else {
      setStack(splitChars(chars));
      setMode(chars.match(/[a-z]/i) ? Modes.Alphanumeric : Modes.Numeric);
    }
  }, [chars, words]);

  useEffect(() => {
    if (words && words.length) {
      setDigits([value]);
    } else {
      const padStart = padMode === 'auto' ? !!value.match(/^[0-9.,+-]*$/) : padMode === 'start';
      setDigits(splitChars(padValue(value, length, padChar, padStart)));
    }
  }, [value, chars, words, length, padChar, padMode]);

  useEffect(() => {
    setChildren(
      digits.map((digit, i) => <FlapStack key={i} stack={stack} value={digit} mode={mode} timing={timing} hinge={hinge} />)
    );
  }, [digits, timing]);

  return (
    <div id={id} className={className} aria-hidden="true" aria-label={value}>
      {children}
    </div>
  );
};
