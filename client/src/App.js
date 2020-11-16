import React, { useState } from 'react';
import { UserForm } from './components/Form/UserForm';
import Title from './components/Documents/Title';
import UploadForm from './components/Documents/UploadForm';
import ImageGrid from './components/Documents/ImageGrid';
import Modal from './components/Documents/Modal';
import deleteImg from './hooks/DeleteImg';

// import { UserForm } from './components/Userform';



function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (

    <div className="App">
        <UserForm />
        <Title />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
       )}
            {/* <div>
             <button onClick={()=> deleteImg(selectedImg)} >DELETE</button>   
            </div> */}
    </div>

  );
}

export default App; 
