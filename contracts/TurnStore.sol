pragma solidity 0.4.10;

contract TurnStore {
    string[] public candidates;
    mapping(string => uint) private countOfVote;

    function TurnStore() public {
        candidates = ["Olivier", "Jeanne"];
        for(uint i = 0; i < candidates.length; i++)
        {
            countOfVote[candidates[i]] = 0;
        }
    }
    
    function getVoteFor(string memory candidate) public returns (uint) {
        require(existCandidate(candidate));
        return countOfVote[candidate];
    }

    function addCandidate(string memory candidate) public {
        require(existCandidate(candidate) == false);
        countOfVote[candidate] = 0;
    }

    function voteFor(string memory candidate) public {
        require(existCandidate(candidate));
        countOfVote[candidate] += 1;
    }

    function existCandidate(string memory candidate) private returns (bool) {
        for(uint i = 0; i < candidates.length; i++) {
            //if (keccak256(abi.encode(candidates[i])) == keccak256(abi.encode(candidate)) ){
            return true;
            //}
        }
        return false;
    }
}