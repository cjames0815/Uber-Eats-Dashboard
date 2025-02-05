import DetailedOrder from ".modules/DetailedOrder";
import Orders from "./modules/Orders";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path=""element={<DetailedOrder/>}/>
        </Routes>

    );
}

export default App;