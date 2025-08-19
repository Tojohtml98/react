import React from 'react';

interface ItemListContainerProps {
    greeting: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = (props: ItemListContainerProps) => {
    return (
        <div>
            <h1>{props.greeting}</h1>
            {/* Future item list will be rendered here */}
        </div>
    );
};

export default ItemListContainer;