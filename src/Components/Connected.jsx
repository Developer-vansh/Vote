import React, { useState } from "react";

const Connected = (props) => {
  const [selectedOption, setSelectedOption] = useState("Vote"); // State to manage selected option
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleCandidateClick = (index) => {
    setSelectedCandidate(props.candidates[index]);
    props.handleNumberChange({ target: { value: index } });
  };

  const img = [
    "https://themayanagari.com/wp-content/uploads/2021/03/Bjp-Logo-2.png",
    "https://s3.ap-southeast-1.amazonaws.com/cdn.deccanchronicle.com/sites/default/files/AAP_0_2_1_1.jpg",
    "https://th.bing.com/th/id/OIP.CA4uFWml6kEdL6CKY8RRSgHaEK?rs=1&pid=ImgDetMain",
    "https://indianliberals.in/wp-content/uploads/2021/08/Swatantra-party.png"
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="sidebar bg-gray-900 text-white p-4 flex flex-col items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-4">Easy Vote3</h1>
          <button
            className={`sidebar-option w-full py-2 px-4 mb-2 rounded-md focus:outline-none ${
              selectedOption === "Vote" ? "bg-blue-500" : ""
            }`}
            onClick={() => setSelectedOption("Vote")}
          >
            Vote
          </button>
          <button
            className={`sidebar-option w-full py-2 px-4 mb-2 rounded-md focus:outline-none ${
              selectedOption === "Live Stats" ? "bg-blue-500" : ""
            }`}
            onClick={() => setSelectedOption("Live Stats")}
          >
            Live Stats
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <img
            src="https://cdn.mrctv.org/files/styles/large/s3/2020-11/taes.jpg?itok=lJ_UvGRU"
            alt="Logo"
            className="rounded-full border-4 w-32 h-32 border-white"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content flex-grow bg-gray-100 p-8">
        {selectedOption === "Vote" && (
          <div className="vote-section">
            <h1 className="text-3xl font-semibold mb-8 text-center">Welcome To Live Voting</h1>
            <h1 className="ctext-3xl font-semibold mb-8 text-center">Time Left: {props.remainingTime}</h1>
            <h2 className="text-xl font-semibold mb-4 text-center">Select Your Party</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {props.candidates.slice(0, 4).map((candidate, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center rounded-full bg-white shadow-md p-4 ${
                    selectedCandidate?.name === candidate.name ? "border-4 border-yellow-500" : ""
                  } hover:shadow-lg hover:border-4 hover:border-blue-500 cursor-pointer`}
                  onClick={() => handleCandidateClick(index)}
                >
                  <img
                    src={img[index]}
                    alt={candidate.name}
                    className="candidate-image w-24 h-24 md:w-30 md:h-30 rounded-full object-cover mb-2"
                  />
                  <p className="text-sm font-semibold">{candidate.name}</p>
                </div>
              ))}
            </div>
            {selectedCandidate && (
              <div className="mt-8 text-center">
                <h2 className="text-xl font-semibold">Selected Party:</h2>
                <p className="text-lg">{selectedCandidate.name}</p>
              </div>
            )}
            {props.showButton ? (
                <div className="mt-8 text-center text-xl  text-red-600 font-bold">You have already voted</div>
            ) : (
              <div className="voting-section mt-8 flex justify-center">
                <button
                  className="vote-button py-2 px-4 bg-teal-500 hover:bg-teal-700 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  onClick={props.voteFunction}
                >
                  Cast Your Vote!
                </button>
              </div>
            )}
          </div>
        )}
        {selectedOption === "Live Stats" && (
          <div className="live-stats-section">
            <h1 className="text-3xl font-semibold mb-8 text-center">Live Stats</h1>
            <div className="overflow-x-auto">
              <table className="w-full rounded-md shadow-md">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left border border-white">Candidate #</th>
                    <th className="px-4 py-2 text-left border border-white">Candidate Name</th>
                    <th className="px-4 py-2 text-left border border-white">Votes</th>
                  </tr>
                </thead>
                <tbody>
                  {props.candidates.map((candidate, index) => (
                    <tr key={index} className="hover:bg-gray-200">
                      <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                      <td className="px-4 py-2 border border-gray-300">{candidate.name}</td>
                      <td className="px-4 py-2 border border-gray-300">{candidate.voteCount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Connected;
