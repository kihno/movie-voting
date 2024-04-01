import Vote from "./Vote"

const Voting = ({winner, pair, vote, hasVoted}) => {
    return(
        <div>
            {winner ?
                <div className="winner">Winner is {winner}</div> :
                <Vote pair={pair} vote={vote} hasVoted={hasVoted} />
            }
        </div>
    )
}

export default Voting