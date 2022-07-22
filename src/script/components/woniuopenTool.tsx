import styled from "styled-components";
import React from 'react';

const WoniuOpenToolDiv = styled.div`
	position: absolute;
	top:0%;
	left:0%;
	width: 100%;
	height: 100%;
	/* background-color: rgba(0,0,0,0.7); */
`;

class WoniuOpenTool extends React.Component {

	componentDidMount() {
		console.log('WoniuOpen内置工具数量：' + Object.getOwnPropertyNames(this.woniuOpenTool).length);
	}

	woniuOpenTool = {
		banner: function() {
			// banner工具
		}, courseImg: function () {
			// 课程封面图片工具
		}
	}

	render() {
		return (
			<WoniuOpenToolDiv>
				
			</WoniuOpenToolDiv>
		);
	}
}

export default WoniuOpenTool;
