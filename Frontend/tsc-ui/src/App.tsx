import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from "./pages/signin";
import Home from "./pages/home";
import Beneficiaries from "./containers/beneficiaries";
import { GlobalProvider } from "./services/context/globalContext";
import BeneficiaryDetails from "./containers/beneficiaryDetails";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route index path="/" element={<SignIn />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/tsc/*" element={<Home />}>
              {/* <Route  path="beneficiaries" element={<Beneficiaries />} /> */}
              <Route
                path="beneficiaryDetails"
                element={<BeneficiaryDetails />}
              />
            </Route>
          </Routes>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
