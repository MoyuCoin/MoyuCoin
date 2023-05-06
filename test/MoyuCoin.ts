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

    describe("Deployment", function () {

        it("是否初始化了114514个摸鱼币", async function () {
            const { coin, owner } = await loadFixture(deployCoin);
            await expect(await coin.owner()).to.equal(
                owner.address
            );
        });

    });

});
