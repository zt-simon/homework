/**
 * Created by dllo on 17/8/16.
 */
import React,{Component} from 'react';
import Unlogin from './Unlogin';
import User from './User';
import Login from './Login';
class Control extends Component{
    constructor(props){
        super(props)
        this.state = {
            status:'unLogin',
            username:''
        }
    }
    changeUser=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    changeStatus = ()=>{
        this.setState({
            status:'Login'
        })
    }
    changeStatus1 = ()=>{
        this.setState({
            status:'User'
        })
    }
    changeStatus2 = ()=>{
        this.setState({
            status:'unLogin',
            username:''
        })
    }

    render(){
        if(this.state.status==='unLogin'){
            return <Unlogin click={this.changeStatus}/>
        }
        if(this.state.status==='Login'){
            return <Login change={this.changeUser} click={this.changeStatus1}/>
        }
        if(this.state.status==='User'){
            if(this.state.username!==''){
                return <User username={this.state.username} click={this.changeStatus2}/>
            }

        }

    }

}

export default Control;