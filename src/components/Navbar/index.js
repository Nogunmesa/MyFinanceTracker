import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/index" activeStyle>
						Home
					</NavLink>
					<NavLink to="/setup" activeStyle>
						Set Up
					</NavLink>
					<NavLink to="/signup" activeStyle>
						Sign Up
					</NavLink>
					<NavLink to="/transactions" activeStyle>
						Transaction
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
