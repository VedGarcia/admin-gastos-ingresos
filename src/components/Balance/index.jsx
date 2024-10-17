import { useGlobalstate } from "../../Context/GlobalState"
const Balance = () => {
 const data = useGlobalstate()
    return (
        <div>
            <h3>Balance {data.total}</h3>
            
        </div>
    )
}

export default Balance