import React, { Component } from 'react';
import PasswordGenerator from './PasswordGenerator';
import Params from './Params';
import {ButtonGen} from './ButtonGen';
import {CurrentPsw} from './CurrentPsw';
import {HistoryPsw} from './HistoryPsw';
import '../../scss/components/App.scss';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {length: 8, isLetters: true, isUpper: false, isNums: false, isSymbols: false, current: '', pswArr: []};
    }

    inputChange = (e) => {
        let value = e.target.type === 'checkbox'? e.target.checked: e.target.value;
        this.setState({[e.target.name]: value});
    };

    updatePswList = () => {

        if (this.state.pswArr.length < 5) {
            this.setState({pswArr: [...this.state.pswArr, this.state.current]})
        } else {
            let arr = this.state.pswArr.filter((item,i) => i !== 0);
            this.setState({pswArr: [...arr, this.state.current]})
        }
    };

    generate = () => {
        let {length, isLetters, isUpper, isNums, isSymbols, current, pswArr} = this.state;
        let pswGen = new PasswordGenerator(length, isLetters, isUpper, isNums, isSymbols);
        current = pswGen.gen();

        let promise = new Promise(resolve => {
            this.setState({current: current});
            resolve();
        });
        promise.then(() => this.updatePswList())
    };

    render() {
        let {length, isLetters, isUpper, isNums, isSymbols, current, pswArr} = this.state;
        return (
            <div className = 'app'>
                <div className= 'header'> Password Creator </div>
                <Params inputChange = {this.inputChange}  params = {{length, isLetters, isUpper, isNums, isSymbols}} />
                <ButtonGen gen = {this.generate}/>
                <CurrentPsw current = {current} />
                <HistoryPsw pswArr = {pswArr} />
            </div>
        )
    }
}
