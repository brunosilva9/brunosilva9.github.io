import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./components/Introduction";
import ModalExampleModal from "./components/ModalExampleModal";
import ApiTest from "./components/ApiTest";
import React from "react";
import NoPage from "./components/NoPage";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Multitap from "./components/Multitap";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Introduction" element={<Introduction />} />
            <Route path="ModalExampleModal" element={<ModalExampleModal />} />
            <Route path="ApiTest" element={<ApiTest />} />
            <Route path="Multitap" element={<Multitap />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
export default App;
