import "./App.css";
import "semantic-ui-css/semantic.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.css';
import Navi from "./layouts/Navi";
import { Container } from "semantic-ui-react";
import Dashboard from "./layouts/Dashboard";

function App() {
  return (
    <div className="App">
      <Navi />
     
      <Container className="main">
       
      <Dashboard/>
      </Container>
    </div>
  );
}

export default App;
