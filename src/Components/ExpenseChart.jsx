import {VictoryPie, VictoryLabel} from "victory"
function ExpenseChart() {
  return (
    <VictoryPie
    colorScale={["#e74c3c", "#2ecc71"]}
  data={[
    { x: "Gastos", y: 35 },
    { x: "Ingresos", y: 40 },
  ]}
  animate={{
    duration: 200
  }}
  labels={({datum}) => datum.y} 
  labelComponent={<VictoryLabel
  angle={45}
  style={{
    fill: "white",
  }}
  />}
/>
  )
}

export default ExpenseChart
