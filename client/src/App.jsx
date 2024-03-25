
function App() {
  const movies = [
    {
      name: 'Snatch',
      img: 'https://occ-0-3934-3211.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVJgO06RKuruJpcyezdM43Ai2ZjvNDmtbnwUXVtvXVhhvpL0tvhr4s9e3j8UojFCLao5a7v8Dg5kti1vFKcA0ldZXWnnC03nBRIt.jpg?r=cbf',
      likes: 10,
      state: true,
    }
  ];

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Movies List</p>
      </header>
      {movies.map(movie => {
        return (
          <div className='movie-box'>
            <div className='movie-box-header'></div>
            <div className='movie-box-body'>
              <img alt={movie.name} className='movie-image' src={movie.img} />
            </div>
            <div className='movie-box-footer'>
              {movie.name}
              <div className='like-button'>
                <i class="fa fa-heart" style={{"color": "red"}}aria-hidden="true"></i>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App
