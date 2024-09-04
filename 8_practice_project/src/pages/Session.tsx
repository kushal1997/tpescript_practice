import * as React from "react";
import { useParams } from "react-router-dom";

import { SESSIONS } from "../dummy-sessions.ts";
import Layout from "../components/layout/index.tsx";
import BookSession from "../components/modal/book_session.tsx";


export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const [formVisisble,isFormVisible]=React.useState<boolean>(false)

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }


  const handleOpenModal=()=>{
    isFormVisible(true)
  }
  const handleCloseModal=()=>{
    isFormVisible(false)
  }

  return (
    <Layout>
      {
        formVisisble && <BookSession onClose={handleCloseModal}/>
      }
      <main id="session-page">
        <article>
          <header>
            <img src={loadedSession.image} alt={loadedSession.title} />
            <div>
              <h2>{loadedSession.title}</h2>
              <time dateTime={new Date(loadedSession.date).toISOString()}>
                {new Date(loadedSession.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
              <p>
                {/* Todo: Add button that opens "Book Session" dialog / modal */}
                <button onClick={handleOpenModal} className="button">Book Session</button>
              </p>
            </div>
          </header>
          <p id="content">{loadedSession.description}</p>
        </article>
      </main>
    </Layout>
  );
}
