import React from 'react';
import Input from '../components/input.js';
import Button from '../components/button.js';
import 	PriceBox from '../sections/priceBox.js';

const CommercialRates = (props) => {
	const [meterSize, setMeterSize] = React.useState(.75);
	const [usage, setUsage] = React.useState(0);
    const [subtotal, setSubtotal] = React.useState(0);
    const [irrigation, setIrrigation] = React.useState(0);
    const [sewer, setSewer] = React.useState(false);
    const meter = {
        "0.75": [1.29, 8.7],
        "1": [3.22, 21.76],
        "1.5": [6.45, 43.52],
        "2": [10.32, 69.63],
        "3": [21.28, 143.61], 
        "4": [35.03, 236.45],
        "6": [70.92, 478.7],
        "8": [141.84, 957.4],
        "10": [270.76, 1828],
        "12": [341.7, 2306]
    };


    const handleIrrigation = (e) => {
        let x = 0;
		for (let i = 0; i < e; i++) {
			x += i < 16 ? 5.04 : 9.55;
		}
        return Number(x);
    }

	const setPrice = ({u=usage, ms=meterSize, i=irrigation, s=sewer}) => {
        setIrrigation(i);
        setSewer(s);
        setUsage(u);
        setMeterSize(ms);
    }
    
    React.useEffect(()=> {
        const newSewer = sewer ? 8.01 : 2.92;
        const h = handleIrrigation(irrigation);
        const availability = usage > 0 &&
            (sewer ? meter[meterSize][0] + meter[meterSize][1] : meter[meterSize][0])

        setSubtotal(
            usage + h  > 0 ? 
            (Number(usage) * newSewer)  + Number(h) + availability
            : 0
        );
    }, [meterSize, usage, irrigation, sewer])

	return (
		<React.Fragment>
            <div className="d-flex flex-column flex-wrap flex-md-row justify-content-start align-items-around">
                <h3 className="m-4">
                    Commercial Rates
                </h3>
                <div className="col-12 d-flex flex-column justify-content-start align-items-start">
                    <Input label="Sewer?" type="checkbox" className="pl-3" value={sewer} onChange={()=> setPrice({s: !sewer})} />
                    <div className="col-6">
                        <Button 
                            type="select" 
                            className="select" 
                            value={meterSize} 
                            options={[0.75, 1, 1.5, 2, 3, 4, 6, 8, 10, 12]} 
                            onChange={(e)=> setPrice({ms: e})} 
                        /> 
                            <span className="pl-2">Meter Size</span>
                    </div>
                    <Input 
                        label="Water Usage" 
                        type="number" 
                        className="col-6" 
                        placeholder={0} 
                        min={0} 
                        max={10000} 
                        onChange={(e)=> setPrice({u: Number(e.target.value)})} 
                    />
                    <Input 
                        label="Irrigation" 
                        type="number" 
                        className="col-6" 
                        placeholder={0} 
                        min={0} 
                        max={10000} 
                        onChange={(e)=> setPrice({i: Number(e.target.value)})} 
                    />
                </div>
            </div>
            <PriceBox 
                sewerFee={usage > 0 && sewer} 
                waterFee={usage > 0} 
                meter={meter[meterSize]} 
                irrigationUsage={irrigation > 0 && handleIrrigation(irrigation)} 
                waterUsage={usage > 0 && (usage * 2.92)} 
                sewerUsage={(sewer && usage > 0) && (usage * 5.19)} 
                subtotal={subtotal > 0 ? subtotal : 0} 
            />
		</React.Fragment>
	)
}
export default CommercialRates;