import PropTypes from 'prop-types'
import {createContext, useState, useEffect} from 'react'
import * as React from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItems,
        setCartItems] = useState(localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [])

    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart) {
            setCartItems(cartItems.map((cartItem) => cartItem.id === item.id
                ? {
                    ...cartItem,
                    quantity: cartItem.quantity + 1
                }
                : cartItem));
        } else {
            setCartItems([
                ...cartItems, {
                    ...item,
                    quantity: 1
                }
            ]);
        }
    };

    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        } else {
            setCartItems(cartItems.map((cartItem) => cartItem.id === item.id
                ? {
                    ...cartItem,
                    quantity: cartItem.quantity - 1
                }
                : cartItem));
        }
        onItemClick(item.price);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    useEffect(() => {
        const data = localStorage.getItem('cartItems');
        if (data) {
            setCartItems(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const [productList,
        setProducts] = useState([]);

    useEffect(() => {
        fetch('https://api.mockfly.dev/mocks/a3c3d30f-2ffd-491f-af1c-a4c2ebaca096/products', {
            headers: new Headers({'Authorization': '123456789', 'Content-Type': 'application/x-www-form-urlencoded'})
        }).then((response) => response.json()).then((data) => {
            setProducts(data);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

    const [coin,
        setCoin] = useState(localStorage.getItem('total')
        ? parseFloat(JSON.parse(localStorage.getItem('total'))).toFixed(2)
        : '0.00');
    const onCoinChanged = total => {
        setCoin(total);
    };
    const onOk = price => {
        localStorage.setItem('total', JSON.stringify((coin - price).toFixed(2)));
        setCoin((coin - price).toFixed(2));
    };

    const [total,
        setTotal] = useState(localStorage.getItem('total')
        ? parseFloat(JSON.parse(localStorage.getItem('total'))).toFixed(2)
        : coin);
    const [returnedTotal,
        setReturnedTotal] = useState('0.00');

    useEffect(() => {
        setTotal(localStorage.getItem('total')
            ? parseFloat(JSON.parse(localStorage.getItem('total'))).toFixed(2)
            : coin);
    }, [coin]);

    const onItemClick = value => {
        setReturnedTotal('0.00');
        const newTotal = (parseFloat(total) + value).toFixed(2);
        localStorage.setItem('total', JSON.stringify(newTotal));
        setTotal(newTotal);
        onCoinChanged(newTotal);
    };
    const onCancel = () => {
        setReturnedTotal(total);
        const newTotal = '0.00';
        localStorage.setItem('total', JSON.stringify(newTotal));
        setTotal(newTotal);
        onCoinChanged(newTotal);
    };
    const onBuy = () => {
        setReturnedTotal(total);
        const newTotal = '0.00';
        localStorage.setItem('total', JSON.stringify(newTotal));
        setTotal(newTotal);
        onCoinChanged(newTotal);
        clearCart();
        handleClose();
    };

    const [open,
      setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <CartContext.Provider
            value={{
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
            getCartTotal,
            productList,
            coin,
            total,
            returnedTotal,
            onCoinChanged,
            onOk,
            onItemClick,
            onCancel,
            onBuy,
            open,
            handleClose,
            handleOpen
        }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};