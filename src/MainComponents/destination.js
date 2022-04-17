import React, { useEffect, useState } from "react";
import {destinationData} from './link_list';

const titleList = [{
	id: 0,
	title: 'MOON',
	isActive: true,
},
{
	id: 1,
	title: 'MARS',
	isActive: false,
},{
	id: 2,
	title: 'EUROPA',
	isActive: false,
},{
	id: 3,
	title: 'TITAN',
	isActive: false,
},]


export const Destination = () => {
	const [switchersInd, setSwitchersInd] = useState(0);
	const [listData, setListData] = useState([]);
	const [destinationList, setDestinationList] = useState(titleList);
	let {img, title, paragraph, distance, time} = listData;
	useEffect(() => {
		setListData(destinationData[switchersInd]);
	}, [switchersInd]);

	const updateActivate = (id) => {
		setSwitchersInd(id);
		const newDestinationList = destinationList.map((e) => {
			if ( e.id === id ) {
				e.isActive = true;
			} else {
				e.isActive = false;
			}
			return e;
		});
		setDestinationList(newDestinationList);
	};

	return (
		<>
		<section className="destination-section">
			<div className="container">
					<div className="section-title">
						<span>01</span> Pick your destination
					</div>
				<div className="distination-content">
					<div className="destination-img"><img className="toLeft" src={img} alt={title}/></div>
					<div className="destination-info">
						<ul>
							{destinationList.map((e) => {
								const {id, title, isActive} = e;
								return <li key={id} className={`${isActive ? 'active' : ''}`} onClick={() => {updateActivate(id)}}>{title}</li>
							})}
						</ul>
						<h4 className="header-4">{title}</h4>
						<p className="para">{paragraph}</p>
						<div className="distination-calcs">
							<div className="distance">
								<p className="para">AVG. DISTANCE</p>
								<span>{distance}</span>
							</div>
							<div className="time">
								<p className="para">EST. TRAVEL TIME</p>
								<span>{time}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	);
};