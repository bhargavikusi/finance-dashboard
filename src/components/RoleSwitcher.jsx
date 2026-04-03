import { useState } from "react";

/**export default function RoleSwitcher() {
  const [role, setRole] = useState("viewer");*/

  export default function RoleSwitcher({ role, setRole }) {
  return (
    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="admin">Admin</option>
      <option value="viewer">Viewer</option>
    </select>
  );
}