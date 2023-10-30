import React from 'react';
import { motion } from 'framer-motion';
import './App.css';


const cards = [
    '2_of_clubs.png',
    '3_of_clubs.png',
    '4_of_clubs.png',
    '5_of_clubs.png',
    '6_of_clubs.png',
    '7_of_clubs.png',
    '8_of_clubs.png',
    '9_of_clubs.png',
    '10_of_clubs.png',
    'jack_of_clubs.png',
    'queen_of_clubs.png',
    'king_of_clubs.png',
    'ace_of_clubs.png',
    '2_of_diamonds.png',
    '3_of_diamonds.png',
    '4_of_diamonds.png',
    '5_of_diamonds.png',
    '6_of_diamonds.png',
    '7_of_diamonds.png',
    '8_of_diamonds.png',
    '9_of_diamonds.png',
    '10_of_diamonds.png',
    'jack_of_diamonds.png',
    'queen_of_diamonds.png',
    'king_of_diamonds.png',
    'ace_of_diamonds.png',
    '2_of_hearts.png',
    '3_of_hearts.png',
    '4_of_hearts.png',
    '5_of_hearts.png',
    '6_of_hearts.png',
    '7_of_hearts.png',
    '8_of_hearts.png',
    '9_of_hearts.png',
    '10_of_hearts.png',
    'jack_of_hearts.png',
    'queen_of_hearts.png',
    'king_of_hearts.png',
    'ace_of_hearts.png',
    '2_of_spades.png',
    '3_of_spades.png',
    '4_of_spades.png',
    '5_of_spades.png',
    '6_of_spades.png',
    '7_of_spades.png',
    '8_of_spades.png',
    '9_of_spades.png',
    '10_of_spades.png',
    'jack_of_spades.png',
    'queen_of_spades.png',
    'king_of_spades.png', 
    'ace_of_spades.png'
    
];

function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return "/images/cards/" + cards[randomIndex];
}

function PokerTable() {
    return (
        <div className="poker-table">
            {/* top */}
            <motion.div
                className="player-cards"
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                transition={{ delay: 1 }}
            >
                <img src={getRandomCard()} alt="card" />
                <img src={getRandomCard()} alt="card" />
            </motion.div>

            {/* left */}
            <motion.div
                className="player-cards"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 2 }}
            >
                <img src={getRandomCard()} alt="card" />
                <img src={getRandomCard()} alt="card" />
            </motion.div>

            {/* right */}
            <motion.div
                className="player-cards"
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 3 }}
            >
                <img src={getRandomCard()} alt="card" />
                <img src={getRandomCard()} alt="card" />
            </motion.div>

            {/* bottom */}
            <motion.div
                className="player-cards"
                initial={{ y: '100vh' }}
                animate={{ y: 0 }}
                transition={{ delay: 4 }}
            >
                <img src={getRandomCard()} alt="card" />
                <img src={getRandomCard()} alt="card" />
            </motion.div>
        </div>
    );
}

export default PokerTable;
