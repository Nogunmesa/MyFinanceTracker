import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
          <NavLink to="/setup">SetUp</NavLink>
          <NavLink to="/transaction">Transaction</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
                </NavMenu>
            </Nav>
            </>
    );
};

export default Navbar;