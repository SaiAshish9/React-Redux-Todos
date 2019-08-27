import React,{Component} from "react";
import Todo from "./Todo";
import {connect} from "react-redux";
import {addTodo,removeTodo} from "./actionCreators";
import {Route} from "react-router"
import NewTodoForm from "./NewTodoForm"

 class TodoList extends Component{
constructor(props){
  super(props);
  this.handleAdd=this.handleAdd.bind(this)

}

handleAdd(val){
  this.props.addTodo(val)
}
// handleSubmit(e){
//   e.preventDefault();
// this.props.addTodo(this.state.task)
//
// e.target.reset()
// }
//
// handleChange(e){
//   this.setState({
//   [e.target.name]:[e.target.value]
// })
// }

removeTodo(id){
  this.props.removeTodo(id);
}

render(){
  let todos=this.props.todos.map((val,index)=>(
    <Todo removeTodo={this.removeTodo.bind(this,val.id)} task={val.task} key={index}/>

  ));
  return (
<div>
<Route path="/todos/new" component={props=>(
  <NewTodoForm {...props} handleSubmit={this.handleAdd}/>
)}/>

<Route exact path="/todos" component={()=><div>
<ul>
{todos}
</ul>
</div>
}/>
</div>

);
}
}

function mapStateToProps(reduxState){
return {
todos:reduxState.todos
}
}

// function mapDispatchToProps(dispatch){
//   return
//   {
//     addTodo:(task)=>{
//       type:"ADD_TODO",
//       task
//
//     }
//   }
// }

export default connect(mapStateToProps,{addTodo,removeTodo})(TodoList);