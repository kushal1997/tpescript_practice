import * as React from "react";
import { createPortal } from "react-dom";

interface IBookSessionProps {
  onClose: () => void;
}

const BookSession: React.FunctionComponent<IBookSessionProps> = ({
  onClose,
}) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
    
        // Extract the name and email from the form data
        const { name, email } = data as { name: string; email: string };
    
        console.log({ name, email });
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
              <button className="button" type="submit" >
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
