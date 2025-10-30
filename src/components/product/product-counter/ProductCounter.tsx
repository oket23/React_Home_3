import ProductButton from "../product-button/ProductButton.tsx";
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
               <span className="text-lg font-bold text-gray-900">{name}</span>
               <span className="text-sm text-gray-500 line-clamp-2">{description}</span>
               <span className="text-base font-semibold text-green-700">{price}$</span>
               <span className='text-sm font-medium text-gray-700'>Кількість: ${count} шт.</span>
            </div>
            <div className="flex flex-row gap-1">
                <ProductButton onClick={() => handleClick("plus")} variant="plus"/>
                <ProductButton onClick={() => handleClick("minus")} variant="minus"/>
            </div>
        </div>
    );
};

export default ProductCounter;