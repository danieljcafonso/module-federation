import * as React from "react";
const RemoteTable = React.lazy(() => import("remote/Table"));

const customData = [
  { id: 1, name: "Daniel Host", surname: "Afonso Host" },
  { id: 2, name: "John", surname: "Doe" }
];

const App = () => (
  <div>
    <h1>Host</h1>
    <React.Suspense fallback="Loading Remote Table">
      <RemoteTable data={customData} />
    </React.Suspense>
  </div>
);

export default App;
