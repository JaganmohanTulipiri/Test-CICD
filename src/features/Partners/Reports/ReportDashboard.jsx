import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { default as React, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import WarningIcon from "../customIcons/Report Icons/Path7351@2x.png";

const ReportDashboard = () => {
	const dispatch = useDispatch();
	const [tileWidth, setTileWidth] = useState(0);
	const data = [
		//    "22%","40%","29%","100%","25%","80%","80%","67%","75%","25%","33%","27%","0%","0%","0%","25%","33%","29%"
	];
	let res = {
		heart_health: {
			totals: {
				boys: "9",
				girls: "5",
				total: "14",
			},
			counts: {
				boys: "7",
				girls: "2",
				total: "9",
			},
		},
		body_health: {
			totals: {
				boys: "9",
				girls: "5",
				total: "14",
			},
			counts: {
				boys: "4",
				girls: "3",
				total: "7",
			},
		},
		upper_body: {
			totals: {
				boys: "10",
				girls: "10",
				total: "20",
			},
			counts: {
				boys: "5",
				girls: "6",
				total: "11",
			},
		},
		adbominal: {
			totals: {
				boys: "6",
				girls: "2",
				total: "8",
			},
			counts: {
				boys: "2",
				girls: "1",
				total: "3",
			},
		},
		trunk_extensor: {
			totals: {
				boys: "5",
				girls: "2",
				total: "7",
			},
			counts: {
				boys: "5",
				girls: "2",
				total: "7",
			},
		},
	};

	let lables = [];
	let NI_HR = [];
	for (let x in res) {
		// lables.push(...Object.keys(res[x]["counts"]));

		let totals = Object.values(res[x]["totals"]);
		let counts = Object.values(res[x]["counts"]);

		for (let i in counts) {
			let t = parseFloat(totals[i]);
			let c = parseFloat(counts[i]);
			let p = (c / t) * 100;
			NI_HR.push(100 - parseInt(p));
			lables.push(`${totals[i] - counts[i]} of ${totals[i]}`);
		}
	}
	const ref = useRef(null);
	useEffect(() => {
		setTileWidth(ref.current.offsetWidth);
	}, [ref.current]);
	console.log(lables);
	//   const loginForgotName = useSelector((state) => state.auth.loginForgotName);

	return (
		<div style={{ display: "flex", margin: "auto", marginTop: "100px" }}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					marginTop: "148px",
				}}
			>
				<p className="chart-lable-left">Boys</p>
				<p className="chart-lable-left">Girls</p>
				<p className="chart-lable-left">Total</p>
			</div>
			<div>
				<div
					style={{
						display: "flex",
						padding: "10px",
					}}
				>
					<p
						className="chart-lable-top"
						style={{
							width: `${tileWidth}px`,
						}}
					>
						Heart Health
					</p>
					<p
						className="chart-lable-top"
						style={{
							width: `${tileWidth}px`,
						}}
					>
						Body Health
					</p>
					<p
						className="chart-lable-top"
						style={{
							width: `${tileWidth * 2.9}px`,
						}}
					>
						Muscle Fitness
					</p>
				</div>
				<div
					style={{
						display: "flex",
						padding: "10px",
					}}
				>
					<p style={{ width: `${tileWidth}px`, textAlign: "center" }}>
						Aerobic Capacity
					</p>
					<p style={{ width: `${tileWidth}px`, textAlign: "center" }}>
						Body Composition
					</p>
					<p style={{ width: `${tileWidth}px`, textAlign: "center" }}>
						Upper Body <br /> Strength/Endurance
					</p>
					<p style={{ width: `${tileWidth}px`, textAlign: "center" }}>
						Abdominal <br /> Strength/Endurance
					</p>
					<p style={{ width: `${tileWidth}px`, textAlign: "center" }}>
						Trunk Extensor <br /> Strength
					</p>
				</div>
				<div
					className="grid-container"
					style={{
						height: "520px",
						width: "70vw",
					}}
				>
					{NI_HR.map((item, i) => {
						return (
							<div ref={i == 0 ? ref : null}>
								<div className="chart-NI-HR">{NI_HR[i]}%</div>
								<div className="chart-lable">({lables[i]})</div>
								<small>
									NH IR: 22% | NI : 0% <br /> VL : 0%
								</small>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ReportDashboard;
