import {cn} from "../../../untils/cn.ts";

type ProductButtonProps = {
    variant?: 'plus' | 'minus';
    onClick: () => void;
}

const ProductButton = ({variant = 'plus', onClick}: ProductButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                'flex justify-center items-center w-full p-3 text-white text-xl font-bold rounded-lg shadow-md transition-all duration-150 ease-in-out active:scale-95',
                variant === 'plus' && ['bg-green-600', 'hover:bg-green-700'],
                variant === 'minus' && ['bg-red-600', 'hover:bg-red-700']
            )}>
            {variant === 'plus' ? '+' : '−'}
        </button>
    );
};

export default ProductButton;