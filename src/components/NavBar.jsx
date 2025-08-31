import {Image, Navbar, Nav} from "react-bootstrap";
import {IconCirclePlus} from '@tabler/icons-react';

export default function NavBar() {
  return (
    <>
      <Navbar style={{backgroundColor:"#071015", boxShadow:"-20px 0 30px -3px black, 20px 0 30px -3px black"}}>
        <Navbar.Brand className="z-1 ms-5" href="/personal/">
          <Image style={{maxHeight:"150vw"}} src="./name.png" height="150vw" className="d-inline-block align-top" alt="Frank Tucci"/>
        </Navbar.Brand>
      </Navbar>
      <Navbar className="z-1 p-0" expand="lg" style={{backgroundColor:"#326485", boxShadow:"-20px 0 30px -3px black, 20px 0 30px -3px black"}}>
        <Navbar.Toggle style={{border:"transparent"}} aria-controls="basic-navbar-nav">
          <IconCirclePlus className="m-1" color="white"/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link className="ms-5" href="/personal/"><span style={{color:"white"}}>Home</span></Nav.Link>
          <Nav.Link className="ms-5" href="/personal/work"><span style={{color:"white"}}>Work</span></Nav.Link>
          <Nav.Link className="ms-5" href="/personal/projects"><span style={{color:"white"}}>Projects</span></Nav.Link>
          <Nav.Link className="ms-5" href="/personal/research"><span style={{color:"white"}}>Research</span></Nav.Link>
          <Nav.Link className="ms-5" href="/personal/resume"><span style={{color:"white"}}>Resume</span></Nav.Link>
          <Nav.Link className="ms-5" href="/personal/fun"><span style={{color:"white"}}>Fun</span></Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}