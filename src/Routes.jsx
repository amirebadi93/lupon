import { Route, Routes } from "react-router";
import English from "./English";
import Persian from "./Persian";
function Router (){
  return (
    <Routes>
      <Route path="/English" element={<English />} />
      <Route path="/Persian" element={<Persian />} />
    </Routes>
  );
}
 export default Router;