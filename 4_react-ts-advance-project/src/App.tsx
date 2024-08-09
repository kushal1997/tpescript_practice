// import Input from "./components/Input";

import Button from "./components/Button";

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
        <p>
          <Button>Click here</Button>
        </p>

        <p>
          <Button href="https://www.google.com/" target="_blanck">
            Open the link
          </Button>
        </p>
      </main>
    </>
  );
}

export default App;
