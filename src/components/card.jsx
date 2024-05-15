'use client'

import '@/components/components.css'
import React from 'react'

import { ImHeart } from 'react-icons/im'
import { ImClubs } from 'react-icons/im'
import { ImSpades } from 'react-icons/im'
import { ImDiamonds } from 'react-icons/im'
import { FaQuestion } from 'react-icons/fa'
import Image from 'next/image'

export default function Card({ card }) {
  const suitMap = {
    spades: <ImSpades />,
    diamonds: <ImDiamonds color={'#ff0000'} />,
    clubs: <ImClubs />,
    hearts: <ImHeart color={'#ff0000'} />,
  }

  return (
    <div className={'card-container flex flex-col'}>
      {card.face ? (
        <>
          <div className={'p-2 w-max h-max absolute'}>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {card.face}
            </h1>
          </div>
          <div className={'p-10 w-full h-full flex justify-center'}>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {suitMap[card.suit]}
            </h1>
          </div>
        </>
      ) : (
        <div className="h-full w-full">
          <Image
            src="/backImage.png"
            alt="Image"
            height={100}
            width={100}
            className="h-full w-full"
          />
        </div>
      )}
    </div>
  )
}
