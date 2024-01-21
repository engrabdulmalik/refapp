import { useRef } from "react";
function App() {
  const username = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const myName = username.current.value;
    console.log(myName);
    username.current.value = "";
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <input type="text" ref={username} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
