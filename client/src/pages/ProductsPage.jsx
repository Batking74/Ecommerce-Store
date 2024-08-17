// Importing Modules/Packages
import SideListItemComponent from "../components/SideListItemComponent";
import ItemComponent from "../components/ItemComponent";
import { Fragment, useState } from "react";

const products = [
    {
        Name: 'KING NAZ',
        Price: 200,
        Quantity: 1,
        Image: 'assets/Lion2.webp'
    },
    {
        Name: 'KING NAZ',
        Price: 500,
        Quantity: 1,
        Image: 'assets/Lion2.webp'
    },
    {
        Name: 'KING NAZ',
        Price: 700,
        Quantity: 1,
        Image: 'assets/Lion2.webp'
    },
    {
        Name: 'KING NAZ',
        Price: 100,
        Quantity: 1,
        Image: 'assets/Lion2.webp'
    },
    {
        Name: 'KING NAZ',
        Price: 50,
        Quantity: 1,
        Image: 'assets/Lion2.webp'
    },
    {
        Name: 'KING NAZ',
        Price: 50,
        Quantity: 1,
        Image: 'assets/Lion2.webp'
    },
    {
        Name: 'KING NAZ',
        Price: 50,
        Quantity: 1,
        Image: 'assets/Lion2.webp'
    },
    {
        Name: 'KING NAZ',
        Price: 50,
        Quantity: 1,
        Image: 'assets/Lion2.webp'
    },
    {
        Name: 'KING NAZ',
        Price: 50,
        Quantity: 1,
        Image: 'assets/Lion2.webp'
    },
    {
        Name: 'KING NAZ',
        Price: 50,
        Quantity: 1,
        Image: 'assets/Lion2.webp'
    },
    {
        Name: 'KING NAZ',
        Price: 50,
        Quantity: 1,
        Image: 'assets/Lion2.webp'
    },
    {
        Name: 'KING NAZ',
        Price: 50,
        Quantity: 1,
        Image: 'assets/Lion2.webp'
    },
]

export default function ProductsPage() {
    const [CartItems, setCartItems] = useState([]);

    const toggleShoppingCart = (e) => {
        const body = document.querySelector('body');
        body.classList.toggle('showCart');
    }

    return (
        <Fragment>
            <div className="title-container">
                <header>
                    <div className="title">PRODUCT LIST</div>
                    <div onClick={toggleShoppingCart} className="icon-cart">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                        </svg>
                        <span className="item-counter">{CartItems.length}</span>
                    </div>
                </header>
                <div className="listproduct">
                    <ItemComponent props={[products, CartItems, setCartItems]} />
                </div>
                <div className="cartTab">
                    <h1>Shopping Cart</h1>
                    <div className="listCart">
                        <SideListItemComponent props={[products, CartItems, setCartItems]} />
                    </div>
                    <div className="btn">
                        <button onClick={toggleShoppingCart} className="close">CLOSE</button>
                        <button className="checkout">CHECK OUT</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}