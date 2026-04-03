function SummaryCards({ transactions }) {

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <Card title="Balance" value={balance} />
      <Card title="Income" value={income} />
      <Card title="Expenses" value={expense} />
    </div>
  );
}


function Card({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-gray-500">{title}</h2>
      <p className="text-xl font-bold">₹{value}</p>
    </div>
  );
}

export default SummaryCards;