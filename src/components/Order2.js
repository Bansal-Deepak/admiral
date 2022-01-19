import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Checkbox from '@material-ui/icons/CheckBox';
import Radio from '@material-ui/icons/Radio';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import '../css/order2.css';

let items = [
    { name: 'banana', quantity: 1, isSelected: true },
    { name: 'apple', quantity: 2, isSelected: false },
    { name: 'chocolates', quantity: 3, isSelected: true, }]
const Order2 = () => {
    return (<div className="top-container">
        <div className="container">
            <div className="input-box" ><input className="input" type="text" placeholder="Enter item..." />
            <AddIcon style={{color:'#ec645b'}} />
            </div>
            <div>{items.map(({ name, quantity, isSelected }, index) => {

                return (<div><div className="item-box" key={name}>
                    <div className="itemname"><Radio style={{
                        color: "white",
                    }} />
                        <span className="nameinput">{name}</span></div>
                    <button className="button">
                        <ArrowLeftIcon style={{ fontSize: "large" }} />
                        {quantity}
                        <ArrowRightIcon style={{ fontSize: "large" }} />
                    </button>
                </div><hr className="line"></hr></div>)

            })}</div>
            <div className="final">
                <h2 className="total">Total</h2>
                <button className="pay">Pay</button>
            </div>
        </div>

    </div>)
}

export default Order2;