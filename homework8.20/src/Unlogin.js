/**
 * Created by dllo on 17/8/16.
 */
import React,{Component} from 'react';

class Unlogin extends Component {
    render(){
        return(
            <div>
                <span>未登录</span>
                <br/>
                <button onClick={this.props.click}>登录</button>
            </div>
        )
    }
}

export default Unlogin;
