import {PureComponent} from 'react'
class  Form extends PureComponent
{

	render()
	{
		return(
		<div>
		   <br />
		   <input type="number" value={this.props.user.userId} placeholder="enter userid here..."/><br /><br />
		   <input type="number" value={this.props.user.id} placeholder="enter id here..."/><br /><br />
		   <input type="text" value={this.props.user.title} placeholder="enter title here..."/><br /><br />
		   <input type="text" value={this.props.user.body} placeholder="enter body here..." onChange={(e)=>{e.target.value="sumit"}}/><br /><br /><br />
		</div>
		)
	}
}

export default Form;