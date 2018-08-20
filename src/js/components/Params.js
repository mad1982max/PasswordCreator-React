import {Component} from "react";
import React from "react";
import '../../scss/components/Params.scss';

export default class Params extends Component {
    render(props) {
        return (
            <div className= 'params' id = 'params'>
                <h3>Parameters:</h3>
                <div className= 'box'><input type = 'number' name= 'length' min = '5' max = '18' size = '2' onChange={(e) => this.props.inputChange(e)} value={this.props.params.length}/> <span>length</span></div><br />
                <label className= 'box'> <input type = 'checkbox' name= 'isLetters' onChange={(e) => this.props.inputChange(e)} checked = {this.props.params.isLetters}/><span className= 'checkboxText'>letters</span></label><br />
                <label className= 'box'><input type = 'checkbox' name= 'isUpper' onChange={(e) => this.props.inputChange(e)} checked = {this.props.params.isUpper} /><span className= 'checkboxText'>uppercase</span></label><br />
                <label className= 'box'><input type = 'checkbox' name= 'isNums' onChange={(e) => this.props.inputChange(e)} checked = {this.props.params.isNums}/><span className= 'checkboxText'>numbers</span></label><br />
                <label className= 'box'><input type = 'checkbox' name= 'isSymbols' onChange={(e) => this.props.inputChange(e)} checked = {this.props.params.isSymbols} /><span className= 'checkboxText'>symbols</span></label><br />
            </div>
        )
    }
}