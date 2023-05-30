import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import American from "./pages/American";
import Italian from "./pages/Italian";
import Thai from "./pages/Thai";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import RecipeDetails from "./pages/RecipeDetails";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Searched from "./pages/Searched";
import SimilarRecipes from "./components/SimilarRecipes";
import VoiceCheck from "./pages/VoiceCheck";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VeganRecipes from "./pages/Vegan";
// import { RecipeContextProvider } from "../context/RecipeDetailsContext";
const App = () => {
  return (
    <>
      <div className="app">
        <AuthContextProvider>
          
            <Navbar />
            <ToastContainer
              className="toast-message"
              autoClose={500}
              newestOnTop={true}
              theme="dark"
            />
           {/* <RecipeContextProvider> */}
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/american" element={<American />} />
              <Route path="/italian" element={<Italian />} />
              <Route path="/thai" element={<Thai />} />
              <Route path="/vegan" element={<VeganRecipes />} />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
              {/* <Route path="/recipe/item.id" element={<RecipeDetails/>}/> */}
              <Route path="/blogs" element={<Blog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/account" element={<Account />} />
              <Route path="/similarrecipe/:id" element={<SimilarRecipes />} />
              <Route path="/searched/:search" element={<Searched />} />
              <Route path="/voice" element={<VoiceCheck />} />
              <Route path="/searched/" element={<Searched />} />
            </Routes>
           {/* </RecipeContextProvider> */}
          
        </AuthContextProvider>
      </div>
      <Footer />
    </>
  );
};

export default App;
