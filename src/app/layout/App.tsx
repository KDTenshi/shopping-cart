import type { FC } from "react";

import "../style/App.css";
import { List } from "../../components/List";

const App: FC = () => {
  return (
    <div className="App">
      <List />
    </div>
  );
};

export default App;
