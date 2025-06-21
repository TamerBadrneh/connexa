// React Router
import { Route, Routes } from "react-router";

// Layout
import AuthenticationFormLayout from "./components/layout/AuthenticationFormLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// TASKS:
// 1. Make Layout margin fixes + image entry. DONE
// 2. Make animations for each form. DONE
// 3. Separate them all "layout and field Shape" and create the necessary types "Clean Code". DONE
// 4. Make the validation logic and API call. 
// 5. Finalize The Structure by making a switch button to view the right component "use router for it"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthenticationFormLayout />}>
          <Route path="login" element={<Login />} />
          <Route index path="sign-up" element={<Signup />} />
        </Route>
        <Route path="*" element={<>404 Page</>} />
      </Routes>
    </>
  );
}

