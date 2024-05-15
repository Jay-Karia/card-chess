'use client'

import '@/components/components.css'
import React from 'react'

import { ImHeart } from 'react-icons/im'
import { ImClubs } from 'react-icons/im'
import { ImSpades } from 'react-icons/im'
import { ImDiamonds } from 'react-icons/im'
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
        <div className='h-full w-full'>
          <Image src={card.image} alt="card image" width={150} height={100} className='h-full w-full'/>
        </div>
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
