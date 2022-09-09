const Navbar = ({ connectWallet, disconnectWallet, Address }) => {
  return (
    <div>
      <div>
        <div>
          <nav className="bg-violet-100 border-gray-200 px-6 sm:px-4 py-6 ">
            <div className="container flex flex-wrap justify-between items-center mx-auto ">
              {Address == null && (
                <button
                  type="submit"
                  onClick={connectWallet}
                  className="text-white text-sm bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200  font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Connect
                </button>
              )}

              {Address !== null && (
                <button
                  type="submit"
                  onClick={disconnectWallet}
                  className="text-white text-sm bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Disconnect
                </button>
              )}

              <div className="p-6 rounded-lg border shadow-md bg-violet-300 border-violet-700">
                <div
                  className="hidden w-full md:block md:w-auto"
                  id="mobile-menu"
                >
                  <h2 className="text-violet-800 text-base">
                    Your Address :
                    {Address !== null && (
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium ml-4 px-1 py-0.5 rounded ">
                        {Address}
                      </span>
                    )}
                    {Address == null && (
                      <span className="bg-red-100 text-red-800 text-sm font-medium ml-4 px-1 py-0.5 rounded ">
                        Your wallet is not connected, click the "connect"
                        button.
                      </span>
                    )}
                  </h2>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
