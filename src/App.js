import './App.css';
import Button from "./components/Button";


function App() {


  return (
    <div className="App">
     <div>
        <div style={{display: "flex", gap: 50}}>
            <Button text={"submit me"} type={"submit"} notification={"Hello world"}/>
            <Button text={"reset me"} type={"reset"} notification={"Check this out"}/>
            <Button text={"button me"} type={"button"} notification={"How are you there?"}/>
        </div>
     </div>
    </div>
  );
}

export default App;
