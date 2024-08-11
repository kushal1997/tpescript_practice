import { FC, FormEvent, useRef } from "react";

interface NewGoalProps {
  onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal_Ref: FC<NewGoalProps> = ({ onAddGoal }) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    console.log("enteredGoal", enteredGoal, "enteredSummary", enteredSummary);

    onAddGoal(enteredGoal, enteredSummary);

    e.currentTarget.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="goal">Your goal</label>
          <input type="text" name="goal" id="goal" ref={goal} />
        </p>
        <p>
          <label htmlFor="summary">Short Summary</label>
          <input type="text" name="summary" id="summary" ref={summary} />
        </p>
        <p>
          <button type="submit">Add Goal</button>
        </p>
      </form>
    </>
  );
};

export default NewGoal_Ref;
