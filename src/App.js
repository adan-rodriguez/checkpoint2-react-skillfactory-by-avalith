import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Form from "./components/Form";
import CardsContainer from "./components/CardsContainer";
import CardDetails from "./components/CardDetails";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/users" element={<Table />} />
        <Route path="/rickandmorty" element={<CardsContainer />} />
        <Route path="/rickandmorty/:id" element={<CardDetails />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<Landing />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
