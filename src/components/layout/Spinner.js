import React, {Component} from 'react';
import spinner from "../../spinner.jpeg"
class Spinner extends Component {
    render() {
        return (
            <div>
             <img src={spinner} style={{width:"60px"}} className={"all-center"}/>
            </div>
        );
    }
}

export default Spinner;