import {CardType, FaceType, SuitType} from "@/types/Card";

export function getRandomCard() {

    const faces: FaceType[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const suits: SuitType[] = ['spades', 'diamonds', 'clubs', 'hearts']

    const face = faces[Math.trunc(Math.random() * faces.length)];
    const suit = suits[Math.trunc(Math.random() * suits.length)]

    const card: CardType = {
        face,
        suit
    }

    return card
}