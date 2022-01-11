import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
	return (
		<Container>
			<Section
				title="Model S"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-s.jpeg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model 3"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-3.jpeg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model X"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-x.jpeg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model Y"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-y.jpeg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Solar Panels"
				description="Lowest Cost Solar Panels in America"
				backgroundImg="solar-panels.jpeg"
				leftBtnText="Order Now"
				rightBtnText="Learn More"
			/>
			<Section
				title="Solar Roof"
				description="Produce Clean Energy From Your Roof"
				backgroundImg="solar-roof.jpeg"
				leftBtnText="Order Now"
				rightBtnText="Learn More"
			/>
			<Section
				title="Accessories"
				backgroundImg="accessories.jpeg"
				leftBtnText="Shop Now"
			/>
		</Container>
	);
}

export default Home;

const Container = styled.div`
	height: 100vh;
`;
