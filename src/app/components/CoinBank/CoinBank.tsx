"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { increment, decrement, customInput, reset } from "@/lib/redux/slices/coinBankSlice";

const CoinBank = () => {
  const [coinState, setCoinState] = useState(0);

  const coinValue = useSelector((state: RootState) => state.coinBank.value);
  const dispatch = useDispatch();

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoinState(+event.currentTarget.value);
  };

  const resetHandler = () => {
    setCoinState(0);
    dispatch(reset());
  };

  return (
    <>
      <h1 className="text-lg  dark:text-gray-400">저금통</h1>
      <p>{coinValue ? `${coinValue}원 모았어요.` : "모은 돈이 없어요!"}</p>
      <button
        type="button"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => dispatch(increment())}
      >
        100원 넣기
      </button>
      <button
        type="button"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => dispatch(decrement())}
      >
        100원 빼기
      </button>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="천원을 몇 장 넣어요!!"
        onChange={inputChangeHandler}
        value={coinState}
      />
      <button
        type="button"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => dispatch(customInput(coinState))}
      >
        천원 넣기
      </button>
      <button
        type="button"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={resetHandler}
      >
        저금통 깨버리기
      </button>
    </>
  );
};

export default CoinBank;
