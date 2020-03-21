import * as React from "react";
import CustomTable from "./CustomTable";

const customData = [
  { id: 1, name: "Daniel", surname: "Afonso" },
  { id: 2, name: "John", surname: "Doe" }
];
const App = () => (
  <div>
    <h1>Remote Component</h1>
    <CustomTable data={customData} />
  </div>
);

export default App;
