import { AiFillEye } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

const TransActions = ({ txs }) => {
  return (
    <div className="mt-20 px-6 py-6 w-full border border-violet-400 rounded-xl bg-violet-200">
      <div className=" rounded-lg border border-violet-800  sm:p-6 lg:p-8 bg-violet-200 overflow-y-auto  ">
        <div className="p-4">
          <h1 className="text-xl pb-5 font-semibold text-center border-b border-violet-800">
            Recent transactions
          </h1>
          {txs.map((item, index) => (
            <div
              id="alert-additional-content-4"
              className="p-4 pt-5 mb-4 mt-5 shadow-lg bg-yellow-100 rounded-lg "
              role="alert"
              key={index}
            >
              <div className="flex items-center">
              <BsFillInfoCircleFill className="w-5 h-5 mr-3 text-yellow-700 hover:bg-yellow-800"/>
                <h3 className="text-lg font-medium text-yellow-700 dark:text-yellow-800">
                  Transfer Success
                </h3>
              </div>
              <div className="mt-2 mb-4 text-sm text-yellow-700 dark:text-yellow-800">
                <p>From : {item.from}</p>
                <p>To : {item.to}</p>
                <p>Amount : {item.amount}</p>
              </div>
              <div className="flex">
                <a
                  type="button"
                  target="_blank"
                  href={`https://rinkeby.etherscan.io/tx/${item.txHash}`}
                  className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center "
                  rel="noreferrer"
                >
                  <AiFillEye className="w-5 h-5 mr-3" />
                  View On Ether-scan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransActions;
