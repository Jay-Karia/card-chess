"use server"

const BASE_API_URL = "https://www.deckofcardsapi.com/api/"

export async function getRandomCard() {

    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const suits = ['spades', 'diamonds', 'clubs', 'hearts']

    const face = faces[Math.trunc(Math.random() * faces.length)];
    const suit = suits[Math.trunc(Math.random() * suits.length)]

    const card = {
        face,
        suit,
    }

    return card
}