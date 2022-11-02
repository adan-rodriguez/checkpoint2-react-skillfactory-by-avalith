import { Route, Routes } from "react-router-dom";
import Table from "./components/Table";
import Landing from "./components/Landing";
import Form from "./components/Form";
import CardsContainer from "./components/CardsContainer";
import CardDetails from "./components/CardDetails";
import Layout from "./Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="users" element={<Table />} />
        <Route path="rickandmorty" element={<CardsContainer />} />
        <Route path="rickandmorty/:id" element={<CardDetails />} />
        <Route path="form" element={<Form />} />
        <Route path="*" element={<Layout />} />
      </Route>
    </Routes>
  );
};

export default App;
