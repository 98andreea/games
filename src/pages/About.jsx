export default function About() {
  return (
    <div
      className="about"
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "70vh",
        backgroundColor: "#fff",
        padding: "0 50px",
      }}
    >
      {/*poza din stanga */}
      <div
        style={{
          backgroundImage:
            "url('images/8382e9c6f61d4f6569808b4bb62a4ce9-removebg-preview.png')",
          backgroundSize: "cover",
          backgroundPosition: "left",
          width: "250px",
          height: "auto",
          objectFit: "contain",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: "150px",
          left: "400px",
          paddingLeft: "110px",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "60px",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <span style={{ color: "#FF69B4" }}>G</span>
          <span style={{ color: "#FFD700" }}>A</span>
          <span style={{ color: "#89CFF0" }}>M</span>
          <span style={{ color: "#8A2BE2" }}>E</span>
          <span style={{ color: "#DDA0DD" }}>S</span>
        </h1>

        <p>
          descoperă jocuri care se potrivesc fie pentru o seară relaxantă
          singur, fie pentru distracție maximă alături de cei dragi, fie online,
          fie la petreceri!
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
            marginTop: "40px",
          }}
        >
          {/* GIF 1 - Boardgames */}
          <div style={{ textAlign: "center" }}>
            <img
              src="images/084bdf8b5ef6678ff0e787e50094f27f.jpg" // Calea către GIF-ul pentru boardgames
              alt="Boardgames"
              style={{
                width: "200px",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                border: "3px solid #000", // Animație pentru transformare și umbră
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)"; // Crește imaginea
                e.target.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)"; // Adaugă umbră
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)"; // Revine la dimensiunea normală
                e.target.style.boxShadow = "none"; // Îndepărtează umbra
              }}
            />
            <p
              style={{
                fontWeight: "bold",
                marginTop: "10px",
                fontSize: "18px",
                color: "#fff",
              }}
            >
              Boardgames
            </p>
          </div>

          {/* GIF 2 - Console */}
          <div style={{ textAlign: "center" }}>
            <img
              src="images/d4efc0f072a55e5ebd0a9946f9536a94.gif" // Calea către GIF-ul pentru consolă
              alt="Console"
              style={{
                width: "200px",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                border: "3px solid #fff", // Animație pentru transformare și umbră
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)"; // Crește imaginea
                e.target.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)"; // Adaugă umbră
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)"; // Revine la dimensiunea normală
                e.target.style.boxShadow = "none"; // Îndepărtează umbra
              }}
            />
            <p
              style={{
                fontWeight: "bold",
                marginTop: "10px",
                fontSize: "18px",
                color: "#fff",
              }}
            >
              Consoles
            </p>
          </div>

          {/* GIF 3 - PC Games */}
          <div style={{ textAlign: "center" }}>
            <img
              src="images/9070324cdfc07c68d60eed0c39e77573.gif" // Calea către GIF-ul pentru PC games
              alt="PC Games"
              style={{
                width: "200px",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // Animație pentru transformare și umbră
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)"; // Crește imaginea
                e.target.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)"; // Adaugă umbră
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)"; // Revine la dimensiunea normală
                e.target.style.boxShadow = "none"; // Îndepărtează umbra
              }}
            />
            <p
              style={{
                fontWeight: "bold",
                marginTop: "10px",
                fontSize: "18px",
                color: "#fff",
              }}
            >
              PC Games
            </p>
          </div>
          {/*poza din dreapta */}
          <div
            style={{
              flex: 1,
              backgroundImage:
                "url('images/ce378e61a14e51417def4f7d151be43e-removebg-preview.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "250px",
              height: "auto",
              objectFit: "contain",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
