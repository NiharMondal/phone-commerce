import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { ButtonContainer } from './Button';
import styled from 'styled-components';
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
  }
`
const Navbar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <ul className="navbar-nav align-items-center me-auto">
        <li className="nav-brand ml-5">
          <Link to="/" className="nav-link mx-2">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span>
            <FontAwesomeIcon icon={faCartPlus} />
          </span>
          My Cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};

export default Navbar;