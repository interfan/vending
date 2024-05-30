import React, { useContext} from "react";
import {createRoot} from 'react-dom/client';

import "./output.css";

import Machine from "./components/Machine";
import InputCoin from "./components/InputCoin";
import {CartProvider, CartContext} from './context/cart.js'

function App() {
    const {productList, coin, onOk, onCoinChanged, onBuy, total, returnedTotal, onCancel, onItemClick } = useContext(CartContext)

    return (
        <div>
            <Machine
                productList={productList}
                coin={coin}
                onOk={onOk}
                onCoinChanged={onCoinChanged}
                onBuy={onBuy}/>

            <div className="fixed bottom-0 flex items-center justify-center py-4 z-5 mx-4">
                <div className="container">
                    <div
                        className="flex flex-wrap items-center justify-between rounded-lg border bg-white dark:bg-gray-800 p-4">
                        <div className="w-full flex items-center px-2">
                            <div className="mb-6 md:mb-0">
                                <div className="text-sm font-medium text-body-color dark:text-gray-300">
                                    <InputCoin
                                        coin={coin}
                                        total={total}
                                        returnedTotal={returnedTotal}
                                        onCoinChanged={onCoinChanged}
                                        onBuy={onBuy}
                                        onCancel={onCancel}
                                        onItemClick={onItemClick}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <CartProvider >
        <App/>
    </CartProvider>
);