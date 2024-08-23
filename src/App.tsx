import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout> home page</Layout>} />
        <Route path="*" element={<div> page not found</div>} />
      </Routes>
    </>
  );
}

export default App;
