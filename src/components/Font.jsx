// import { createContext, useEffect, useState } from "react";
// import React from "react";

// export const FontContext = createContext();

// export default function Font({ children }) {
//   const [fontFamily, setFontFamily] = useState(() => {
//     return localStorage.getItem("fontFamily") || "Arial";
//   });

//   useEffect(() => {
//     localStorage.setItem("fontFamily", fontFamily);
//   }, [fontFamily]);

//   return (
//     <FontContext.Provider value={{ fontFamily, setFontFamily }}>
//       <div style={{ fontFamily }}>{children}</div>
//     </FontContext.Provider>
//   );
// }
