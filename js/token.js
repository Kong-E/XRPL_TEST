async function createTrustLine(
  client,
  issuerWallet,
  recipientWallet,
  currency
) {
  try {
    const trustSetTx = {
      TransactionType: "TrustSet",
      Account: recipientWallet.address,
      LimitAmount: {
        currency: currency,
        issuer: issuerWallet.address,
        value: "0", // Assuming no limit for trust line
      },
    };

    const trustSetResponse = await client.submitAndWait(trustSetTx, {
      wallet: recipientWallet,
    });
    console.log("TrustSet transaction result:", trustSetResponse);
  } catch (error) {
    console.error("An error occurred during trust line setup:", error);
    throw error;
  }
}

async function mintToken(
  client,
  issuerWallet,
  recipientWallet,
  currency,
  amount
) {
  try {
    const issueTx = {
      TransactionType: "Payment",
      Account: issuerWallet.address,
      Destination: recipientWallet.address,
      Amount: {
        currency: currency,
        value: amount.toString(),
        issuer: issuerWallet.address,
      },
    };

    const issueResponse = await client.submitAndWait(issueTx, {
      wallet: issuerWallet,
    });
    console.log("Token issuance transaction result:", issueResponse);
  } catch (error) {
    console.error("An error occurred during token minting:", error);
    throw error;
  }
}

async function transferToken(
  client,
  issuerWallet,
  recipientWallet,
  currency,
  amount
) {
  try {
    const paymentTx = {
      TransactionType: "Payment",
      Account: issuerWallet.address,
      Destination: recipientWallet.address,
      Amount: {
        currency: currency,
        value: amount.toString(),
        issuer: issuerWallet.address,
      },
    };

    const paymentResponse = await client.submitAndWait(paymentTx, {
      wallet: issuerWallet,
    });
    console.log("Token transfer transaction result:", paymentResponse);
  } catch (error) {
    console.error("An error occurred during token transfer:", error);
    throw error;
  }
}

module.exports = { createTrustLine, mintToken, transferToken };
