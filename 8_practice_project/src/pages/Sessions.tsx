import Layout from "../components/layout/index.tsx";
import SessionCard from "../components/session_card/index.tsx";
import { SESSIONS } from "../dummy-sessions.ts"; // normally, we would probably load that from a server

export default function SessionsPage() {
  return (
    <Layout>
      <main id="sessions-page">
        <header>
          <h2>Available mentoring sessions</h2>
          <p>
            From an one-on-one introduction to React's basics all the way up to
            a deep dive into state mechanics - we got just the right session for
            you!
          </p>
        </header>
        {/* Todo: Output list of sessions */}
        <div id="inner_div">
          {/* <SessionCard sessions={SESSIONS[0]}/> */}
          {SESSIONS.map((el, i) => (
            <>
              <div>
                <SessionCard session={el} key={i} />
              </div>
            </>
          ))}
        </div>
      </main>
    </Layout>
  );
}
