pragma solidity ^0.5.0;

contract ElectionStore {
    string[] public candidates;
    mapping(string => uint) private countOfVote;

    constructor() public {
        candidates = ["Olivier", "Jeanne"];
        for(uint i = 0; i < candidates.length; i++)
        {
            countOfVote[candidates[i]] = 0;
        }
    }
    
    function GetVoteFor(string memory candidate) public view returns (uint){
        require(ExistCandidate(candidate), "He is not candidate");
        return countOfVote[candidate];
    }

    function addCandidate(string memory candidate) public {
        require(ExistCandidate(candidate) == false, "He is already a candidate");
        countOfVote[candidate] = 0;
    }

    function VoteFor(string memory candidate) public {
        require(ExistCandidate(candidate), "He is not a valid candidate");
        countOfVote[candidate] += 1;
    }

    function ExistCandidate(string memory candidate) view public returns (bool) {
        for(uint i = 0; i < candidates.length; i++) {
            if (keccak256(abi.encode(candidates[i])) == keccak256(abi.encode(candidate)) ){
                return true;
            }
        }
        return false;
    }
}