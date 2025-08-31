import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, ProjectsPage, ResearchPage, WorkPage, ResumePage, FunPage, NotFoundPage } from "./components/Pages";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Container fluid style={{
        backgroundImage:"url(./bg.png)", 
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"100vh",
        position:"fixed",
      }}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/fun" element={<FunPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
