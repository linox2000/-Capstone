import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from './routes/sign-in/sign-in.component'


const ShopPage = () => {
  return (
    <div>
      <div>
        <h1>I am the ShopPage</h1>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Routes >
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
