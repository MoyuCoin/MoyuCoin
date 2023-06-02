import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("MoyuCoin", function () {
    /**
     * 初始化合约
     * @returns 
     */
    async function deployCoin() {

        const [owner, otherAccount] = await ethers.getSigners();

        const MoyuCoin = await ethers.getContractFactory("MoyuCoin");
        const coin = await MoyuCoin.deploy();
        

        return { coin, owner, otherAccount };
    }
    async function deployNFT(){
        const [owner, otherAccount] = await ethers.getSigners();
        const Auth = await ethers.getContractFactory("Auth");
        const coin = await Auth.deploy();

        return { coin, owner, otherAccount };
    }


    describe("摸鱼币", function () {

        it("初始化", async function () {
            const { coin, owner } = await loadFixture(deployCoin);
            await expect(await coin.owner()).to.equal(
                owner.address
            );
        });
        it("mint测试", async function () {
            const { coin, owner,otherAccount } = await loadFixture(deployCoin);
            // mint 100个币
            const minted = ethers.BigNumber.from(100).pow(18);
            await coin.connect(owner).mint(otherAccount.address,minted)
            await expect(await coin.balanceOf(otherAccount.address)).to.equal(minted);
        });

    });



    
});
