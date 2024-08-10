// import Input from "./components/Input";

import Button from "./components/Button";
import Container from "./components/Container";

function App() {
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

        <Container
          as={"a"}
          className="button"
          href="https://www.google.com/"
          target="_blanck"
        >
          Hey click here
        </Container>
      </main>
    </>
  );
}

export default App;
