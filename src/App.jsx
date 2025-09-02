import { useState } from "react";
const mugiwara = ["Luffy", "Zoro", "Nami", "Sanji", "Usopp", "Chopper", "Robin", "Franky", "Brook", "Jinbe"];

function App() {
  const [newMember, setNewMember] = useState("")
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
            <form>
              <input type="text"
                name="newMember"
                id="newMember"
                placeholder="nuovo membro"
                value={newMember}
                onChange={(e) => setNewMember(e.target.value)}
              />
              <button className="btn btn-primary">Aggiungi</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
