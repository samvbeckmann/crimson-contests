interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: Props): JSX.Element {
  return (
    <div className="relative mb-2">
      <span className="absolute h-full flex items-center ml-2">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      {value !== '' && (
        <div className="absolute right-0 h-full p-1 flex">
          <button
            className="px-2 rounded hover:bg-slate-200 active:bg-slate-300 transition-colors"
            onClick={() => onChange('')}
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
      )}

      <input
        onChange={(event) => onChange(event.target.value)}
        value={value}
        className="border-2 rounded w-full pl-10 py-1 pr-2 placeholder:italic"
        placeholder="Search for a monster..."
      />
    </div>
  );
}
