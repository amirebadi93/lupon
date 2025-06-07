import { Route, Routes } from "react-router";
import English from "./English";
import Persian from "./Persian";
import Welcome from "./Welcome";
function Router (){
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/English" element={<English />} />
      <Route path="/Persian" element={<Persian />} />
    </Routes>
  );
}
 export default Router;