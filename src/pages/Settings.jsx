import { useContext } from "react";
import { FontContext } from "../components/Font";
import { ThemeContext } from "../components/LightDark";

export default function Settings() {
  const { fontFamily, setFontFamily } = useContext(FontContext);

  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = (e) => setFontFamily(e.target.value);

  const handleThemeChange = (e) => setTheme(e.target.value);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <label htmlFor="fontSelect" className="block mb-2">
        Choose font:
      </label>
      <select
        id="fontSelect"
        value={fontFamily}
        onChange={handleChange}
        className="border p-2 rounded-xl shadow-sm"
        style={{
          backgroundColor: "oklch(44.3% 0.11 240.79)",
          color: "oklch(98% 0 0)",
          borderColor: "oklch(72% 0.12 60)",
        }}
      >
        <option value="Arial">Arial</option>
        <option value="Courier New">Courier New</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Comic Sans MS">Comic Sans</option>
      </select>

      <label
        htmlFor="fontSelect"
        className="block mb-2"
        style={{ paddingTop: "20px" }}
      >
        Light/Dark:
      </label>
      <select
        id="themeSelect"
        value={theme}
        onChange={handleThemeChange}
        className="border p-2 rounded-xl shadow-sm"
        style={{
          backgroundColor: "oklch(44.3% 0.11 240.79)",
          color: "oklch(98% 0 0)",
          borderColor: "oklch(72% 0.12 60)",
        }}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
