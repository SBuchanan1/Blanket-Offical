import React from 'react';
// import { motion } from 'framer-motion';
import deleteImg from '../../hooks/DeleteImg';

const Modal = ({ setSelectedImg, selectedImg }) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return (
        <div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <div>
             <button onClick={()=> deleteImg(selectedImg)} >DELETE</button>   
            </div>
            <img src={selectedImg} alt="enlarged pic"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
        </div>
    )
}

export default Modal;