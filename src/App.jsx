import Form from "./Component/Form";

function App() {
  return (
    <>
      <div className="box-border w-screen h-screen flex flex-col justify-center items-center gap-6 p-6 bg-gradient-to-r from-blue-500 to-blue-800">
        <h1 className="font-sans">SOSA Form Validation Component</h1>
        <Form />
      </div>
    </>
  );
}

export default App;
