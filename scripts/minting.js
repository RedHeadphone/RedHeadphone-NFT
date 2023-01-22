const hre = require("hardhat");
const address = "0xA6aC3D338BC26AE6e8171C12a2a9EF6548E712C9"
const provider = new hre.ethers.providers.JsonRpcProvider(process.env.MUMBAI_URL);

async function main() {
  const NFT = await hre.ethers.getContractAt("RedHeadphoneNFT", address, new ethers.Wallet(process.env.PRIVATE_KEY, provider));
  let name = await NFT.name()
  console.log("name:", name)
  console.log("NFT address:", NFT.address);

  const metadatafolderCID = "QmUiXCHYpzxGBvf1jSBDr2Q2Jz5QFifBry4zqbzwda6d1o/"

  for(let i=1;i<=100;i++){
    let res = await NFT.safeMint("0x92b0209ef36F162b24cAaB37Ac050F9BF05c59c6",metadatafolderCID+i+".json",
      {
        gasPrice: ethers.utils.parseUnits('40','gwei').toString(),
        gasLimit: 230400
      })
    console.log(res)
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});