import DataPage from "./Components/DataPage";
import DetailJSON from "./Components/DetailJSON";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/comment/:id" component={DetailJSON} />
        <Route exact path="/" component={DataPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
