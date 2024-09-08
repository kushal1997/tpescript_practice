import * as React from "react";
import { useNavigate } from "react-router-dom";

type SessionPropsType = {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  duration: number;
  image: string;
};
interface ISessionCardProps {
  session: SessionPropsType;
}

const SessionCard: React.FunctionComponent<ISessionCardProps> = ({
  session,
}) => {
    const navigate=useNavigate();

  return (
    <>
      <div id="session_card">
        <img src={session?.image} alt="" />
        <div>
          <h2>{session.title}</h2>
          <p>{session.summary}</p>
          <button className="button" onClick={()=>navigate(`${session.id}`)}>Learn More</button>
        </div>
      </div>
    </>
  );
};

export default SessionCard;
