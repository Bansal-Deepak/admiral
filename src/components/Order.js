import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

import '../css/order.css';
import '../css/popup.css';
import Popup from './Popup';
const Order = () => {
    const [items, setItems] = useState([]);
    const [inputItem, setInputItem] = useState('');
    const [seen, setSeen] = useState(false);

    const changeInput = (e) => {
        setInputItem(e.target.value);
    }

    const toggleSelected = (index) => {
        const toggledItems = [...items];
        toggledItems[index].isSelected = !toggledItems[index].isSelected;
        setItems(toggledItems);
    }

    const addItem = () => {
        if (items.length === 3) { return }
        setItems([...items, { itemName: inputItem, quantity: 1, isSelected: false }])
        setInputItem('');
    }

    const decreaseQuantiy = (index) => {

        if (items[index].quantity !== 0) {
            let newItems = [...items];
            newItems[index].quantity = newItems[index].quantity - 1;
            setItems(newItems);
        }
        return;

    }
    const increaseQuantity = (index) => {
        let newItems = [...items];
        newItems[index].quantity = newItems[index].quantity + 1;
        setItems(newItems);
    }

    const calculateTotal = () => {
        return items.reduce((init, curr) => {
            if(curr.isSelected){
            init = init + curr.quantity;
            }
            return init;
        }, 0);
    }

    const togglePopUp = () => {
        console.log(seen);
        setSeen(!seen);
        console.log(seen);
    }

    return (<div className='app-background'>
        <div className='main-container'>
            <div className="add-item-box"><input type="text" placeholder="Add item ..." onChange={changeInput} value={inputItem} className='add-item-input' /></div>
            <FontAwesomeIcon icon={faPlus} onClick={addItem} />
            <div className="item-list">{items.map(({ itemName, quantity, isSelected }, index) => {
                return (<div className="item-container" key={itemName}>
                    <div className='item-name' onClick={() => toggleSelected(index)}>
                        {isSelected ? (
                            <>
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span className='completed'>{itemName}</span>
                            </>
                        ) : (
                            <>
                                <FontAwesomeIcon icon={faCircle} />
                                <span>{itemName}</span>
                            </>
                        )}
                    </div>
                    <div className="quantity">
                        <button><FontAwesomeIcon icon={faChevronLeft} onClick={() => decreaseQuantiy(index)} /></button>
                        <span>{quantity}</span>
                        <button><FontAwesomeIcon icon={faChevronRight} onClick={() => increaseQuantity(index)} /></button>
                    </div>
                </div>)
            })}
            </div>
            <div className="total">Total : {calculateTotal()}</div>
            <div className="pay" onClick={togglePopUp}>Pay</div>
            {seen && <Popup
      content={<>
        <h2 style={{color:'black'}}>Pay ${calculateTotal()}</h2>
      </>}
      handleClose={togglePopUp}
    />}

        </div></div>)
}
export default Order;