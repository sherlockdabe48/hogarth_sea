import "./styles/App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Overview from "./pages/Overview";
import CurrentNotAvailable from "./components/CurrentNotAvailable";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/overview" element={<Overview />} />
          <Route
            exact
            path="/teachers"
            element={<CurrentNotAvailable pageName="Teachers" />}
          />
          <Route
            exact
            path="/students"
            element={<CurrentNotAvailable pageName="Students" />}
          />
          <Route path="*" element={<Navigate to="/overview" replace />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
