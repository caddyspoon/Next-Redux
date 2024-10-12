import CoinBank from "./components/CoinBank/CoinBank";

export default function Home() {
  return (
    <div className="mt-10">
      <div className="mx-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <CoinBank />
      </div>
    </div>
  );
}
