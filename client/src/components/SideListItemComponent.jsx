export default function SideListItemComponent({ props }) {
    const [products, CartItems, setCartItems] = props;
    const calculate = ({ parentElement }) => {
        const itemContainerID = parseInt(parentElement.parentElement.parentElement.dataset.type);
        let positionOfItemInCart;
        for(let i = 0; i < CartItems.length; i++) {
            if(CartItems[i].ProductID == itemContainerID) positionOfItemInCart = i;
        }
        if(parentElement.classList[0] === 'plus') CartItems[positionOfItemInCart].Quantity++;
        else CartItems[positionOfItemInCart].Quantity--;
        if(CartItems[positionOfItemInCart].Quantity <= 0) CartItems.splice(positionOfItemInCart, 1);
        setCartItems([...CartItems]);
    }
    return CartItems.map(({ ProductID, Quantity }, i) => {
        return (
            <div key={i} data-type={ProductID} className="item">
                <div className="image">
                    <img src="assets/Lion2.webp" alt="Image of Lion" />
                </div>
                <div className="name">{products[ProductID - 1].Name}</div>
                <div className="totalPrice">${products[ProductID - 1].Price * Quantity}</div>
                <div className="quantity">
                    <span onClick={({ target }) => calculate(target)} className="minus"><box-icon name='chevron-left' ></box-icon></span>
                    <span>{Quantity}</span>
                    <span onClick={({ target }) => calculate(target)} className="plus"><box-icon name='chevron-right'></box-icon></span>
                </div>
            </div>
        );
    });
}