import {FinalCardType} from "@/types/Card";
import {ChessPieceType, PieceType, RowType} from "@/types/ChessPeice";

export function getChessPiece(card: FinalCardType) {
    let piece: PieceType
    let row: RowType = null

    const pieceFaceMap: {
        [key: string]: PieceType
    } = {
        "10": "knight",
        "J": "bishop",
        "Q": "queen",
        "K": "king",
        "A": "rook"
    }

    if ("23456789".includes(card.face)) {
        piece = "pawn"
        const ascii = 65 + "23456789".indexOf(card.face)
        // @ts-ignore
        row = String.fromCharCode(ascii)
    } else {
        piece = pieceFaceMap[card.face]
    }

    const chessPiece: ChessPieceType = {
        piece,
        row
    }

    return chessPiece
}