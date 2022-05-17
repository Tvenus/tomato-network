const TomatoChain = artifacts.require("TomatoChain");

contract("TomatoChain",(accounts)=>{
    let [alice, bob] = accounts;
    it("should be able to create a new new company", async () => {
        const contractInstance = await TomatoChain.new();
        const companyNameBytes32=web3.utils.asciiToHex("Tweendee Company");
        const result = await contractInstance.setCompany(alice,companyNameBytes32
            , {from: alice,value:web3.utils.toWei("0.01", "ether")});
        console.log(web3.utils.asciiToHex("Tweendee Company"))
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[1].args.company[1],companyNameBytes32);
    })

})