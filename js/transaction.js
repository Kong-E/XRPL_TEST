const xrpl = require("xrpl");

async function getTransaction(client, txHash) {
  // 트랜잭션 조회
  const response = await client.request({
    command: "tx",
    transaction: txHash,
  });

  console.log(response);
  await client.disconnect();
}

module.exports = { getTransaction };
