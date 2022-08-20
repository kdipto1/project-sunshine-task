import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user.email);
  useEffect(() => {
    if (loading) {
      return;
    }
    if (error) {
      alert(error?.message);
    }
  }, [error, loading]);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="fw-bold" as={Link} to="/">
          EdTech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              {user ? user?.displayName : user?.email}
            </Nav.Link>
            {user ? (
              <Nav.Link
                style={{
                  color: "crimson",
                  fontWeight: 700,
                  fontFamily: "sans-serif",
                }}
                className="text-decoration-none fw-bold"
                onClick={() => signOut(auth)}
              >
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link
                className="text-decoration-none fw-bold"
                onClick={() => console.log("clicked")}
                as={Link}
                to="/login"
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
