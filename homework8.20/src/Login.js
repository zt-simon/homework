/**
 * Created by dllo on 17/8/16.
 */
import React,{Component} from 'react';
class Login extends Component {
    render(){
        return(
            <div>
                <input onChange={this.props.change} type="text" placeholder="请输入用户名"/>
                <br/>
                <input type="password" placeholder="请输入密码"/>
                <br/>
                <input onClick={this.props.click} type="button" value="登录"/>
            </div>
        )
    }
}
export default Login