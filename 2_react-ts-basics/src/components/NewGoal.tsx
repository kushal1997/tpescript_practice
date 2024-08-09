import { type ChangeEvent, useState, type FormEvent, FC } from "react";
import { type formType } from "../types";

interface NewGoalProps {
  addGoalFunc: (values: formType) => void;
}
const NewGoal: FC<NewGoalProps> = ({ addGoalFunc }) => {
  const [formData, setFormData] = useState<formType>({
    goal: "",
    summary: "",
  });
  const handleSubmit = (e: FormEvent) => {
    e?.preventDefault();
    addGoalFunc(formData);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="goal">Your goal</label>
          <input
            type="text"
            name="goal"
            id="goal"
            onChange={handleInputChange}
            value={formData.goal}
          />
        </p>
        <p>
          <label htmlFor="summary">Short Summary</label>
          <input
            type="text"
            name="summary"
            id="summary"
            onChange={handleInputChange}
            value={formData.summary}
          />
        </p>
        <p>
          <button type="submit">Add Goal</button>
        </p>
      </form>
    </>
  );
};

export default NewGoal;
