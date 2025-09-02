const mugiwara = ["Luffy", "Zoro", "Nami", "Sanji", "Usopp", "Chopper", "Robin", "Franky", "Brook", "Jinbe"];

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Mugiwara crew</h1>
          </div>
          <div className="col-12">
            <ul className="list-unstyled">
              {mugiwara.map((member, index) =>
                <li className="crew" key={index}>{member}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
