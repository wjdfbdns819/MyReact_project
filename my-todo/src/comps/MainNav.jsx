import React from "react";
import {NavLink} from "react-router-dom";
import "../css/MainNav.css";

// Nav 컴포넌트
function MainNav() {

	return (
		<nav className="nav_box">
			<NavLink to="/" exact>All List</NavLink>
			<NavLink to="/todo/list" exact>TodoList</NavLink>
			<NavLink to="/buket/list" exact>buketList</NavLink>
		</nav>
	);
};

export default MainNav