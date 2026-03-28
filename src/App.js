import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionnaireModal from "./components/QuestionnaireModal";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <QuestionnaireModal
              open={open}
              handleClose={() => setOpen(false)}
            />
          }
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;