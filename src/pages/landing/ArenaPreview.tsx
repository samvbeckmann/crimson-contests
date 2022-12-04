interface Props {
  name: string;
  description: string;
}

export default function ArenaPreview(props: Props): JSX.Element {
  return (
    <div className="rounded bg-white p-4 shadow-md flex flex-col gap-2 border-t-8 border-red-800">
      <div className="text-lg uppercase tracking-wide font-medium text-center text-red-800">{props.name}</div>
      <div>{props.description}</div>
    </div>
  );
}
