import { useEffect, useState } from 'react';
import '../application.css';

  
const Home = () => {
	const [width, setWidth] = useState(window.innerWidth)
	useEffect(()=> {
		window.addEventListener('resize', ()=> setWidth(window.innerWidth))
	})
	return (
		<div className="container">
			<div className='flex-wrap flex-row d-flex justify-content-around align-items-stretch card mt-5 p-3'>
				<div className="col-12 col-md-10 text-center p-3">
					<h1>Water Utility Calculator App</h1>
					<h4>A basic breakdown of how your bill is calculated. For more information visit <a target="_blank" href="https://charlottenc.gov/Water/RatesBilling/Pages/CLTWRates.aspx">Charlotte Water</a>.</h4>				
				</div>
				<div className="flex-wrap flex-row d-flex justify-content-around align-items-stretch p-3">
					<h3 className="col-12 col-md-10 text-center">
						Universal Rates &amp; Fees
					</h3>
					<div>
						<h4>Irrigation Meter Rates</h4>
						<ul>
							<li>Tier 1: (1-16 Ccf): $5.04</li>
							<li>Tier 2: (17+ CCf): $9.55</li>
						</ul>
					</div>
					<div>

						<h4>Fixed Fees</h4>
						<ul>
							<li>Water: $4.22/month</li>
							<li>Sewer: $4.22/month</li>
						</ul>
					</div>
				</div>

				<div>
					<h3>
						Residential Rates &amp; Fees
					</h3>
					<h4>Water Usage:</h4>
					<ul>
						<li>Tier 1 (1-4 Ccf ): $1.69/Ccf</li>
						<li>Tier 2 (5-8 Ccf): $2.18/Ccf</li>
						<li>Tier 3 (9-16 Ccf): $5.04/Ccf</li>
						<li>Tier 4 (Over 16 Ccf): $9.55/Ccf</li>
					</ul>
					<h4>Sewer Usage:</h4>
					<ul>
						<li>$5.19 Per Ccf of Water Used (up to 16 Ccf)</li>
					</ul>

					<h4>Availability Fees</h4>
					<ul>
						<li>Water 5/8" Connection Size: $1.29/month</li>
						<li>Water 1" Connection Size: $3.22/month</li>
						<li>Sewer 5/8" Connection Size: 8.70/month</li>
						<li>Sewer 1" Connection Size: $21.76/month</li>
					</ul>
				</div>

				<div>
					<h3>
						Commercial Rates &amp; Fees
					</h3>
					<h4>Water and Sewer Usage:</h4>
					<ul>
						<li>Water Charge per Ccf: $2.92</li>
						<li>Sewer Charge per Ccf: $5.19</li>
					</ul>
					<h4>Water Availability Fees</h4>
					<ul>
						<li>Water 3/4" and 5/8" Connection Size: $1.29/month</li>
						<li>Water 1" Connection Size: $3.22/month</li>
						<li>Water 1 1/2" Connection Size: $6.45/month</li>
						<li>Water 2" Connection Size: $10.32/month</li>
						<li>Water 3" Connection Size: $21.28/month</li>
						<li>Water 4" Connection Size: $35.03/month</li>
						<li>Water 6" Connection Size: $70.92/month</li>
						<li>Water 8" Connection Size: $141.84/month</li>
						<li>Water 10" Connection Size: $270.76/month</li>
						<li>Water 12" Connection Size: $341.70/month</li>
					</ul>

					<h4>Sewer Availability Fees</h4>
					<ul>
						<li>Sewer 3/4" and 5/8" Connection Size: 8.70/month</li>
						<li>Sewer 1" Connection Size: $21.76/month</li>
						<li>Sewer 1 1/2" Connection Size: $43.52/month</li>
						<li>Sewer 2" Connection Size: $69.63/month</li>
						<li>Sewer 3" Connection Size: $143.61/month</li>
						<li>Sewer 4" Connection Size: $236.45/month</li>
						<li>Sewer 6" Connection Size: $478.70/month</li>
						<li>Sewer 8" Connection Size: $957.40/month</li>
						<li>Sewer 10" Connection Size: $1,828.00/month</li>
						<li>Sewer 12" Connection Size: $2,306.00/month</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Home;
