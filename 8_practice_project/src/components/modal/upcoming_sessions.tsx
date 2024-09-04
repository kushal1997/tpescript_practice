import * as React from "react";
import { createPortal } from "react-dom";
import { SESSIONS } from "../../dummy-sessions";

interface IUpcomingSessionsProps {
  onClose: () => void;
}

const UpcomingSessions: React.FunctionComponent<IUpcomingSessionsProps> = ({
  onClose,
}) => {
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
          <div className="upcoming-session ">
            <div id="">
              <h3>{SESSIONS[0].title}</h3>
              <p>{SESSIONS[0].summary}</p>
              <time dateTime="2024-09-04">Sep 4, 2024</time>

            </div>
            <p className="actions" >
              Cancel
            </p>
          </div>
        </dialog>
      </div>
    </>,
    document.getElementById("modal-root")!
  );
};

export default UpcomingSessions;
