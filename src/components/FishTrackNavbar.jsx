import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const FishTrackNavbar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">FishTrack</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Izvestaji sa pecanja</Nav.Link>
            <Nav.Link href="#Input">Dodaj novi izvestaj</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default FishTrackNavbar;
