import React, { useState } from 'react'
import styled from 'styled-components'
import ClearIcon from '@mui/icons-material/Clear';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  
  return (
    <Container>
      <a href='www.tesla.com'>
        <img src='./images/logo.svg' alt='tesla logo' />
      </a>
      <Menu>
        <a href='www.tesla.com'>Model S</a>
        <a href='www.tesla.com'>Model 3</a>
        <a href='www.tesla.com'>Model X</a>
        <a href='www.tesla.com'>Model Y</a>
        <a href='www.tesla.com'>Solar Roof</a>
        <a href='www.tesla.com'>Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href='www.tesla.com'>Shop</a>
        <a href='www.tesla.com'>Account</a>
      </RightMenu>

      <MainMenu onClick={()=>setBurgerStatus(true)}>
        <a href='#'>Menu</a>
      </MainMenu>
      <BurgerMenu show={burgerStatus}>
        <CloseWrapper>
          <CustomClose className='customclose' onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
        <li><a href='www.tesla.com'>Existing Inventory</a></li>
        <li><a href='www.tesla.com'>Used Inventory</a></li>
        <li><a href='www.tesla.com'>Trade-In</a></li>
        <li><a href='www.tesla.com'>Demo Drive</a></li>
        <li><a href='www.tesla.com'>Insurance</a></li>
        <li><a href='www.tesla.com'>Cybertruck</a></li>
        <li><a href='www.tesla.com'>Roadster</a></li>
        <li><a href='www.tesla.com'>Semi</a></li>
        <li><a href='www.tesla.com'>Charging</a></li>
        <li><a href='www.tesla.com'>Powerwall</a></li>
        <li><a href='www.tesla.com'>Commercial Energy</a></li>
        <li><a href='www.tesla.com'>Utilities</a></li>
        <li><a href='www.tesla.com'>Find Us</a></li>
        <li><a href='www.tesla.com'>Support</a></li>
        <li><a href='www.tesla.com'>Investor Relations</a></li>
      </BurgerMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 5;
  
  a {
    font-weight: 400;
    padding: 0.4rem 0.8rem;
    text-decoration: none;
    flex-wrap: nowrap;
  }  
    a:hover{
     background-color: rgba(214, 213, 226, 0.5);
     border-radius: 4px;
   }
    @media screen and (max-width: 1024px) {
      display: none;
    }
  
  `

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  
  a {
    font-weight: 400;
    padding: 0.4rem 0.8rem;
    text-decoration: none;
    flex-wrap: nowrap;
  }
   a:hover{
    background-color: rgba(214, 213, 226, 0.5);
    border-radius: 4px;
  }
   @media screen and (max-width: 1024px) {
      display: none;
    }
`
const MainMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0.2rem 0.8rem;
   
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    background-color: rgba(214, 213, 226, 0.5);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    margin-right: -20px;
  }
  a{
    padding: 0.4rem 0.8rem;
  }
  
  a:hover{
    background-color: rgba(214, 213, 226, 0.5);
    border-radius: 4px;
  }
` 


const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  /* overflow-y: scroll; */
  transform: ${props => props.show ? "translate(0)" : "translate(100%)"};
  transition: transform 0.2s ease-in-out;
  li{
    padding: 1rem 0;
  }
  a{
      font-weight: 600;
      padding: 0.4rem 0.8rem;
  }
    a:hover{
    background-color: rgba(214, 213, 226, 0.5);
    border-radius: 4px;
  }
`

const CustomClose = styled(ClearIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-self: flex-end;
  margin-bottom: 1rem;
  margin-left: 13rem;
`