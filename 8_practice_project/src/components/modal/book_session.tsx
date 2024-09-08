import * as React from "react";
import { createPortal } from "react-dom";
import { formattedDate } from "../../utils";
import { useSessiontDispatch } from "../../store/hooks";
import { bookSession, SessionDetail } from "../../store/slices/booking_session";
import { useParams } from "react-router-dom";

interface IBookSessionProps {
  onClose: () => void;
  title:string;
  summary:string;
  date:string;
  id:string;
}

const BookSession: React.FunctionComponent<IBookSessionProps> = ({
  onClose,title,summary,date,id
}) => {
  const dispatch=useSessiontDispatch();



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Extract the name and email from the form data
    const { name, email } = data as { name: string; email: string };
    // const date: string = formattedDate();
    console.log({id,title,summary, date , name, email});
    const postData:SessionDetail={
      id,title,summary, date , name, email
    }
    dispatch(bookSession(postData))
    onClose();
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
            <h2>Book Session</h2>
            <p id="actions">
              <button className="m_button" onClick={onClose}>
                X
              </button>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="control">
              <label htmlFor="name">Enter your name</label>
              <input type="text" name="name" id="" />
            </div>
            <div className="control">
              <label htmlFor="email">Enter your email address</label>
              <input type="email" name="email" id="" />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p id="actions">
                <button className="button" type="submit">
                  Submit
                </button>
              </p>
            </div>
          </form>
        </dialog>
      </div>
    </>,
    document.getElementById("modal-root")!
  );
};

export default BookSession;
