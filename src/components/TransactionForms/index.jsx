import { useState } from "react";

const TransactionForms = () => {
  cosnt[(description, setDescription)] = useState();
  const [amount, setAmount] = useState(0.0);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter a Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="00.00"
          step={0.01}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Add Transaction</button>
      </form>
    </div>
  );
};
export default TransactionForms;
