import {useState} from "react";

const NameForm = () => {
    const [name, setName] = useState('')

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-6 gap-5">
            <p className="text-xl font-medium text-gray-800 text-center">{name ? `Привіт, ${name}` : '...'}</p>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent "
                placeholder="Введіть ім’я"
            />
        </div>
    );
};

export default NameForm;