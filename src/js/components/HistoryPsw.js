import React from "react";
import '../../scss/components/HistoryPsw.scss';

export let HistoryPsw = (props) =>   <div className= 'historyList'>Last 5:<ul>{props.pswArr.map((item, i) => <li key = {item.concat(i)}>{item}</li>)}</ul> </div>;