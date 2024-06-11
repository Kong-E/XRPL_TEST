const xrpl = require('xrpl');

const DEV_URL = 'wss://s.devnet.rippletest.net:51233/'; // Public test net provided by Ripple

// Function to create and connect a client
async function createClient() {
  const client = new xrpl.Client(DEV_URL);
  await client.connect();
  return client;
}

// Function to disconnect a client
async function disconnectClient(client) {
  await client.disconnect();
}

// Function to generate and fund a wallet
async function generateAndFundWallet(client) {
  // Generate a wallet - no ripple peer flag set false
  const wallet = xrpl.Wallet.generate();

  // Fund the wallet using the Testnet faucet
  await client.fundWallet(wallet);

  // Return the wallet
  return wallet;
}

// Function to get balances for an account
async function getBalances(client, account) {
  try {
    const response = await client.request({
      command: 'account_lines',
      account: account,
    });

    return response.result.lines;
  } catch (error) {
    console.error('Error fetching balances:', error);
    throw error;
  }
}

// Export the functions
module.exports = { createClient, disconnectClient, generateAndFundWallet, getBalances };
