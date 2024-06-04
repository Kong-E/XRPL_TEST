const {
  createClient,
  disconnectClient,
  generateAndFundWallet,
} = require("./wallet");
const { createTrustLine, mintToken, transferToken } = require("./token");
const { getTransaction } = require("./transaction");

async function main() {
  try {
    // Create XRPL client
    const client = await createClient();

    /* // Generate and fund the issuer (A) and recipient (B) wallets
    const issuerWallet = await generateAndFundWallet(client);
    const recipientWallet = await generateAndFundWallet(client);

    // Define the token
    const currency = "CAT";
    const amountToMint = "10";

    // Create trust line for CAT token
    await createTrustLine(client, issuerWallet, recipientWallet, currency);

    // Mint CAT tokens
    await mintToken(
      client,
      issuerWallet,
      recipientWallet,
      currency,
      amountToMint
    );

    // Transfer CAT tokens
    const transferAmount = "11";
    await transferToken(
      client,
      issuerWallet,
      recipientWallet,
      currency,
      transferAmount
    );

    console.log("Issuer wallet address:", issuerWallet.address);
    console.log("Recipient wallet address:", recipientWallet.address);

    await disconnectClient(client); */
    await getTransaction(
      client,
      "ECC0BD3C798D5E13192807FE250422E7D43559F1AE5A40A7E18081FF903ED3CB"
    );
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
