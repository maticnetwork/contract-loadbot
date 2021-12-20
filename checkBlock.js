const web3 = require("./web3")

async function block() {
    let blockDetail= await web3.eth.getBlock("latest")

    // let pendingTrx =await web3.eth.getPendingTransactions()
    // let numOfPendingTrx= pendingTrx.length()
    // console.log("block number ",blockDetail.number ," gas consumed ",blockDetail.gasUsed," gas Limit ",blockDetail.gasLimit)
    console.log("block number ",blockDetail.number ," gas consumed ",blockDetail.gasUsed," baseFeePerGas ",blockDetail.baseFeePerGas," gasLimit ",blockDetail.gasLimit)
    
}
  
setInterval(block,1000);