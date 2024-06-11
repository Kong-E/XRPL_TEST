const { createClient, disconnectClient, generateAndFundWallet } = require('./wallet');
const { setTrustLine, sendToken, getBalances } = require('./token');
const xrpl = require('xrpl');

async function main() {
  try {
    // Create XRPL client
    const client = await createClient();

    const issuer_wallet = await generateAndFundWallet(client);
    const wallet_b = await generateAndFundWallet(client);
    // const wallet_c = await generateAndFundWallet(client);

    console.log('Issuer Wallet: ', issuer_wallet);
    console.log('Wallet B: ', wallet_b);
    // console.log("Wallet C: ", wallet_c);

    // // b 계정에서 a 계정으로 트러스트라인 설정 (CAT 토큰)
    // await setTrustLine(client, wallet_b, 'CAT', '1000', issuer_wallet.classicAddress);

    // // // c 계정에서 a 계정으로 트러스트라인 설정 (CAT 토큰)
    // await setTrustLine(client, wallet_c, 'CAT', '1000', issuer_wallet.classicAddress);

    // // a 계정에서 b 계정으로 CAT 토큰 전송
    // await sendToken(client, issuer_wallet, wallet_b.classicAddress, 'CAT', '10', issuer_wallet.classicAddress);
    // console.log(await getBalances(client, wallet_b.classicAddress));

    // // b 계정에서 a 계정으로 CAT 토큰 전송
    // await sendToken(client, wallet_b, issuer_wallet.classicAddress, 'CAT', '10', issuer_wallet.classicAddress);
    // console.log(await getBalances(client, issuer_wallet.classicAddress));

    // // a 계정에서 c 계정으로 CAT 토큰 전송
    // await sendToken(client, issuer_wallet, wallet_c.classicAddress, 'CAT', '10', issuer_wallet.classicAddress);
    // console.log(await getBalances(client, wallet_c.classicAddress));

    // seed로부터 wallet
    // const wallet = xrpl.Wallet.fromSeed('sEdVcek3zjezSzMivnA9iu34adNYAW2');
    // console.log(wallet);

    await disconnectClient(client);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
