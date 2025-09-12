export interface StepsData {
  date: string;
  distance: string | number;
}

interface StepsProps extends StepsData {
  onRemove: () => void;
}

export default function Steps({ date, distance, onRemove }: StepsProps) {
  function removeHandler(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    onRemove();
  }

  return (
    <div className="steps">
      <span>{date}</span>
      <span>{distance}</span>
      <button className="removeBtn" onClick={removeHandler}>
        ✘
      </button>
    </div>
  );
}