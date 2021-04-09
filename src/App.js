import {Component} from 'react';
import './app.css'
import MyContext from './MyContex'
import Tasks from './tasks';
import AddTask from './addTasks'
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            lists:['t1','t1','t1','t1','t1']
        }
    }
    addTasks=(task)=>{
        const lists=[...this.state.lists];
        lists.unshift(task);
        this.setState({
lists:lists
        })
    }
    removeTask=(index)=>{
        let lists=[...this.state.lists];
        lists=[...lists.slice(0,index),...lists.slice(index+1)];
        this.setState({lists:lists})
    }
    render(){
        return(
            <div className="App">
             <MyContext.Provider value={{lists:this.state.lists,addTask:this.addTasks,removeTask:this.removeTask}} >
<Tasks/>
<AddTask/>
             
             </MyContext.Provider>
            </div>
        )
    }
}
export default App;