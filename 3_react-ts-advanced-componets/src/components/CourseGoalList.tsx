import {type FC } from "react"
import CourseGoal from "./CourseGoal";
import {type CourseGoal as CourseGoalType } from "../types";


type CourseGoalProps ={
    goals:CourseGoalType[],
    onDelete:(id:number)=>void
}
const CourseGoalList:FC<CourseGoalProps> = ({goals,onDelete}) => {
  return (
    <>
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
  )
}

export default CourseGoalList