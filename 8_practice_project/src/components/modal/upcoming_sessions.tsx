import * as React from "react";
import { createPortal } from "react-dom";
import { SESSIONS } from "../../dummy-sessions";
import { useSessionSelector, useSessiontDispatch } from "../../store/hooks";
import { removeSession } from "../../store/slices/booking_session";

interface IUpcomingSessionsProps {
  onClose: () => void;
}

const UpcomingSessions: React.FunctionComponent<IUpcomingSessionsProps> = ({
  onClose,
}) => {
  const upcomingSessions = useSessionSelector(
    (state) => state.booked_session.sessions
  );
  const dispatch = useSessiontDispatch();

  const handleCancelSession = (value: string) => {
    dispatch(removeSession(value));
  };
  return createPortal(
    <>
      <div className="modal-container">
        <dialog className="modal" open>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2>Upcoming Sessions</h2>
            <p id="actions">
              <button className="m_button" onClick={onClose}>
                X
              </button>
            </p>
          </div>
          {upcomingSessions.map((el, i) => (
            <div className="upcoming-session " key={i}>
              <div id="">
                <h3>{el.title}</h3>
                <p>{el.summary}</p>
                <time dateTime={new Date(el.date).toISOString()}>
                  {new Date(el.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </time>
              </div>
              <p className="actions" onClick={() => handleCancelSession(el.id)}>
                Cancel
              </p>
            </div>
          ))}
        </dialog>
      </div>
    </>,
    document.getElementById("modal-root")!
  );
};

export default UpcomingSessions;
