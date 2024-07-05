import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodosPage from "../pages/TodosPage";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Students from "../pages/student/Students.jsx";
import Layout from "../pages/Layout.jsx";
import ErrorLayout from "../pages/ErrorLayout.jsx";
import Student from "../pages/student/Student.jsx";
import AddStudent from "../pages/student/AddStudent.jsx";
import EditStudent from "../pages/student/EditStudent.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/todos" element={<TodosPage/>}/>
                    <Route path="/students" element={<Students/>}/>
                    <Route path="/students/:id" element={<Student/>}/>
                    <Route path="/students/edit/:id" element={<EditStudent/>}/>
                    <Route path="/students/add" element={<AddStudent/>}/>

                </Route>
                <Route path='/*' element={<ErrorLayout/>}>
                    <Route path="*" element={<NotFound/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default App;