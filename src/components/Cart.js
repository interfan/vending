import React, {useContext} from 'react'
import {CartContext} from '../context/cart.js'
import Modal from './ModalCart.js'

export default function Cart({onBuy}) {

    const {cartItems, getCartTotal, removeFromCart, open, handleClose, handleOpen} = useContext(CartContext)

    return (
        <div>
            {!open && (

                <div className="fixed top-4 right-4">
                    <button
                        className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                        onClick={handleOpen}>Cart ({cartItems.length})</button>
                </div>
            )}
            <Modal
                isOpen={open}
                onClose={handleClose}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                getCartTotal={getCartTotal}
                onBuy={onBuy}/>
        </div>
    )
}