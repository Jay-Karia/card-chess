"use client"

import { Button } from '@/components/ui/button'
import Card from '@/components/card'
import ChessPiece from '@/components/chess-piece'

import { getRandomCard } from '@/lib/getRandomCard'
import { getChessPiece } from '@/lib/getChessPiece'
import { useState } from 'react'

export default function Home() {
    const [card, setCard] = useState({})
    const [chessPiece, setChessPiece] = useState({})

    const handleRandom = () => {
        const newCard = getRandomCard()
        setCard(newCard)
        // @ts-ignore
        setChessPiece(getChessPiece(newCard))
    }

    return (
        <div className={"flex flex-col items-center justify-center"}>
            <div className={"h-max sm:m-10 m-5 flex sm:flex-nowrap flex-wrap gap-10 items-center justify-center"}>
                <Card card={card}/>
                <ChessPiece chessPiece={chessPiece}/>
            </div>
            <Button onClick={handleRandom}>Random</Button>
        </div>
    );
}
