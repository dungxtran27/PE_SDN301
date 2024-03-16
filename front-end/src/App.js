import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./component/List";
import Add from "./component/Add";
import Edit from "./component/Edit";
import Detail from "./component/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
