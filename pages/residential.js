import React from 'react';
import Input from '../components/input.js';
import Button from '../components/button.js';
import 	PriceBox from '../sections/priceBox.js';

const ResidentialRates = (props) => {
	const [water, setWater] = React.useState(0);
	const [sewer, setSewer] = React.useState(0);
	const [withSewer, setWithSewer] = React.useState(0);
	const [withoutSewer, setWithoutSewer] = React.useState(0);
	const [irrigation, setIrrigation] = React.useState(0);
	const [stormWater, setStormWater] = React.useState(0);
	const [subtotal, setSubtotal] = React.useState(0);
	const [meterSize, setMeterSize] = React.useState(.75);

	const rates = [1.69, 2.18, 5.04, 5.04, 9.55];

	const handleWithSewer = (e) => {
		let s = 5.19 * (e > 16 ? 16 : e);
		let x = 0;
		for (let i = 0; i < (Number(e) + Number(withoutSewer)); i++) {
			x += i < 16 ? rates[Math.floor(i/4)] : rates[4];
		}
		setWithSewer(e);
		setWater(x);
		setSewer(s);
	}

	const handleWithoutSewer = (e) => {
		let x = 0;
		for (let i = 0; i < (Number(e) + Number(withSewer)); i++) {
			x += i < 16 ? rates[Math.floor(i/4)] : rates[4];
		}
		setWithoutSewer(e);
		setWater(x);
	}

	const handleIrrigation = (e) => {
		let x = 0;
		for (let i = 0; i < e; i++) {
			x += i < 16 ? rates[3] : rates[4];
		}
		setIrrigation(x);
	}

	const stormWaterPrice = {
		"None": 0,
		"Tier 1": 7.57,
		"Tier 2": 10.77,
		"Tier 3": 15.44,
		"Tier 4": 25.02,
	}

	const meter = {
        "0.75": [1.29, 8.7],
        "1": [3.22, 21.76]
	};
	
	React.useEffect(()=> {
		const availability = water > 0 &&
			(sewer > 0 ? meter[meterSize][0] + meter[meterSize][1] : meter[meterSize][0])
		console.log(water, sewer, irrigation, stormWater, availability)
		setSubtotal(water + sewer + irrigation + stormWater + availability);
	}, [water, sewer, irrigation, stormWater, meterSize])
	return (
		<React.Fragment>
			<div className="d-flex flex-column flex-wrap flex-md-row justify-content-start align-items-around">
				<h3 className="m-4">
				Residential Rates
				</h3>
				<div className="col-12 d-flex flex-column justify-content-start align-items-start">
					<div className="col-6">
                        <Button 
                            type="select" 
                            className="select" 
                            value={meterSize} 
                            options={[0.75, 1]} 
                            onChange={(e)=> setMeterSize(e)} 
                        /> 
                            <span className="pl-2">Meter Size</span>
                    </div>
					<div className="col-6">
                        <Button 
                            type="select" 
                            className="select" 
                            options={["None", "Tier 1", "Tier 2", "Tier 3", "Tier 4"]} 
                            onChange={(e)=> setStormWater(stormWaterPrice[e])} 
                        /> 
                            <span className="pl-2">Storm Water Runnoff</span>
                    </div>
					<Input 
						label="With Sewer" 
						type="number" 
						className="col-6" 
						placeholder={0} 
						min={0} 
						max={10000} 
						onChange={(e)=> handleWithSewer(e.target.value)} 
					/>
					<Input 
						label="Without Sewer" 
						type="number" 
						className="col-6" 
						placeholder={0} 
						min={0} 
						max={10000} 
						onChange={(e)=> handleWithoutSewer(e.target.value)} 
					/>
					<Input 
						label="Irrigation" 
						type="number" 
						className="col-6" 
						placeholder={0} 
						min={0} 
						max={10000} 
						onChange={(e)=> handleIrrigation(e.target.value)} 
					/>
				</div>
			</div>
			<PriceBox 
				sewerUsage={sewer > 0 && sewer} 
				waterUsage={water > 0 &&  water} 
				sewerFee={sewer > 0} 
                waterFee={water > 0} 
				meter={meter[meterSize]} 
				irrigationUsage={irrigation > 0 && irrigation} 
				stormWater={stormWater > 0 && stormWater}
				subtotal={subtotal} 
			/>
		</React.Fragment>
	)
}
export default ResidentialRates;