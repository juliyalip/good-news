import Navigate from "../Navigate/Navigate";
import Container from "../Container/Container";
import { navigate } from "../../data/navigate";

export default function AppBar() {
  return (
    <header>
      <Container>
      <Navigate items={navigate} />
      </Container>
    </header>
  );
}
