import {Component} from "react";
import React from "react";
import '../../scss/components/Params.scss';

export default class Params extends Component {
    render() {
        return (
            <div className= 'params' id = 'params'>
                <div>Parameters:</div>

                <div className= 'box'>
                    <input type = 'number'
                           name= 'length'
                           min = '3'
                           max = '13'
                           size = '2'
                           onChange={(e) => this.props.inputChange(e)}
                           value={this.props.params.length}/>
                    <span>length</span>
                </div>

                <label className= 'box'>
                    <input type = 'checkbox'
                           name= 'isLetters'
                           onChange={(e) => this.props.inputChange(e)}
                           checked = {this.props.params.isLetters}/>
                    <span className= 'checkboxText'>letters</span>
                </label>

                <label className= 'box'>
                    <input type = 'checkbox'
                           name= 'isUpper'
                           onChange={(e) => this.props.inputChange(e)}
                           checked = {this.props.params.isUpper} />
                    <span className= 'checkboxText'>uppercase</span>
                </label>

                <label className= 'box'>
                    <input type = 'checkbox'
                           name= 'isNums'
                           onChange={(e) => this.props.inputChange(e)}
                           checked = {this.props.params.isNums}/>
                    <span className= 'checkboxText'>numbers</span>
                </label>

                <label className= 'box'>
                    <input type = 'checkbox'
                           name= 'isSymbols'
                           onChange={(e) => this.props.inputChange(e)}
                           checked = {this.props.params.isSymbols} />
                    <span className= 'checkboxText'>symbols</span>
                </label>
            </div>
        )
    }
}