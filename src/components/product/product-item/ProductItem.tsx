import {cn} from "../../../untils/cn.ts";
import type {ReactNode} from "react";

type ProductItemProps = {
    variant?: 'name' | 'description' | 'price' | 'quantity';
    content: ReactNode;
}

const ProductItem = ({variant, content}: ProductItemProps) => {
    return (
        <span
            className={cn(
                variant === 'name' && 'text-lg font-bold text-gray-900',
                variant === 'price' && 'text-base font-semibold text-green-700',
                variant === 'quantity' && 'text-sm font-medium text-gray-700',
                variant === 'description' && 'text-sm text-gray-500 line-clamp-2'
            )}>
            {content}
        </span>
    );
};

export default ProductItem;