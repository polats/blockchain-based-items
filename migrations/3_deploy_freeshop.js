var FreeShop = artifacts.require("FreeShop");

module.exports = function(deployer) {
  deployer.deploy(FreeShop, "FreeShop", "FREE", Date.now() + (1 * 24 * 60 * 60 * 1000), {gas: 6721975});
};
