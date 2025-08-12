import React from 'react';

interface ItemListContainerProps {
    greeting: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
    return (
        <div>
            <h1>{greeting}</h1>
            {/* Future item list will be rendered here */}
        </div>
    );
};

export default ItemListContainer;