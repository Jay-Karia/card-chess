export type PieceType = 'rook' | 'knight' | 'bishop' | 'queen' | 'king' | 'pawn'
export type RowType = null | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'

export type ChessPieceType = {
    piece? : PieceType,
    row? : RowType
}