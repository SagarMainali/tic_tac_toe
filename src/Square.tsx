interface Props {
    value: null | string
}

function Square({ value }: Props) {
    return (
        <button className="button">
            {value}
        </button>
    )
}

export default Square