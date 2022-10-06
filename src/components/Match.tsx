const Match = ({ match }: { match: any }) => {
  const championLevel = match.championData.champLevel;
  const championName = match.championData.championName;
  const kills = match.kda.kills;
  const deaths = match.kda.deaths;
  const assists = match.kda.assists;
  const outcome = match.win;
  const items = match.items;
  const duration = new Date(match.gameDuration * 1000).toISOString().substring(14, 19)

  return (
    <div className={`match ${outcome ? 'win' : 'loss'}`}>
      <div className="champion-cont">
        <div className="champ-img-cont">
          <img src={`../../champion/${championName}.png`} alt={championName} />
        </div>
        <div className="champion">{championName} | Level {championLevel}</div>
      </div>
      <div className="matchdata-cont">
        <div className={`outcome ${outcome ? 'win' : 'loss'}`}>{outcome  ? 'Victory' : 'Loss'}</div>
        <div className="duration">
          {duration}
          <span> min:sec</span>
        </div>
        <div className="kda">
          {kills}/{deaths}/{assists}
          <span> k/d/a</span>
        </div>
        <div className="items">
          {
            items.map((item: { image: string, name: string }, index: any) => (
              item.image ?
              <div className="item" title={item.name} key={index + '-match'}>
                <img src={`../../item/${item.image}`} alt={item.name} />
                <span>{item.name}</span>
              </div>
              : (
                <div className="no-item-image"></div>
              )
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Match;