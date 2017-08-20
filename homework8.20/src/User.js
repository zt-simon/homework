/**
 * Created by dllo on 17/8/16.
 */
import React,{Component} from 'react';
class User extends Component {
    render(){
        return(
            <div>
                <span>用户{this.props.username}登录</span>
                <br/>
                <button onClick={this.props.click}>退出</button>
            </div>
        )
    }
}
export default User;