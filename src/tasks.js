import {Component} from 'react';
import MyContext from './MyContex'
class Tasks extends Component{

    
render(){
    const tasks=this.context.lists.map((task,index)=><li onClick={()=>this.context.removeTask(index)}>{task}</li>
    )
    return(
        <div>
            <ul>

{tasks}
            </ul>

        </div>
    )
}
}
Tasks.contextType=MyContext;
export default Tasks;