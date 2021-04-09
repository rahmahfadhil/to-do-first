import  {Component} from 'react'
import MyContext from './MyContex'
class AddTask extends Component{
    handeSubmit=(event)=>{
event.preventDefault();
const task=event.target.children[0].value;
this.context.addTask(task);
    }
    render(){

        return(
            <form onSubmit={this.handeSubmit}>
                    <input type='text'></input>
                    <input type='submit' value='submit'></input>

            </form>
        )
    }
}
AddTask.contextType=MyContext;

export default AddTask;