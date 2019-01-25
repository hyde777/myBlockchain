pragma solidity 0.4.10;
import "./TurnStore.sol";

contract ElectionStore {
    int currentTurn = 1;
    int maxTurn;
    mapping(int => TurnStore) turns;

    function ElectionStore(int numberOfTurn) public {
        maxTurn = numberOfTurn;
        turns[currentTurn] = new TurnStore();
    }
    
    function advanceTurn() public {
        currentTurn += 1;
        turns[currentTurn] = new TurnStore();
    }

    function getCurrentTurn() public returns(TurnStore) {
        return new TurnStore();
    }
}