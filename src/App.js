import { Container } from "react-bootstrap";
import { HashRouter, Route, Routes } from "react-router";
import { HomePage, ProjectsPage, ResearchPage, WorkPage, ResumePage, FunPage, NotFoundPage } from "./components/Pages";

export default function App() {
  return (
    <HashRouter basename="/">
      <Container fluid style={{
        backgroundImage:"url(./bg.png)", 
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"100vh",
        position:"fixed",
        padding:"0"
      }}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/fun" element={<FunPage/>} />
        <Route path="/*" element={<NotFoundPage/>} />
      </Routes>
    </HashRouter>
  )
}
