const ReadSmartContract = ({ handleSubmit, contractInfo, changeHandler }) => {
  return (
    <div>
      <div>
        <div className="w-full rounded-xl sm:w-auto shadow-lg mx-auto p-4 border border-violet-400 sm:p-6 lg:p-8 bg-violet-200 ">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h3 className="text-xl font-medium text-gray-900 ">
              Read from smart contract
            </h3>
            <div>
              <label
                htmlFor="Address"
                className="block mb-2 text-sm font-medium text-gray-900 cursor-pointer "
              >
                Contract Address (ERC20)
              </label>
              <input
                type="text"
                name="addr"
                id="Address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-violet-600"
                placeholder="ERC20 contract address"
                onChange={changeHandler}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
            >
              Get token info
            </button>
            <div className="flex flex-col">
              <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 table-fixed  rounded-lg">
                      <thead className="bg-gray-100 ">
                        <tr>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                          >
                            Symbol
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                          >
                            Total Supply
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200  ">
                        <tr className="hover:bg-gray-50  hover:rounded-lg rounded-lg">
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                            {contractInfo.tokenName}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
                            {contractInfo.tokenSymbol}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                            {String(contractInfo.totalSupply)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReadSmartContract;
