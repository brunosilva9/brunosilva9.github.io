import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from './components/Introduction';
import LanguageSelector from './components/LanguageSelector';
import ModalExampleModal from './components/ModalExampleModal';
import ApiTest from './components/ApiTest';
import React from 'react'
import NoPage from './components/NoPage';
import Home from './components/Home';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout  />}>
          <Route index element={<Home />} />
          <Route path="LanguageSelector" element={<LanguageSelector />} />
          <Route path="Introduction" element={<Introduction/>} />
          <Route path="ModalExampleModal" element={<ModalExampleModal/>} />
          <Route path="ApiTest" element={<ApiTest/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
