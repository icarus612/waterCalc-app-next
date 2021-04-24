import React, {useState} from 'react';
import Button from '../components/button.js';

  
const FirstCard = (props) => {
	return (
		<section className="py-5d-flex flex-wrap overflow-hidden">
			<div className='container first-card text-center flex-wrap flex-row d-flex justify-content-around align-items-center p-4'>
				<h1 className="col-12 mb-4">
					What Type of System do you have? 
				</h1>
				<div className="col-12 col-md-5 card pt-3" onClick={()=> props.onChange("R")}>
					<h3>
						Residential
					</h3>
					<p>
						Click here for Residential rates.
					</p>
					<Button className="basic residential" value="Residential" />
				</div>
				<div className="col-12 col-md-5 card pt-3 mt-4 mt-md-0" onClick={()=> props.onChange("C")}>
					<h3>
						Commercial
					</h3>
					<p>
						Click here for commercial rates.
					</p>
					<Button className="basic commercial" value="Commercial" />
				</div>
			</div>
		</section>
	);
}

export default FirstCard