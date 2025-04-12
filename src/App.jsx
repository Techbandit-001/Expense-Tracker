import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ExpenseTable from "./components/ExpenseTable.jsx";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="full-screen bg-gradient-to-br from-white to-orange-700 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <header className="text-center-top">
          <h1 className="text-5xl font-extrabold text-brown-800 mb-2">
            💸 Expense Tracker
          </h1>
          <p className="text-pink-500">
            Track, organize, and take control of your spending.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Expense Form Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg lg:col-span-1">
            <ExpenseForm onAddExpense={handleAddExpense} />
          </div>

          {/* Expense Table Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg lg:col-span-2">
            <SearchBar onSearch={handleSearch} />
            <ExpenseTable expenses={filteredExpenses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
