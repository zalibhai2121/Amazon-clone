import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className = "home">
			<img 
				className = "home__image" 
				src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt = ""
			/>
			{/* product id, title, pricing, rating, image */}
			<div className = "home__row">
				<Product 
					id = "12321341"
					title = "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price = {11.96}
					rating = {5}
					image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
				/>
				<Product 
					id = "18903844"
					title = "Beats Solo Pro Wireless Noise Cancelling On-Ear Headphones - Apple H1 Headphone Chip, Class 1 Bluetooth, Active Noise Cancelling, Transparency, 22 Hours Of Listening Time - Black"
					price = {298.99}
					rating = {5}
					image = "https://images-na.ssl-images-amazon.com/images/I/51rPZy6uUAL._AC_SL1000_.jpg"
				/>
			</div>
			<div className= "home__row">
				<Product 
					id = "54399043"
					title = "Anne Klein Women's 10/9442 Leather Strap Watch"
					price = {65.00}
					rating = {4}
					image = "https://images-na.ssl-images-amazon.com/images/I/81mxDwWH6ZL._AC_UY879_.jpg"
				/>
				<Product 
					id = "49538094"
					title = "Harry Potter Books 1-7 Special Edition Boxed Set"
					price = {54.96}
					rating = {5}
					image = "data:image/webp;base64,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"
				/>
				<Product 
					id = "83490303"
					title = "Gudetama Lazy Egg Open Face PopSockets Stand for Smartphones and Tablets PopSockets Grip and Stand for Phones and Tablets"
					price = {14.99}
					rating = {4}
					image = "https://images-na.ssl-images-amazon.com/images/I/51olZTvGalL._AC_SL1000_.jpg"
				/>
			</div>
			<div className = "home__row">
				<Product 
					id = "98030202"
					title = "Dash DMAF360GBAQ02 AirCrisp Pro Electric Air Fryer + Oven Cooker with Digital Display + 8 Presets, Temperature Control, Non Stick Fry Basket, Recipe Guide + Auto Shut Off Feature, 3qt, Aqua"
					price = {99.98}
					rating = {5}
					image = "https://images-na.ssl-images-amazon.com/images/I/81iJHagagqL._AC_SL1500_.jpg"
				/>
			</div>
		</div>
		);

}
export default Home;