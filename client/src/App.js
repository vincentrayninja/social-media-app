import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./screens/Feed";

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Feed />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
