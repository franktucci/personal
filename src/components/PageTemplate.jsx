import {Container, Card, Row, Col, Image, Navbar, Nav, Stack, Button} from "react-bootstrap";
import NavBar from "./NavBar";

export default function PageTemplate(props) {
  return (
    <Container fluid style={{paddingLeft:"10vw", paddingRight:"10vw", paddingBottom:"10vw"}}>
      <NavBar/>
      <Card style={{borderRadius:"0", padding:"3rem", backgroundColor:"#071015", textDecorationColor:"white", boxShadow:"-20px 0 30px -3px black, 20px 0 30px -3px black"}}>
        <span style={{color:"white"}}>
          {props.children}
        </span>
      </Card>
    </Container>
  );
};
  