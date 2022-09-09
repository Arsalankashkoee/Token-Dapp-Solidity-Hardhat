const WriteSmartContract = ({
  handleTransfer,
  recipientHandler,
  amountHandler,
}) => {
  return (
    <div>
      <div className=" w-full rounded-xl mt-7 sm:w-auto shadow-lg mx-auto p-4 border border-violet-400 sm:p-6 lg:p-8 bg-violet-200 ">
        <form className="space-y-6" onSubmit={handleTransfer}>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Write to contract
          </h3>
          <div>
            <label
              htmlFor="Recipient"
              className="block mb-2 text-sm font-medium text-gray-900 cursor-pointer"
            >
              Recipient address
            </label>
            <input
              type="text"
              id="Recipient"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-violet-600 block w-full p-2.5"
              placeholder="Recipient address"
              onChange={recipientHandler}
            />
          </div>
          <div>
            <label
              htmlFor="Amount"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
            >
              Amount to transfer
            </label>
            <input
              type="text"
              id="Amount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-violet-600 block w-full p-2.5"
              placeholder="Amount to transfer"
              onChange={amountHandler}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Transfer
          </button>
        </form>
      </div>
    </div>
  );
};

export default WriteSmartContract;
