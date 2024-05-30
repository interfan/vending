import React, {useContext} from "react";
import SlotItem from "./SlotItem";
import {CartContext} from '../context/cart.js'
import Cart from './Cart.js'

function Machine({productList, coin, onOk, onBuy}) {
    const {addToCart} = useContext(CartContext);

    return (
        <div>
            <div className="text-center p-10">
                <h1 className="font-bold text-4xl mb-4">Vending machine</h1>
            </div>
            <Cart onBuy={onBuy}/>

            <section
                id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                {productList && productList.map(p => {
                    return <SlotItem key={p.id} product={p} coin={coin} onOk={onOk} addToCart={addToCart}/>;
                })}
                <div className='flex flex-col justify-center bg-gray-100'></div>
            </section>
        </div>
    );
}
export default Machine;
