interface Props {
    value: null | string,
    index: number,
    handleSquareClick: (index: number) => void
}

function Square({ value, index, handleSquareClick }: Props) {
    return (
        <button className="button" onClick={() => handleSquareClick(index)}>
            {value}
        </button>
    )
}

export default Square