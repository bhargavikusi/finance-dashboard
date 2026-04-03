export default function Insights({ transactions }) {

  //  Get only expenses
  const expenses = transactions.filter(t => t.type === "expense");

  //  Find highest expense
  const highest = expenses.reduce(
    (max, t) => (t.amount > max.amount ? t : max),
    expenses[0] || {}
  );

  //  Total income & expense (for extra insight)
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = expenses
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="bg-white p-4 rounded-2xl shadow mb-6">
      <h2 className="text-lg font-semibold mb-3">Insights</h2>

      {/*  Highest Spending */}
      <p className="text-gray-600">
        Highest Spending: {highest?.category || "N/A"} (₹{highest?.amount || 0})
      </p>

      {/*  Income vs Expense */}
      <p className="text-gray-600 mt-2">
        Total Income: ₹{income}
      </p>

      <p className="text-gray-600">
        Total Expense: ₹{expense}
      </p>

      {/* Simple observation */}
      <p className="text-gray-600 mt-2">
        {income > expense
          ? "You are saving money "
          : "Your expenses are higher "}
      </p>
    </div>
  );
}