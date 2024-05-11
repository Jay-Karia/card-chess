"use client"

import "@/components/components.css"
import React, {useEffect} from "react";

import {ImHeart} from "react-icons/im";
import {ImClubs} from "react-icons/im";
import {ImSpades} from "react-icons/im";
import {ImDiamonds} from "react-icons/im";

import {CardType} from "@/types/Card";

interface CardProps {
    card: CardType
}

export default function Card({card}: CardProps) {

    const suitMap = {
        'spades': <ImSpades/>,
        'diamonds': <ImDiamonds color={"#ff0000"}/>,
        'clubs': <ImClubs/>,
        'hearts': <ImHeart color={"#ff0000"}/>
    }

    return (
        <div className={"card-container flex flex-col"}>
            <div className={"p-2 w-max h-max absolute"}>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {card.face}
                </h1>
            </div>
            <div className={"p-10 w-full h-full flex justify-center"}>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {suitMap[card.suit]}
                </h1>
            </div>
        </div>
    )
}