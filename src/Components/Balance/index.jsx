import { useGlobalState } from "../../context/GloblaState";
function Balance() {
  const data = useGlobalState();
  return (
    <div>
      <h1 className="text-xl font-bold">Balance</h1>
      <div>
            {JSON.stringify(data)}
      </div>
    </div>
  );
}

export default Balance;
