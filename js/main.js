const {
  createClient,
  disconnectClient,
  generateAndFundWallet,
} = require("./wallet");

async function main() {
  try {
    // Create and connect the client
    const client = await createClient();

    // Generate and fund the first wallet
    const wallet1 = await generateAndFundWallet(client);
    console.log("First wallet info:", wallet1);
    console.log("First wallet address:", wallet1.address);

    // Generate and fund the second wallet
    const wallet2 = await generateAndFundWallet(client);
    console.log("Second wallet info:", wallet2);
    console.log("Second wallet address:", wallet2.address);

    // Disconnect the client
    await disconnectClient(client);

    console.log("Script completed successfully.");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
