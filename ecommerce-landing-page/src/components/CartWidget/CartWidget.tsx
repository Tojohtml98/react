import React from 'react';

interface CartWidgetProps {
    itemCount: number;
}

const CartWidget: React.FC<CartWidgetProps> = ({ itemCount }) => {
    return (
        <div>
            <span>🛒</span>
            <span>{itemCount > 0 ? itemCount : 0}</span>
        </div>
    );
};

export default CartWidget;