import "./App.css";
import Post from "./Post";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./Pages/IndexPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />

        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
