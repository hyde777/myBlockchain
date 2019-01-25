const TurnStore = artifacts.require("./TurnStore.sol");

contract("TurnStore", accounts => {
  it("should store vote for someone", async () => {
    const TurnStore = await TurnStore.deployed();

    await TurnStore.voteFor("Jeanne", { from: accounts[0] });

    const storedVote = await TurnStore.GetVoteFor.call("Jeanne");

    assert.equal(storedVote, 1, "Got a problem on the vote");
  });
});