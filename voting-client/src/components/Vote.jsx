const Vote = ({pair, vote, hasVoted}) => {
    const getPair = () => {
        return pair || []
    }

    const isDisabled = () => {
        return !!hasVoted
    }

    const hasVotedFor = (entry) => {
        return hasVoted === entry
    }

    return(
        <div className="voting">
            {getPair().map((entry) =>
                <button key={entry} 
                    onClick={() => vote(entry)}
                    disabled={isDisabled}
                >
                    <h1>{entry}</h1>
                    {hasVotedFor(entry) ?
                        <div className="label">Voted</div> :
                        null
                    }
                </button>
            )}
        </div>
    )
}

export default Vote