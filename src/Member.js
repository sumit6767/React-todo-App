import Student from './Student.js';

export default function Member(props){
	return(
		<Student name = {props.name} other = {props.other} get = {props.get}/>
		);
}