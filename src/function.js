
import React from 'react'
import Button from 'react-bootstrap/Button'
import {Table} from 'react-bootstrap'
let result = 100;
export default class Users extends React.Component{

constructor(){
    super();
    this.state = {data:1};
    this.inputRef = React.createRef();
}
setData(){
    this.setState({data: this.state.data +1});
}
componentDidMount()
{
    console.warn(this.inputRef)
    this.inputRef.current.style.fontFamily = "cursive"
}
render(){

 return (<div class="App">
 	<h1 ref = {this.inputRef}>I am Sumit {this.state.data}</h1>

    <Button ref = {this.inputRef} variant ="outline-danger" onClick = {()=>this.setData()}>CLick me</Button>
 	<p class="">Chalo sikho</p>
 	</div>)
}
}
    let arr = [{name:'Sumit',mobile:8237511757,email:'sumitvishwakarma6767@gmail.com',Address :[{house:10,city:'kalyan',country:'India'},{house:10,city:'kalyan',country:'India'},{house:10,city:'kalyan',country:'India'}]},
    {name:'Pratik',mobile:8983588748,email:'pratiksingh70@gmail.com',Address :[{house:10,city:'kalyan',country:'India'},{house:10,city:'kalyan',country:'India'},{house:10,city:'kalyan',country:'India'}]},
    {name:'Anuj',mobile:9093588744,email:'anujpanchal67@gmail.com',Address :[{house:10,city:'kalyan',country:'India'},{house:10,city:'kalyan',country:'India'},{house:10,city:'kalyan',country:'India'}]},
    {name:'Shivam',mobile:9023123411,email:'shivammishra78@gmail.com',Address :[{house:10,city:'kalyan',country:'India'},{house:10,city:'kalyan',country:'India'},{house:10,city:'kalyan',country:'India'}]}];

export function Map(){
  return(
    <div>
    <br /><br />
  <React.Fragment>
     <Table striped bordered hover border = "1px">
     <tbody>
       <tr border="1">
          <th>Sr No.</th>
          <th>Name</th>
          <th>Mobile No.</th>
          <th>Email-ID</th>
          <th>Address</th>
       </tr>
      
       {
        arr.map((User,i)=> 
               <tr key ={i}>
               <td>{i+1}</td>
               <td>{User.name}</td>
               <td>{User.mobile}</td>
               <td>{User.email}</td>
              <td><Table striped variant = "dark" bordered hover><tbody>{
                User.Address.map((Add,i)=>
                <tr key ={i}>
                <td>{i+1}</td>
                <td>{Add.house}</td>
                <td>{Add.city}</td>
                <td>{Add.country}</td>
                </tr>
                )
               }</tbody></Table></td>
               </tr>
               )
       }
       </tbody>
     </Table>
  </React.Fragment>
  </div>

    )

}