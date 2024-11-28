import logo from "./logo.svg";
import "./App.css";
import ChatPage from "./components/chatPage/chatPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/loginPage/loginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/chat"
            element={
              isAuthenticated ? <ChatPage /> : <Navigate to={"/login"} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
