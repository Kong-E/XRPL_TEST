const xrpl = require('xrpl');

// 트러스트라인 설정 함수
async function setTrustLine(client, wallet, currency, value, issuer) {
  const trust_set_tx = {
    TransactionType: 'TrustSet',
    Account: wallet.classicAddress,
    LimitAmount: {
      currency: currency,
      value: value,
      issuer: issuer,
    },
  };

  const prepared = await client.autofill(trust_set_tx);
  const signed = wallet.sign(prepared);
  const result = await client.submitAndWait(signed.tx_blob);
  console.log(`TrustLine 설정 응답 for ${wallet.classicAddress}:`, result);
}

// 토큰 전송 함수
async function sendToken(client, senderWallet, recipientAddress, currency, amount, issuerAddress) {
  try {
    const transaction = {
      TransactionType: 'Payment',
      Account: senderWallet.classicAddress,
      Destination: recipientAddress,
      Amount: {
        currency: currency,
        value: amount,
        issuer: issuerAddress,
      },
    };

    const prepared = await client.autofill(transaction);
    const signed = senderWallet.sign(prepared);
    const result = await client.submitAndWait(signed.tx_blob);

    console.log(result);

    console.log(`Sent ${amount} ${currency} from ${senderWallet.classicAddress} to ${recipientAddress}`);
  } catch (error) {
    console.error('Failed to send token:', error);
    throw error;
  }
}

module.exports = { setTrustLine, sendToken };
