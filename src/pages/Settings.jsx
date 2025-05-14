import { useContext } from "react";
import { FontContext } from "../components/Font";

export default function Settings() {
  const { fontFamily, setFontFamily } = useContext(FontContext);

  const handleChange = (e) => setFontFamily(e.target.value);

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
        className="border p-2 rounded"
      >
        <option value="Arial">Arial</option>
        <option value="Courier New">Courier New</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Comic Sans MS">Comic Sans</option>
      </select>
    </div>
  );
}
