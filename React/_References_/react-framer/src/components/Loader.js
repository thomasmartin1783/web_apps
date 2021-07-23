import React from 'react';
import { motion, useCycle } from 'framer-motion';
import styled from 'styled-components';

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5,
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    },
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
};

const Loader = () => {
    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

    return (
        <>
            <LoaderStyle className="loader"
                variants={loaderVariants}
                animate={animation}
            ></LoaderStyle>
            <div
                onClick={() => cycleAnimation()}
                style={{ cursor: 'pointer' }}
            >
                Change Loader
            </div>
        </>
    )
}

const LoaderStyle = styled(motion.div)`
    width: 10px;
    height: 10px;
    margin: 40px auto;
    border-radius: 50%;
    background: #fff;
`

export default Loader;