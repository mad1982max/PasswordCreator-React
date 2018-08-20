import {Component} from "react";
import React from "react";
import '../../scss/components/Params.scss';

export default class Params extends Component {
    render(props) {
        return (
            <div className= 'params' id = 'params'>
                <h3>Parametres:</h3>
                <input type = 'number' name= 'length' min = '5' max = '30' size = '2' onChange={(e) => this.props.inputChange(e)} value={this.props.params.length}/> <span>length</span><br />
                <input type = 'checkbox' name= 'isLetters' onChange={(e) => this.props.inputChange(e)} checked = {this.props.params.isLetters}/><span>letters</span><br />
                <input type = 'checkbox' name= 'isUpper' onChange={(e) => this.props.inputChange(e)} checked = {this.props.params.isUpper} /><span>uppercase</span><br />
                <input type = 'checkbox' name= 'isNums' onChange={(e) => this.props.inputChange(e)} checked = {this.props.params.isNums}/><span>numbers</span><br />
                <input type = 'checkbox' name= 'isSymbols' onChange={(e) => this.props.inputChange(e)} checked = {this.props.params.isSymbols} /><span>symbols</span><br />
            </div>
        )
    }
}