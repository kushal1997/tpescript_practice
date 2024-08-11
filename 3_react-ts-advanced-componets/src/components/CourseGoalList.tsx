import { type ReactNode, type FC } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalType } from "../types";
import InfoBox from "./InfoBox";

type CourseGoalProps = {
  goals: CourseGoalType[];
  onDelete: (id: number) => void;
};
const CourseGoalList: FC<CourseGoalProps> = ({ goals, onDelete }) => {
  if (goals.length === 0) {
    return <InfoBox mode="hint">Nothing to show here</InfoBox>;
  }
  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" warninglevel="high">
        You have added a lot
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals?.map((el) => (
          <li key={el.id}>
            <CourseGoal id={el.id} title={el.title} onDelete={onDelete}>
              <p>{el.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
