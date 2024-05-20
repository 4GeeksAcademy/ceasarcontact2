import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Contacts } from "./Contacts";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Contact List</h1>
		<div>
			<Contacts/>
		</div>
	</div>
);
