import { useState } from "react";

export default function Transactions({ transactions, role }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  //  filtering logic
  const filteredData = transactions.filter((t) => {
    const matchesSearch = t.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ? true : t.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white p-4 rounded-2xl shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Transactions</h2>

      {/* Admin Button */}
      {role === "admin" && (
        <button className="bg-blue-500 text-white px-4 py-2 mb-4 rounded">
          Add Transaction
        </button>
      )}

      {/* Search */}
      <input
        type="text"
        placeholder="Search category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-2 w-full"
      />

      {/* Filter */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 mb-4 w-full"
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b text-left">
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((t, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td>{t.date}</td>

              <td
                className={
                  t.type === "income"
                    ? "text-green-600 font-medium"
                    : "text-red-500 font-medium"
                }
              >
                ₹{t.amount}
              </td>

              <td>{t.category}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}