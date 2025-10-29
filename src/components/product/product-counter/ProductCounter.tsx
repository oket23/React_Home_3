import ProductButton from "../product-button/ProductButton.tsx";
import ProductItem from "../product-item/ProductItem.tsx";
import { useState, useEffect } from "react";

type ProductCounterProps = {
    name: string;
    quantity : number;
    description : string;
    price : number;
}

const ProductCounter = ({name,quantity,description,price}: ProductCounterProps) => {
    const [count, setCount] = useState(quantity);

    useEffect(() => {
        setCount(quantity);
    }, [quantity]);

    const handleClick = (variant: 'plus' | 'minus') => {
        setCount((prev) => (variant === "plus" ? prev + 1 : (prev > 0 ? prev - 1 : 0)));
    }

    return (
        <div className="flex flex-col gap-2 md:gap-4 w-full border border-gray-300 rounded-2xl shadow-lg p-4 md:p-5 max-w-xs md:max-w-sm">
            <div className="flex flex-col gap-2">
                <ProductItem variant="name" content={name} />
                <ProductItem variant="description" content={description} />
                <ProductItem variant="price" content={`${price}$`} />
                <ProductItem variant="quantity" content={`Кількість: ${count} шт.`} />
            </div>
            <div className="flex flex-row gap-1">
                <ProductButton onClick={() => handleClick("plus")} variant="plus"/>
                <ProductButton onClick={() => handleClick("minus")} variant="minus"/>
            </div>
        </div>
    );
};

export default ProductCounter;