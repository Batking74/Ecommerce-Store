export default function ItemComponent({ props }) {
    const [products, CartItems, setCartItems] = props;
    const addToCart = (e) => {
        const itemContainerID = parseInt(e.target.parentElement.id);
        const positionOfItemInCart = CartItems.findIndex(({ ProductID }) => ProductID == itemContainerID);
        const newCartItems = [...CartItems];

        // Add the item to the cart if the cart is empty, or if the item is not already in the cart.
        if (CartItems.length <= 0 || positionOfItemInCart < 0) {
            newCartItems.push({
                ProductID: itemContainerID,
                Quantity: 1
            });
        }
        // If the item is already in the cart, increase its quantity.
        else newCartItems[positionOfItemInCart].Quantity++;

        // Display new added items
        setCartItems(newCartItems);
    }

    return products.map(({ Name, Price, Image }, i) => {
        return (
            <div key={i + 1} id={i + 1} className="item">
                <img src={Image} alt={Name} />
                <h2>{Name}</h2>
                <div className="price">${Price}</div>
                <button onClick={addToCart} className="addToCartBtn">Add To Cart</button>
            </div>
        )
    });
}