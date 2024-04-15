// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    // Structure to store candidate information
    struct Candidate {
        string name;
        uint256 voteCount;
    }
    // Array to store all candidates
    Candidate[] public candidates;
    address owner; // Address of the contract owner
    mapping(address => bool) public voters; // Mapping to track whether an address has voted or not

    // Variables to store start and end times of the voting period
    uint256 public votingStart;
    uint256 public votingEnd;

    // Constructor to initialize the contract with candidate names and duration in hours
    constructor(string[] memory _candidateNames, uint256 _durationInHours) {
        // Loop through each candidate name and add them to the candidates array
        for (uint256 i = 0; i < _candidateNames.length; i++) {
            candidates.push(Candidate({
                name: _candidateNames[i],
                voteCount: 0
            }));
        }
        owner = msg.sender; // Set the owner of the contract
        votingStart = block.timestamp; // Record the start time of the voting period
        votingEnd = block.timestamp + (_durationInHours * 1 hours); // Calculate the end time of the voting period in seconds
    }

    // Modifier to restrict access to only the contract owner
    modifier onlyOwner {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    // Function to add a new candidate, accessible only by the contract owner
    function addCandidate(string memory _name) public onlyOwner {
        candidates.push(Candidate({
            name: _name,
            voteCount: 0
        }));
    }

    // Function for a voter to cast their vote for a candidate
    function vote(uint256 _candidateIndex) public {
        require(!voters[msg.sender], "You have already voted."); // Check if the sender has already voted
        require(_candidateIndex < candidates.length, "Invalid candidate index."); // Check if the candidate index is valid

        candidates[_candidateIndex].voteCount++; // Increment the vote count for the selected candidate
        voters[msg.sender] = true; // Mark the sender as having voted
    }

    // Function to get the list of all candidates and their respective vote counts
    function getAllVotesOfCandidates() public view returns (Candidate[] memory){
        return candidates;
    }

    // Function to check if the current time is within the voting period
    function getVotingStatus() public view returns (bool) {
        return (block.timestamp >= votingStart && block.timestamp < votingEnd);
    }

    // Function to get the remaining time until the end of the voting period
    function getRemainingTime() public view returns (uint256) {
        require(block.timestamp >= votingStart, "Voting has not started yet.");
        if (block.timestamp >= votingEnd) {
            return 0;
        }
        return votingEnd - block.timestamp;
    }

    // Function to update the duration of the voting period, accessible only by the contract owner
    function updateVotingDuration(uint256 _newDurationInHours) public {
        votingEnd = votingStart + (_newDurationInHours * 1 hours); // Update the end time of the voting period
    }
}
