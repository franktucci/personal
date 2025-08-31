import {Container, Card, Row, Col, Image, Navbar, Nav, Stack, Button} from "react-bootstrap";
import NavBar from "./NavBar";

export default function PageTemplate(props) {
  return (
    <>
    <Container className="d-none d-sm-block" fluid style={{paddingLeft:"10vw", paddingRight:"10vw", paddingBottom:"10vw"}}>
      <NavBar/>
      <Card style={{borderRadius:"0", padding:"3rem", backgroundColor:"#071015", textDecorationColor:"white", boxShadow:"-20px 0 30px -3px black, 20px 0 30px -3px black"}}>
        <span style={{color:"white"}}>
          {props.children}
        </span>
      </Card>
    </Container>
    <Container className="d-sm-none" fluid style={{paddingLeft:"0", paddingRight:"0", paddingBottom:"0"}}>
      <NavBar/>
      <Card style={{borderRadius:"0", padding:"1rem", backgroundColor:"#071015", textDecorationColor:"white", boxShadow:"-20px 0 30px -3px black, 20px 0 30px -3px black"}}>
        <span style={{color:"white"}}>
          {props.children}
        </span>
      </Card>
    </Container>
    </>
  );
};
  