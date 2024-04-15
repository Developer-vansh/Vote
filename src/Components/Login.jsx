import React from "react";

const Login = (props) => {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden">
      <div className="max-w-md w-full rounded-3xl shadow-lg bg-gradient-to-r from-indigo-500 to-blue-700 py-12 px-8 sm:px-12 lg:px-16">
        <div className="px-6 pt-6 pb-4">
          <h1 className="text-3xl font-bold text-center text-white">
            Welcome to Web3 Voting App!
          </h1>
        </div>
        <div className="flex justify-center items-center">
          {/* Replace 'https://your-image-url.com' with the actual URL of your image */}
          <img src="https://webstockreview.net/images/voting-clipart-political-right-1.png" alt="Decentralized Voting" />
        </div>
        <div className="px-6 pb-4 flex flex-col items-center">
          <button
            className="py-3 px-6 bg-transparent text-white font-bold border-2 border-white rounded-md hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={props.connectWallet}
          >
            Login with Metamask
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
