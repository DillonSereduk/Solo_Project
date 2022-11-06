import "./Form.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import MeatForm from "./components/MeatForm";
import EditMeat from "./components/EditMeat";
import OneMeat from "./components/OneMeat";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path="/new" element={<MeatForm />} />
          <Route path="/edit/:id" element={<EditMeat />} />
          <Route path="/meat/:id" element={<OneMeat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
