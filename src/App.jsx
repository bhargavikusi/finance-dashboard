import { useState, useEffect } from "react";
import RoleSwitcher from "./components/RoleSwitcher";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";

function App() {
  
  const [transactions, setTransactions] = useState([
    { date: "2026-03-01", amount: 5000, category: "Salary", type: "income" },
    { date: "2026-03-02", amount: 200, category: "Food", type: "expense" },
    { date: "2026-03-03", amount: 1000, category: "Freelance", type: "income" },
    { date: "2026-03-04", amount: 300, category: "Shopping", type: "expense" },
  ]);

  
  const [role, setRole] = useState("viewer");

  
  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      setTransactions(JSON.parse(saved));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Finance Dashboard</h1>
          <RoleSwitcher role={role} setRole={setRole} />
        </div>

        {/* Cards */}
        <SummaryCards transactions={transactions} />

        {/* Charts + Insights */}
        <div className="grid md:grid-cols-2 gap-6">
          <Charts transactions={transactions} />
          <Insights transactions={transactions} />
        </div>

        {/* Transactions */}
        <Transactions
          transactions={transactions}
          role={role}
          setTransactions={setTransactions}
        />

      </div>
    </div>
  );
}

export default App;