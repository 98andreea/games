import React, { useState } from "react";
import Layout from "../Layout";

const MIN_AGE = 3;
const MAX_AGE = 18;
const MIN_RAITING = 1;
const MAX_RAITING = 10;
const DEFAULT_MODE = "singleplayer";

export default function PCGames() {
  const [gameName, setGameName] = useState("");
  const [gameMode, setGameMode] = useState(DEFAULT_MODE);
  const [age, setAge] = useState("");
  const [gameRating, setGameRating] = useState("");
  const [errors, setErrors] = useState({
    gameName: "",
    age: "",
    gameRating: "",
  });

  const [showForm, setShowForm] = useState(false);
  const [pcGamesList, setpcGamesList] = useState(() => {
    const savedGames = localStorage.getItem("pcGamesList");
    return savedGames ? JSON.parse(savedGames) : [];
  });

  const [highlightedSingleIndex, setHighlightedSingleIndex] = useState(null);
  const [highlightedMultiIndex, setHighlightedMultiIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { ...errors };

    //validari
    if (!gameName || gameName.trim().length < 1) {
      newErrors.gameName = "The game must have at least 1 letter";
    } else {
      newErrors.gameName = "";
    }

    if (!age || age < MIN_AGE || age > MAX_AGE) {
      newErrors.age = `Age must be between ${MIN_AGE} and ${MAX_AGE}`;
    } else {
      newErrors.age = "";
    }

    if (
      !gameRating ||
      Number(gameRating) < MIN_RAITING ||
      Number(gameRating) > MAX_RAITING
    ) {
      newErrors.gameRating = `Rating must be between ${MIN_RAITING} and ${MAX_RAITING}`;
    }

    setErrors(newErrors);

    if (!newErrors.gameName && !newErrors.age && !newErrors.gameRating) {
      const newGame = {
        gameName,
        gameMode,
        age,
        gameRating: Number(gameRating),
      };

      // Adaug jocul și sortez lista generală
      const updatedList = [...pcGamesList, newGame].sort(
        (a, b) => b.gameRating - a.gameRating
      );

      // Salvează în localStorage
      setpcGamesList(updatedList);
      localStorage.setItem("pcGamesList", JSON.stringify(updatedList));

      // Filtrare doar pentru modul în care a fost adăugat jocul
      const filteredList = updatedList.filter(
        (game) => game.gameMode === newGame.gameMode
      );

      // Caută indexul noului joc în lista filtrată
      const newFilteredIndex = filteredList.findIndex(
        (game) =>
          game.gameName === newGame.gameName &&
          game.age === newGame.age &&
          game.gameRating === newGame.gameRating &&
          game.gameMode === newGame.gameMode
      );

      // Setează indexul corect pentru lista respectivă
      if (newGame.gameMode === "singleplayer") {
        setHighlightedSingleIndex(newFilteredIndex);
        setTimeout(() => setHighlightedSingleIndex(null), 2000);
      } else {
        setHighlightedMultiIndex(newFilteredIndex);
        setTimeout(() => setHighlightedMultiIndex(null), 2000);
      }

      // resetare
      setGameName("");
      setGameMode(DEFAULT_MODE);
      setAge("");
      setGameRating("");
      setShowForm(false);
    }
  };

  return (
    <div className="pcgames" style={{ display: "flex" }}>
      <div style={{ marginLeft: "0px" }}>
        <img
          src="images/Lovepik_com-380603786-gaming-pc-vector-pc-game-cartoon-game-removebg-preview.png"
          style={{
            width: "500px",
            height: "auto",
            marginTop: "80px",
            marginBottom: "20px",
            marginRight: "auto",
          }}
        />
      </div>
      {/* afisare jocuri */}
      <div
        className="game-list"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center",
          paddingTop: "20px",
          width: "100%",
        }}
      >
        {/* Singleplayer Card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              cursor: "default",
            }}
          >
            <img
              src="images/milhouse-simpsons.gif"
              alt="Console"
              style={{
                width: "250px",
                height: "190px",
                borderRadius: "20px",
                cursor: "default",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                border: "3px solid #2d3748",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            />
            <p
              style={{
                fontWeight: "bold",
                marginTop: "10px",
                fontSize: "18px",
                backgroundColor: "#1f2937",
                color: "#fff",
                padding: "8px 12px",
                borderRadius: "8px",
              }}
            >
              Singleplayer
            </p>
          </div>
          {/* Afișarea jocurilor pe categorii */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              flexWrap: "wrap",
              marginTop: "10px",
            }}
          >
            {/* Singleplayer */}
            <div>
              {pcGamesList
                .filter((game) => game.gameMode === "singleplayer")
                .sort((a, b) => b.gameRating - a.gameRating)
                .map((game, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor:
                        highlightedSingleIndex === index ? "yellow" : "#4a5568",
                      color:
                        highlightedSingleIndex === index ? "black" : "white",
                      padding: "15px",
                      borderRadius: "8px",
                      marginBottom: "10px",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
                      width: "260px",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    <p>
                      <strong>Name:</strong> {game.gameName}
                    </p>
                    <p>
                      <strong>Age:</strong> {game.age}+
                    </p>
                    <p>
                      <strong>Rating:</strong> {game.gameRating}/10
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Multiplayer Card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              cursor: "default",
            }}
          >
            <img
              src="images/FFUS.gif"
              alt="Console"
              style={{
                width: "250px",
                height: "190px",
                borderRadius: "20px",
                cursor: "default",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                border: "3px solid #2d3748",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            />
            <p
              style={{
                fontWeight: "bold",
                marginTop: "10px",
                fontSize: "18px",
                backgroundColor: "#1f2937",
                color: "#fff",
                padding: "8px 12px",
                borderRadius: "8px",
              }}
            >
              Multiplayer
            </p>
          </div>
          {/* Afișarea jocurilor pe categorii */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              flexWrap: "wrap",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            {/* Multiplayer */}
            <div>
              {pcGamesList
                .filter((game) => game.gameMode === "multiplayer")
                .sort((a, b) => b.gameRating - a.gameRating)
                .map((game, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor:
                        highlightedMultiIndex === index ? "yellow" : "#4a5568",
                      color:
                        highlightedMultiIndex === index ? "black" : "white",
                      padding: "15px",
                      borderRadius: "8px",
                      marginBottom: "10px",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
                      width: "260px",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    <p>
                      <strong>Name:</strong> {game.gameName}
                    </p>
                    <p>
                      <strong>Age:</strong> {game.age}+
                    </p>
                    <p>
                      <strong>Rating:</strong> {game.gameRating}/10
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "200px" }}>
        {/* buton adaugare sectiune joc */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gray-800 text-white p-2 rounded"
          style={{ cursor: "pointer" }}
        >
          Add a game +
        </button>

        {/* adaugare joc */}
        {showForm && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#1f2937",
              padding: "20px",
              borderRadius: "8px",
              color: "white",
              zIndex: 1000,
              width: "400px",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Titlul formularului */}
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              Add a Game
            </h2>

            {/* Buton X în casetă */}
            <button
              onClick={() => setShowForm(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "#4B5563",
                border: "none",
                color: "white",
                fontSize: "20px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              X
            </button>
            <form onSubmit={handleSubmit}>
              {/* game name */}
              <div>
                <label htmlFor="gameName">Game name*</label>
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
                <label htmlFor="gameMode">Game mode*</label>
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
                <label htmlFor="age">Age*</label>
                <select
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full p-2 mt-2 bg-white text-black"
                >
                  <option value="">Select age</option>
                  {Array.from(
                    { length: MAX_AGE - MIN_AGE + 1 },
                    (_, i) => i + MIN_AGE
                  ).map((age) => (
                    <option key={age} value={age}>
                      {age}+
                    </option>
                  ))}
                </select>
                {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
              </div>

              {/* raiting*/}
              <div>
                <label htmlFor="gameRating">Game rating*</label>
                <select
                  id="gameRating"
                  value={gameRating}
                  onChange={(e) => setGameRating(e.target.value)}
                  className="w-full p-2 mt-2 bg-white text-black"
                >
                  <option value="">Select game rating</option>
                  {Array.from(
                    { length: MAX_RAITING - MIN_RAITING + 1 },
                    (_, i) => i + MIN_RAITING
                  ).map((gameRating) => (
                    <option key={gameRating} value={gameRating}>
                      {gameRating}
                    </option>
                  ))}
                </select>
                {errors.gameRating && (
                  <p style={{ color: "red" }}>{errors.gameRating}</p>
                )}

                {/* {button add game */}
                <div>
                  <button
                    onClick={pcGamesList}
                    type="submit"
                    className="bg-green-500 text-white p-2 rounded mt-4"
                  >
                    Add game
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
