import React from 'react';

export default class Student extends React.Component{
	constructor()
	{
		super()
		this.state = {
			data:'SUMIT'
		}
		console.warn("12345678")
	}
	componentDidUpdate(){
		console.warn("0000000")
	}
	render()
	{
		console.warn("+++++++++++")
		return(
			<div>
			<h1 style={{backgroundColor:'red'}}>{this.props.name}</h1>
			<h3><span style={{backgroundColor:'white',color:'red',borderRadius:'10px',border:'2px dashed green',padding:10}}>Mobile No : </span>&nbsp;{this.props.other.mobile}</h3>
			<button onClick = {()=>{this.props.get(this.props.name);this.setState({data:"Pratik"})}}><h4>{this.state.data}</h4></button>
			</div>
			);
	}
}

