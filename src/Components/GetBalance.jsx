const GetBalance = ({getMyBalance, balanceInfo, setBalanceInfo}) => {
  return (
    <div >
      <div className=" pt-2 px-4 pb-6 w-full border border-violet-400 rounded-xl bg-violet-200">
        <div className="p-4 rounded-lg sm:p-6 lg:p-8  ">
          <div className="flex flex-col pt-4">
            <div className=" overflow-hidden shadow-md sm:rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="">
                  <table className="min-w-full  table-fixed ">
                    <tbody className="bg-white divide-y divide-gray-200  ">
                      <tr className="hover:bg-gray-100 ">
                        <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap ">
                          Address
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
                          {balanceInfo.address}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-100 ">
                        <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap ">
                          Balance
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
                          {balanceInfo.balance}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <button
              type="submit"
              onClick={getMyBalance}
              className="w-full mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Get my balance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetBalance;
