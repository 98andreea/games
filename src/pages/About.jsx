export default function About() {
  return (
    <div style={{ display: "flex" }}>
      <div
        className="about"
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "0 30px",
          gap: "40px",
        }}
      >
        <img
          src="images/ce378e61a14e51417def4f7d151be43e-removebg-preview.png"
          alt="icon stanga"
          style={{ width: "150px", marginRight: "25px", paddingtop: "20px" }}
        />
        <img
          src="images/GAMES-TITLE.png"
          alt="Tilu site"
          style={{ width: "250px" }}
        />
      </div>
      <div
        style={{ marginTop: "50px", marginRight: "50px", marginLeft: "50px" }}
      >
        <div
          style={{
            // maxWidth: "800px",
            fontSize: "20px",
            color: "#1f2937",
            marginBottom: "40px",
            textAlign: "center",
            margin: "0 auto",
            gap: "40px",
            fontWeight: "bold",
            paddingBottom: "50px",
          }}
        >
          <h1>
            Discover games that are suitable for either a relaxing evening
            alone, or for maximum fun with your loved ones, either online, or at
            parties!
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px", // distanță egală între GIF-uri
            flexWrap: "wrap",
            paddingTop: "50px",
          }}
        >
          {" "}
          {/* GIF 1 - Boardgames */}
          <a
            href="/boardgames"
            style={{ textAlign: "center", textDecoration: "none" }}
          >
            <img
              src="images/084bdf8b5ef6678ff0e787e50094f27f.jpg"
              alt="Boardgames"
              style={{
                width: "300px",
                height: "190px",
                borderRadius: "20px",
                cursor: "pointer",
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
                backgroundColor: "#1f2937", // echivalent Tailwind: bg-gray-800
                color: "#fff",
                padding: "8px 12px",
                borderRadius: "8px",
              }}
            >
              Boardgames
            </p>
          </a>
          {/* GIF 2 - Consoles */}
          <a
            href="/consoles"
            style={{ textAlign: "center", textDecoration: "none" }}
          >
            <img
              src="images/d4efc0f072a55e5ebd0a9946f9536a94.gif"
              alt="Console"
              style={{
                width: "300px",
                height: "190px",
                borderRadius: "20px",
                cursor: "pointer",
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
              Consoles
            </p>
          </a>
          {/* GIF 3 - PC Games */}
          <a
            href="/pcgames"
            style={{ textAlign: "center", textDecoration: "none" }}
          >
            <img
              src="images/9070324cdfc07c68d60eed0c39e77573.gif"
              alt="PC Games"
              style={{
                width: "300px",
                borderRadius: "20px",
                cursor: "pointer",
                height: "190px",
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
              PC Games
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
