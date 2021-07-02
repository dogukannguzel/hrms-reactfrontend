import "./css/App.css";
import "./css/resumePost.css"
import "./css/register.css"
import "./css/JobAdvertisement.css"
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/JobAdvertisement.css"
import "tailwindcss/dist/tailwind.min.css";
import "./css/company.css"

import Navi from "./layouts/Navi";
import "react-toastify/dist/ReactToastify.min.css";
import { Container } from "semantic-ui-react";
import Dashboard from "./layouts/Dashboard";

function App() {
  return (
    <div className="App">
      <Navi />

      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
