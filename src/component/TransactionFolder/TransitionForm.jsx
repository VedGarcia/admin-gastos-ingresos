import { useState } from "react"
import { useGlobalState } from "../../conten/GlobalState";

function TransitionForm() {
    const {addTransaction} = useGlobalState()
    const [description, setDescription] = useState();
    const [amount, setAmount] = useState(0)
    
    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
          id: window.crypto.randomUUID(),
          description,
          amount: +amount,
        });
      };


  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="descripcion" onChange={(e) => setDescription(e.target.value)}/>
            <input type="number" step="0.1" placeholder="00.00" onChange={(e) => setAmount(e.target.value)}/>
            <button>
                add transactions 
            </button>
        </form>
    </div>
  )
}

export default TransitionForm