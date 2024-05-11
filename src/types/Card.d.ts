export type FaceType = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'
export type SuitType = 'spades' | 'diamonds' | 'clubs' | 'hearts'

export type CardType = {
    face?: FaceType,
    suit?: SuitType,
}

export type FinalCardType = {
    face: FaceType,
    suit: SuitType
}