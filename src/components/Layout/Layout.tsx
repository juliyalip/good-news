import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import Container from "../Container/Container";

export default function Layout() {
  return (
    <>
      <AppBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
