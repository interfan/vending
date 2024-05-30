import React from "react";

const Modal = ({
    isOpen,
    onClose,
    getCartTotal,
    cartItems,
    onBuy,
    removeFromCart
}) => {
    if (!isOpen) 
        return null;
    
    return (
        <div
            id="modelConfirm"
            className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
            <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">

                <div
                    className="max-w-md mx-auto mt-16 bg-white rounded-lg overflow-hidden md:max-w-lg border border-gray-400">
                    <div className="px-4 py-2 border-b border-gray-200">
                        <div className="font-semibold text-gray-800">Shopping Cart</div>
                    </div>
                    <div className="flex flex-col divide-y divide-gray-200 overflow-auto h-64">
                        {cartItems.map((item) => (
                            <div className="flex items-center py-4 px-6" key={item.name}>
                                <img
                                    className="w-16 h-16 object-cover rounded"
                                    src={item.productImageUrl}
                                    alt={item.name}/>
                                <div className="ml-3">
                                    <h3 className="text-gray-900 font-semibold">{item.name}</h3>
                                    <p className="text-gray-700 mt-1">Price: ${item.price.toFixed(2)} Quantity: {item.quantity}</p>
                                </div>
                                <button
                                    className="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                                    onClick={() => removeFromCart(item)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
                        <h3 className="text-gray-900 font-semibold">Total: ${getCartTotal().toFixed(2)}</h3>
                        <button
                            className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                            onClick={() => onBuy()}>
                            Buy
                        </button>
                        <button
                            className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg" 
                            onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Modal;
