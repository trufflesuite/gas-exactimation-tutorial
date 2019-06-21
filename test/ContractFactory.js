const ContractFactory = artifacts.require("ContractFactory");

contract("ContractFactory", () => {
  it("...should deploy and successfully call createInstance using the method's provided gas estimate", async () => {
    const contractFactoryInstance = await ContractFactory.new();

    const gasEstimate = await contractFactoryInstance.createInstance.estimateGas()

    const tx = await contractFactoryInstance.createInstance({ gas: gasEstimate })
    assert(tx);
  });
});
