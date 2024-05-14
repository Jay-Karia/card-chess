export function getChessPiece(card) {
    let piece
    let row = null

    const pieceFaceMap = {
        "10": "knight",
        "J": "bishop",
        "Q": "queen",
        "K": "king",
        "A": "rook"
    }

    if ("23456789".includes(card.face)) {
        piece = "pawn"
        const ascii = 65 + "23456789".indexOf(card.face)
        row = String.fromCharCode(ascii)
    } else {
        piece = pieceFaceMap[card.face]
    }

    const chessPiece = {
        piece,
        row
    }

    return chessPiece
}