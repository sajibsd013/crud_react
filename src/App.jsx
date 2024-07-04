import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosPage from "../pages/TodosPage";
import TaskPage from "../pages/TaskPage";
import HomePage from "../pages/HomePage";
import Header from "../components/header";
import NotFound from "../pages/NotFound";
import StudentPage from "../pages/StudentPage";

const App = () => {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/tasks" element={<TaskPage/>}/>
          <Route path="/todos" element={<TodosPage/>} />
          <Route path="/students" element={<StudentPage/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;