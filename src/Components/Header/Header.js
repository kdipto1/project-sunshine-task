import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
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
          <Nav className="mx-auto">
            {user ? <p>{user?.displayName}</p> : <p>{user?.email}</p>}
          </Nav>
          <Nav>
            <Nav></Nav>
            {user ? (
              <Nav.Link
                style={{
                  color: "salmon",
                  fontFamily: "sans-serif",
                }}
                className="text-decoration-none fw-bold"
                onClick={() => signOut(auth)}
              >
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link
                style={{
                  color: "red",
                  fontFamily: "sans-serif",
                }}
                className="text-decoration-none fw-bold"
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
