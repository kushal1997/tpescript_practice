// import Input from "./components/Input";

import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Forward_Ref_Input from "./components/FowardRefInput";
import IconButton from "./components/IconButton";
import List from "./components/List";
import Input from "./components/Input";
import Form from "./components/Form";

function HeartIcon() {
  return <span>❤️</span>;
}

const users = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
];
function App() {
  const input = useRef<HTMLInputElement>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  };
  return (
    <>
      <main>
        {/* <Input id="name" label="Your name" />
        <Input
          id="age"
          label="your age"
          type="number"
          placeholder="enter age"
          autoFocus
        /> */}

        {/* <p>
          <Button>Click here</Button>
        </p>

        <p>
          <Button href="https://www.google.com/" target="_blanck">
            Open the link
          </Button>
        </p> */}

        {/* <Container
          as={"a"}
          className="button"
          href="https://www.google.com/"
          target="_blanck"
        >
          Hey click here
        </Container> */}

        {/* <IconButton icon={HeartIcon} onClick={() => console.log("liked")}>
          Like
        </IconButton> */}

        {/* <section>
          <h2>Users</h2>
          <List
            items={users}
            renderItems={(user) => <li key={user.id}>{user.name}</li>}
          />
        </section> */}

        {/* <Forward_Ref_Input id="name" label="Your name" ref={input} /> */}

        <Form onSave={handleSave}>
          <Input id="name" label="Your name" />
          <Input
            id="age"
            label="your age"
            type="number"
            placeholder="enter age"
            autoFocus
          />
          <p>
            <Button>Save</Button>
          </p>
        </Form>
      </main>
    </>
  );
}

export default App;
