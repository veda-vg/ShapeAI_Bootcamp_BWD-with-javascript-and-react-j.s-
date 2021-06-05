import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "/public/style.css";

function App() {
  return (
    <div>
      <Header />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
