import React from "react";
import '../../scss/components/HistoryPsw.scss';

export let HistoryPsw = (props) => <div className= 'historyList'><div className='headerHistory'> Last 5: </div><ul>{props.pswArr.map((item, i) => <li key = {item.concat(i)}>{item}</li>)}</ul> </div>;