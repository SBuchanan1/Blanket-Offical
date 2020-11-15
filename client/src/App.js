import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
// import Nav from "./components/Nav";


function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    // <Router>
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
    // <Router />
  );
}

export default App;

