import {Navbar, Container, Nav} from 'react-bootstrap'
import {dataNav} from '../data/index'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';


const NavbarComponent = () =>{

  const[changeColor, setChangeColor] = useState(false);

  const changeBackroundColor = ()=>{
    if(window.scrollY > 10){
      setChangeColor(true);
    }else{
      setChangeColor(false);
    }
  };

  useEffect(()=>{
    changeBackroundColor();

    window.addEventListener("scroll", changeBackroundColor);
  })


    return (
        <Navbar expand="lg fixed-top-navbar-scroll"className={changeColor ? "color-active" : ""} >
        <Container>
          <Navbar.Brand href="home">ShoesSmart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
                {dataNav.map((link)=>{
                    return(
                        <div className='nav-link' key={link.id}>
                            <NavLink to={link.path} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } end >{link.text}</NavLink>
                        </div>
                    );
                })}
            </Nav>
          <Button variant="outline-primary">Masuk</Button>{' '}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent