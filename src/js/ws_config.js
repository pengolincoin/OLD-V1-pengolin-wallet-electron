var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'Pengolin-WalletShell';
config.appDescription = 'PengolinCoin Wallet';
config.appSlogan = 'Slow and steady wins the race!';
config.appId = 'lol.pengolincoin.walletshell';
config.appGitRepo = 'https://github.com/pengolincoin/pengolin-wallet-electron';

// default port number for your daemon (e.g. PengolinCoind)
config.daemonDefaultRpcPort = 17898;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'ewl';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'pengolin-service';

// version on the bundled service (pengolin-service)
config.walletServiceBinaryVersion = "0.0.0.6";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. pengolin-service)
config.walletServiceRpcPort = 8979;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'http://peng-explorer.s2ii.xyz/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = '78.46.222.91';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = null;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  '78.46.222.91:17898',
  'pengo.cpupool.cn:17898',
  '116.203.178.152:17898',
];

// your currency name
config.assetName = 'PengolinCoin';
// your currency ticker
config.assetTicker = 'PGO';
// your currency address prefix, for address validation
config.addressPrefix = 'PNGLNN';
// standard wallet address length, for address validation
config.addressLength = 101;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 187;

// minimum fee for sending transaction
config.minimumFee = 0.00001;
// minimum amount for sending transaction
config.mininumSend = 0.0001;
// default mixin/anonimity for transaction
config.defaultMixin = 1;
// to convert from atomic unit
config.decimalDivisor = 100000000;
// to represent human readable value
config.decimalPlaces = 8;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '78779fb00ca1b7170832a42de45142cf6c4b7f733fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'PengolinCoin Wallet Donation',
    address: 'PNGLNN2iFo8AR24SfySidHbL2846iFzCtT6jXhnqrqFZZL2cSd7T6ot4wswPyLAXEvVrCFdsEBf3UG6fuySBeAAFJXXJAMvBmAV4P',
    paymentId: '',
  }
];

config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
