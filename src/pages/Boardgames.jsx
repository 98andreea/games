import React, { useState } from "react";
import Layout from "../Layout";

export default function Boardgames() {
  const [gameName, setGameName] = useState("");
  const [gameMode, setGameMode] = useState("Singleplayer");
  const [age, setAge] = useState("");
  const [gameRating, setGameRating] = useState("");
  const [gameDescription, setgameDescription] = useState("");
  const [errors, setErrors] = useState({
    gameName: "",
    age: "",
    gameRating: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [gameList, setGameList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { ...errors };

    //validari
    if (!gameName || gameName.length < 1) {
      newErrors.gameName = "The game must have at least 1 letter";
    } else {
      newErrors.gameName = "";
    }

    if (!age || age < 3 || age > 99) {
      newErrors.age = "Age must be between 3 and 99";
    } else {
      newErrors.age = "";
    }

    if (!gameRating || gameRating < 1 || gameRating > 10) {
      newErrors.gameRating = "Raiting mus be between 1 and 10";
    }

    setErrors(newErrors);

    if (!newErrors.gameName && !newErrors.age && !newErrors.gameRating) {
      setGameList([
        ...gameList,
        { gameName, gameMode, age, gameRating, gameDescription },
      ]);

      //resetare campuri pt joc nou
      setGameName("");
      setGameMode("Singleplayer");
      setAge("");
      setGameRating("");
      setGameDescription("");
      setShowForm(false); //inchidere formular
    }
  };

  return (
    <div className="boardgames">
      <img
        src="images/10069030-removebg-preview.png"
        style={{
          width: "400px",
          height: "auto",
          marginTop: "80px",
          marginBottom: "20px",
          marginRight: "auto",
          marginLeft: "20px",
        }}
      />
      {/* buton adaugare sectiune joc */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-gray-800 text-white p-2 rounded"
      >
        +
      </button>
      {/* adaugare joc */}
      {showForm && (
        <div className="bg-gray-800 p-4 mt-4 text-white rounded">
          <form onSubmit={handleSubmit}>
            {/* game name */}
            <div>
              <label htmlFor="gameName">Game name</label>
              <input
                type="text"
                id="gameName"
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
                className="w-full p-2 mt-2 bg-white text-black"
              />
              {errors.gameName && (
                <p style={{ color: "red" }}>{errors.gameName}</p>
              )}
            </div>
            {/*game mode*/}
            <div>
              <label htmlFor="gameMode">Game mode</label>
              <select
                id="gameMode"
                value={gameMode}
                onChange={(e) => setGameMode(e.target.value)}
                className="w-full p-2 mt-2 bg-white text-black"
              >
                <option value="singleplayer">Singleplayer</option>
                <option value="multiplayer">Multiplayer</option>
              </select>
              {errors.gameMode && (
                <p style={{ color: "red" }}>{errors.gameMode}</p>
              )}
            </div>
            {/* age */}
            <div>
              <label htmlFor="age">Age</label>
              <select
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-2 mt-2 bg-white text-black"
              >
                <option value="">Select age</option>
                {Array.from({ length: 97 }, (_, i) => i + 3).map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
              {errors.age && <p style={{ color: "red" }}>{errors.aq}</p>}
            </div>

            {/* raiting*/}
            <div>
              <label htmlFor="gameRating">Game rating</label>
              <select
                id="gameRating"
                value={gameRating}
                onChange={(e) => setGameRating(e.target.value)}
                className="w-full p-2 mt-2 bg-white text-black"
              >
                <option value="">Select game rating</option>
                {Array.from({ length: 10 }, (_, i) => i + 1).map(
                  (gameRating) => (
                    <option key={gameRating} value={gameRating}>
                      {gameRating}
                    </option>
                  )
                )}
              </select>
              {errors.age && <p style={{ color: "red" }}>{errors.aq}</p>}

              {/* gameDescription*/}
              <div>
                <label htmlFor="gameDescription">Game Description*</label>
                <input
                  type="text"
                  id="gameDescription"
                  value={gameDescription}
                  onChange={(e) => setGameDescription(e.target.value)}
                  className="w-full p-2 mt-2 bg-white text-black"
                />
                {errors.gameDescription && (
                  <p style={{ color: "red" }}>{errors.gameDescription}</p>
                )}
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
