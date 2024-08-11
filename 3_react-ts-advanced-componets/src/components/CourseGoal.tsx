// import { type ReactNode } from "react";
import { type FC, type PropsWithChildren } from "react";

// interface CourseGoalProps {
//   title: string;
//  children:ReactNode
// }

//we can write like this too
// using PropsWithChildren we can get the children value and
//  if we want to pass more props then we need to define it within an object

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

// const CourseGoal = ({ title, children }: CourseGoalProps) => {

// we can write the above line by initializing another generic type as FC = Functional Component
//by passing the props type within it

const CourseGoal: FC<CourseGoalProps> = ({ id, title, onDelete, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
