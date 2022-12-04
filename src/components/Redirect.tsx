import { useEffect } from 'react';

interface Props {
  destination: string;
}

export default function Redirect(props: Props): JSX.Element {
  useEffect(() => {
    window.location.href = props.destination;
  }, []);

  return <></>;
}
