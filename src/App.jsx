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
        {/* This <Header /> component is located on top of the app on every page.
        It contains navigation menus and the app logo. */}
        <Header />

        <Routes>
          {/* The main page of this take home test is the Overview page. 
          So the main details should be in Overview.jsx */}
          <Route exact path="/overview" element={<Overview />} />

          {/* If in the future, we have to develop the Teachers and Students pages
          We can simply create new components for those pages 
          and replace them to the <CurrentNotAvailable /> below. */}
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
          {/* If users type other paths that not include in this app, 
          it will be redirected to the overview page as the default. */}
          <Route path="*" element={<Navigate to="/overview" replace />} />
        </Routes>

        {/* This <Footer /> component is located at 
        the bottom of the app on every page. It contains footer content. */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
