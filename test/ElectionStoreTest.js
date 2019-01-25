const ElectionStore = artifacts.require("../contracts/ElectionStore.sol");

contract("ElectionStore", accounts => {
  it("should store vote for someone", async () => {
    const ElectionStore = await ElectionStore.deployed();

    await ElectionStore.voteFor("Jeanne", { from: accounts[0] });

    const storedVote = await ElectionStore.GetVoteFor.call("Jeanne");

    assert.equal(storedVote, 1, "Got a problem on the vote");
  });
});