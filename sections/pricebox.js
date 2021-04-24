import React from 'react';

const PriceBox = (props) => {
	let subtotal = Number(props.subtotal)
	if (props.sewerUsage) subtotal += 4.22
	if (props.waterUsage) subtotal += 4.22
	return (
		<div className="price-card p-3">
			{props.waterUsage && (
				<h4 className="px-3 bold">
					Water Usage:  <span className="float-right">$ {props.waterUsage.toFixed(2)}</span>
				</h4>	
			)}
			{props.waterUsage && (
				<h4 className="px-3 bold">
					 Water Fixed Fees:  <span className="float-right">$ 4.22</span>
				</h4>	
			)}
			{props.meter && (props.waterFee || props.irrigationUsage) && (
				<h4 className="px-3 bold">
					Water Availability Fee:  <span className="float-right">$ {props.meter[0].toFixed(2)}</span>
				</h4>	
			)}
			{(props.waterUsage || props.waterFee) && (props.sewerUsage || props.sewerFee || props.irrigationUsage || props.stormWater) && <hr />}
			{props.sewerUsage && (
				<h4 className="px-3 bold">
					Sewer Usage:  <span className="float-right">$ {props.sewerUsage.toFixed(2)}</span>
				</h4>	
			)}
			{props.sewerUsage && (
				<h4 className="px-3 bold">
					Sewer Fixed Fees:  <span className="float-right">$ 4.22</span>
				</h4>	
			)}
			{props.sewerFee && (
				<h4 className="px-3 bold">
					Sewer Availability Fee:  <span className="float-right">$ {props.meter[1].toFixed(2)}</span>
				</h4>	
			)}
			{(props.irrigationUsage || props.stormWater) && (props.sewerUsage || props.sewerFee) && <hr />}
			{props.irrigationUsage && (
				<h4 className="px-3 bold">
					Irrigation Usage:  <span className="float-right">$ {props.irrigationUsage.toFixed(2)}</span>
				</h4>	
			)}
			{props.stormWater && (
				<h4 className="px-3 bold">
					Storm Water Runnoff:  <span className="float-right">$ {props.stormWater.toFixed(2)}</span>
				</h4>	
			)}
			<hr />
			<h4 className="px-3 bold">
				Subtotal:  <span className="float-right">$ {subtotal.toFixed(2)}</span>
			</h4>				
		</div>
	);
}

export default PriceBox