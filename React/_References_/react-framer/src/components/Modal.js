import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'




const backDrop = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0,
    }
}

const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "100%",
        opacity: 1,

        transition: {
            delay: .5,
        }
    }
}

const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <GoBackHome
                    variants={backDrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >

                    <ModalDiv
                        variants={modal}
                        className="modal"
                    >
                        <p>Want to make another pizza?</p>
                        <button onClick={() => { window.location.href = "/" }}>Start Again</button>
                        {/* <button onClick={() => { window.location.reload() }}>Start Again</button> */}
                    </ModalDiv>

                </GoBackHome>
            )}
        </AnimatePresence>
    )
}


const GoBackHome = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10,10,26,.5);
    z-index: 1;
`

const ModalDiv = styled(motion.div)`
    max-width: 400px;
    margin: 0 auto;
    padding: 5rem 1.5rem;
    background: white;
    border-radius: 5px;
    text-align: center;


    p {
        color: #444;
        font-weight: bold;
    }
    button {
        color: #444;
        border-color: #444;
        font-weight: bold;
        margin-top: 20px;

    }
`


export default Modal;