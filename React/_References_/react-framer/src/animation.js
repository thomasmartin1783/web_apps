
export const pageAnimation = {
    hidden: { x: '100vw' },
    visible: { x: 0 },
    transition: { type: 'spring', delay: .4, stiffness: 120 },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}


export const liScale = {
    hover: {
        scale: 1.3,
        originX: 0,
        transition: {
            type: 'spring',
            stiffness: 300
        }
    },
}


export const hoverPulse = {
    hover: {
        scale: 1.02,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",

        transition: {
            duration: .3,
            yoyo: Infinity
        }
    }
}