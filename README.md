
## Config Variables

All the configurations are to me made in the [.env](https://github.com/rajatlko13/contract-loadbot/blob/master/.env) file. Basically, we have two important flags to execute the loadbot. They are -

- MAX_DEPLOYMENTS - Refers to the maximum number of smart contracts to be deployed.

- MAX_SIZE - Refers to maximum size of state bloat (in KB) to be produced by the transactions.

Atleast one of these two flags have to be configured, at the runtime. If both the flags are configured, then the condition that is met first, will stop the loadbot.

Other important  flags are - 
- RPC_SERVER - Refers to the json rpc server

- MNEMONIC - Refers to the mnemonic to generate the accounts

- PRIVATE_KEY - Secret key/private key of the metamask first account, having sufficient balance to carry out the loadbot transactions

- DATA_PATH - Refers to the chaindata folder path, whose size will be computed after each transaction, and the script will stop if MAX_SIZE is reached.

- BYTECODE - Contract bytecode to deploy (should have high storage requirement to bloat the state)