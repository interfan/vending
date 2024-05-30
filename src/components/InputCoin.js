import React, {useState} from "react";

function InputCoin({onCancel, onItemClick, total, returnedTotal}) {

    const [count,
        setState] = useState(0);

    function increment(e) {
        setState(function (prevCount) {
            if (prevCount < 0.5) {
                return 0.5
            } else if (prevCount === 0.5) {
                return 1
            } else if (prevCount >= 1) {
                return 2
            }
        });
    }

    function decrement() {
        setState(function (prevCount) {
            if (prevCount === 2) {
                return 1
            } else if (prevCount === 1) {
                return 0.5
            } else if (prevCount <= 0.5) {
                return 0
            }
        });
    }

    return (
        <div className="flex flex-row flex-wrap">
            <div className="flex flex-col gap-y-[15px] items-center">
                <div>Inserted: {total} Returned: {returnedTotal}</div>
                <div>
                    <div className="flex items-center justify-center">
                        <button
                            id="decrement-btn"
                            className="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500"
                            onClick={decrement}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                            </svg>
                        </button>
                        <span id="counter" className="text-4xl font-bold mx-4">{count}</span>
                        <button
                            id="increment-btn"
                            className="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-indigo-500 hover:bg-indigo-600"
                            onClick={increment}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6v12M6 12h12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className="flex flex-row gap-x-[15px] gap-y-[15px] flex-wrap justify-center">
                    <div>
                        <button
                            className="w-18 button bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-11 px-8 py-2"
                            onClick={() => onItemClick(count)}>Insert</button>
                    </div>
                    <div>
                        <button
                            className="w-18 button bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-11 px-8 py-2"
                            onClick={onCancel}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputCoin;
