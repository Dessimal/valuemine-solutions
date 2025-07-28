"use client"


import confetti from "canvas-confetti"

import {useEffect} from 'react'


const emojiParticles = () = {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6},
        shapes: ['text'],
    scalar: 2,
    ticks: 200,
    gravity: 0.5,
    colors: ['#FFD700', '#FF69B4'],
    emojis: ['☀️', '🎉'],
} as any);
};

export const Confetti = () => {
    useEffect(() => {
        emojiParticles();
    }, [])

    return null;
}

