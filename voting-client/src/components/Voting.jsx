const Voting = ({pair}) => {
    const getPair = () => {
        return pair || []
    }

    return(
        <div className="voting">
            {getPair().map((entry, index) =>
                <button key={index}>
                    <h1>{entry}</h1>
                </button>
            )}
        </div>
    )
}

export default Voting