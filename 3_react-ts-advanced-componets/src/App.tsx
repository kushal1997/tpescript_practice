import { useState } from "react";

import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList";
import { type CourseGoal as CourseGoalType } from "./types";
import NewGoal_Ref from "./components/NewGoal_Ref";

export default function App() {
  //if we are going to use useState, then
  //we need to define its type as useSate is a generic type
  // we can pass the custom types within the brackets <>

  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  const handleAddGoal = (A: string, B: string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalType = {
        id: Math.random(),
        title: A,
        description: B,
      };
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals?.filter((el) => el.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal_Ref onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
