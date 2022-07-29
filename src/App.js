import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "@fontsource/ubuntu"
function App() {
  return (
    <Routes>
      <Route path="/" exact index element={<Index/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>)
}

export default App;
