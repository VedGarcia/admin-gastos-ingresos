
import { useGlobalState } from "../../Context/GlobalState"

const Balance = () => {

 const data = useGlobalState()
    return (
        <div>
            <h3>Balance {data.total}</h3>
            {JSON.stringify(data)}
        </div>
    )
}

export default Balance