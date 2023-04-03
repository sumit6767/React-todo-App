import logo from './logo.svg';
import './App.css';
import Users,{Map} from "./function.js"
import React,{use} from 'react'
import Student from './Student.js'
import Member from './Member'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Nav from './link.js'
import {Route} from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import Form from './Form'
import {Link,BrowserRouter,Switch} from 'react-router-dom';
let result=100;

function App() {
//   function func(){
  
//    return a*b;
// }
// function func1(){
//    a = a - 4;
//    b = b - 4;
//   alert(a*b);
// }  return (
const [data,setData] = React.useState(1);
const [value ,changeData] = React.useState(null);
const [print,printData] = React.useState(false);
const [status,statusChange] = React.useState(false);
const [users,setUsers] = React.useState([]);
const [userId,setUserId] = React.useState("");
const [id,setId] = React.useState("");
const [title,setTitle] = React.useState("");
const [body,setBody] = React.useState("");
const [user,currentUser] = React.useState({});
let inputRef = React.useRef(null);

function getList()
{
  fetch("https://jsonplaceholder.typicode.com/posts").then(response=>{
    response.json().then(result=>{
      setUsers(result)
      console.log(result)
      })
    })
}
function deleteRow(id)
{
 console.warn(id);
 // fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
 //  method:"DELETE",
 //  }).then((response)=>{
 //  response.json().then((result)=>{
 //    setUsers(result);
 //    getList();
 //  })
 // })
}

function updateRow(id)
{
  setUserId(users[id-1].userId);
  setId(users[id-1].id);
  setTitle(users[id-1].title);
  setBody(users[id-1].body)
}
React.useEffect(()=>{
   getList();
},[])
function udana()
{
  inputRef.current.textContent = "mai hu"
}
React.useMemo(()=>{
  console.warn("mai sumit")
},[data])

console.warn('======')

function update()
{
  setData(data-1);
}
function change(val)
{
   changeData(val.target.value)
}
function get(data)
{
  alert(data)
}

function updateUser()
{
  let item = {userId,id,title,body};
  fetch(`https://jsonplaceholder.typicode.com/posts/`,{
    method:"POST",
    headers:{
      'Accept':"application/json",
      'Content-type':'application/json; charset="UTF-8"'
    },
    body:JSON.stringify(item),
  }).then(response=>{
    response.json().then(result=>{console.warn(result);getList();})
  })
}

console.warn("++++")
return  (
    
    <div>
    <div class="App">
      <header class="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am sumit learning react JS.
        </p>
       
        <a
          class="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    <br />
    <Table striped hover variant="outline-primary" border="1">
        <tbody>
        <tr>
            <th>{"User Sr.No"}</th>
            <th>ID No.</th>
            <th>Title</th>
            <th>Body</th>
            <th>Delete</th>
            <th>{"Update"}</th>
        </tr>
       
        {
          users.map((user,index)=>{
             return <tr key={index}>
             <td>{user.userId}</td>
             <td>{user.id}</td>
             <td style={{textAlign:'left'}}>{user.title}</td>
             <td>{user.body}</td>
             <td><Button variant ="outline-danger" onClick={()=>{deleteRow(user.id)}}>{"Delete"}</Button></td>
             <td><Button variant ="outline-danger" onClick={()=>{updateRow(user.id)}}>{"Update"}</Button></td>
            </tr>
          })
        }
        </tbody>
    </Table>
    <div>
       <br />
       <input type="number" value={userId} placeholder="enter userid here..." onChange={(e)=>setUserId(e.target.value)} /><br /><br />
       <input type="number" value={id} placeholder="enter id here..." onChange= {(e)=>{setId(e.target.value)}} /><br /><br />
       <input type="text" value={title} placeholder="enter title here..." onChange={(e)=>{setTitle(e.target.value)}}/><br /><br />
       <input type="text" value={body} placeholder="enter body here..." onChange={(e)=>setBody(e.target.value)}/><br /><br /><br />
       <Button variant = "outline-primary" hover onClick={updateUser}>{"Update"}</Button> <br /><br />
    </div>
    </div>
    </div>
  );
}

export default App;
