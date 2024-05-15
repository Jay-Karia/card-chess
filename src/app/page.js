"use client"

import { Button } from '@/components/ui/button'
import Card from '@/components/card'
import ChessPiece from '@/components/chess-piece'

import { getRandomCard } from '@/lib/getRandomCard'
import { getChessPiece } from '@/lib/getChessPiece'

import { useState, useRef } from 'react'

export default function Home() {
    const [card, setCard] = useState({})
    const [chessPiece, setChessPiece] = useState({})
    const audioRef = useRef(null);

    const playAudio = () => {
        audioRef.current.play()
    }

    const handleRandom = async () => {
        playAudio()
        const newCard = await getRandomCard()
        setCard(newCard)
        setChessPiece(getChessPiece(newCard))
    }

    return (
        <div className={"flex flex-col items-center justify-center"}>
             <audio ref={audioRef} src="/clickSound.mp3" />
            <div className={"h-max sm:m-10 m-5 flex sm:flex-nowrap flex-wrap gap-10 items-center justify-center"}>
                <Card card={card}/>
                <ChessPiece chessPiece={chessPiece}/>
            </div>
            <Button onClick={handleRandom}>Random</Button>
        </div>
    );
}
