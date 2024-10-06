import { Container, Dropdown, DropdownButton, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><img src="https://i.pinimg.com/564x/0d/a2/ca/0da2cad923cfb1b708890e0114810e36.jpg "width="100" height="60"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/empresas">Empresas</Nav.Link>
            <Nav.Link href="/aeroporto">Aeroporto</Nav.Link>
            <Nav.Link href="/passagem">Passagem</Nav.Link>
            <Nav.Link href="/passageiro">Passageiro</Nav.Link>
            <Nav.Link href="/voo">Voo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
           

            <div className="bg-secondary text-white text-center p-3">{/*Cabeçalho */}
                <h1>{props.titulo}</h1>
            </div>
            <Container>
                {props.children}
            </Container>
        </>

    )
}