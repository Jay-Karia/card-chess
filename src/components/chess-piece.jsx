'use client'

import '@/components/components.css'

import { GiChessQueen } from 'react-icons/gi'
import { GiChessKing } from 'react-icons/gi'
import { GiChessBishop } from 'react-icons/gi'
import { GiChessKnight } from 'react-icons/gi'
import { GiChessRook } from 'react-icons/gi'
import { GiChessPawn } from 'react-icons/gi'
import { PiEmptyBold } from 'react-icons/pi'
import Image from 'next/image'

export default function ChessPiece({ chessPiece }) {
  const pieceMap = {
    king: <GiChessKing color={'#0c3f91'} />,
    queen: <GiChessQueen color={'#0c3f91'} />,
    pawn: <GiChessPawn color={'#0c3f91'} />,
    rook: <GiChessRook color={'#0c3f91'} />,
    bishop: <GiChessBishop color={'#0c3f91'} />,
    knight: <GiChessKnight color={'#0c3f91'} />,
  }

  return (
    <div className={'card-container flex justify-center items-center flex-col'}>
      {chessPiece.piece ? (
        <>
          <div className={'w-max h-max'}>
            <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-8xl">
              {pieceMap[chessPiece.piece]}
            </h1>
          </div>
          {chessPiece.piece === 'pawn' && (
            <div className={'h-max'}>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {chessPiece.row}
              </h4>
            </div>
          )}
        </>
      ) : (
        <div className="h-full w-full">
          <Image src="/backImage.png" alt="Image" height={100} width={100} className="h-full w-full"/>
        </div>
      )}
    </div>
  )
}
