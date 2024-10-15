import { useState } from "react";

function TransactionForm() {
    const [description, setDescription] = useState()
    const [amount, setAmount] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(description, amount)
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter a Description" 
                onChange={(e) => setDescription(e.target.value)}
            />
            <input type="number" step="0.01" placeholder="00:00" 
                onChange={(e) => setAmount(e.target.value)}
            />
            <button className="bg-white border border-black">
                Add Transaction
            </button>
        </form>
    </div>
  )
}

export default TransactionForm;