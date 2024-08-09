import Input from "./components/Input";

function App() {
  return (
    <>
      <main>
        <Input id="name" label="Your name" />
        <Input
          id="age"
          label="your age"
          type="number"
          placeholder="enter age"
          autoFocus
        />
      </main>
    </>
  );
}

export default App;
