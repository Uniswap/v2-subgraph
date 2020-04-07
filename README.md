# Uniswap-subgraph

[Uniswap](https://uniswap.io/) is a decentralized protocol for automated token exchange on Ethereum.

This Subgraph dynamically tracks any exchange created by the uniswap factory. Any exchange, any user of the protocol, and any transaction of the protocol can be queried.

## Running Locally

Make sure to update package.json settings to point to your own graph account.

## Important Info

- USD values are based on the Compound Finance DAI oracle, which gets its prices from the Maker oracle.
- You can find the profit of a liquidity provider with the following information:
  - Find the ratio of total tokens owned by the user out of all tokens:
    - `(liquidityTokensMinted - liquidityTokensBurned) / totalLiquidityTokens = ratio`
  - With that ratio, figure out how much ETH and token could be withdrawn. You must take the tokens and convert to ETH for total ETH they could withdraw:
    - `ratio * ethBalance = ethWithdrawable`
    - `ratio * tokenBalance * tokenPrice = tokenWithdrawableInEth`
    - `ethWithdrawable + tokenWithdrawable = totalWithdrawable`
  - Now take `ethDeposited - ethWithdrawn = totalEth`
  - And `(tokenDeposited - tokenWithdrawn) * tokenPrice = totalTokensInEth`
  - Current Liquidity profit is:
    - `profit = totalWithdrawable - totalEth - totalTokensInEth`

Currently only the top 50 coins have decimals incorporated into values. This is because not all uniswap exchanges created have proper ERC-20 interfaces, and calling decimals fails. So with dynamic contracts, we had to opt for hardcoding in the top 50 exchanges by volume. The others have tokens represented as the full large number. (i.e. 123456789123456789 instead of 1.23456789123456789). We are tracking this issue here: https://github.com/graphprotocol/graph-node/issues/892

## Queries

Below are a few ways to show how to query the uniswap-subgraph for data. The queries show most of the information that is queryable, but there are many other filtering options that can be used, just check out the [querying api](https://thegraph.com/docs/graphql-api). These queries can be used locally or in The Graph Explorer playground.

### Querying Aggregated Uniswap Data

This query fetches aggredated data from all uniswap exchanges, to give a view into how much activity is happening within the whole protocol

```graphql
{
  uniswap(id: "1") {
    exchangeCount
    totalVolumeInEth
    totalLiquidityInEth
    totalVolumeUSD
    totalLiquidityUSD
  }
}
```

### Querying a Uniswap Pair

This query fetches high level information on each uniswap exchange contract.

```graphql
{
  exchanges(where: { tokenSymbol: "MKR" }) {
    id
    tokenAddress
    tokenSymbol
    tokenName
    tokenDecimals
    fee
    version
    startTime

    ethLiquidity
    tokenLiquidity
    ethBalance
    tokenBalance
    combinedBalanceInEth
    combinedBalanceInUSD
    ROI
    totalUniToken

    addLiquidityCount
    removeLiquidityCount
    sellTokenCount
    buyTokenCount

    lastPrice
    price
    tradeVolumeToken
    tradeVolumeEth
    totalValue
    weightedAvgPrice

    lastPriceUSD
    priceUSD
    weightedAvgPriceUSD
  }
}
```

### Querying User Data

#### Transactions

This query fetches a user trading Dai between two timestamps, and returns a maximum of ten of their transactions.

```graphql
{
  transactions(
    where: {
      timeStamp_gt: 1544832000
      timeStamp_lt: 1545696000
      tokenSymbol: "DAI"
      userAddress: "0x85c5c26dc2af5546341fc1988b9d178148b4838b"
    }
    first: 10
  ) {
    id
    exchangeAddress
    userAddress
    block
    ethAmount
    tokenAmount
    fee
    event
    timeStamp
  }
}
```

#### User Balances on Pairs

This query fetches a single user, and all their exchange balances.

```graphql
{
  user(id: "0x0000000000c90bc353314b6911180ed7e06019a9") {
    exchangeBalances {
      userAddress
      exchangeAddress

      ethDeposited
      tokensDeposited
      ethWithdrawn
      tokensWithdrawn
      uniTokensMinted
      uniTokensBurned

      ethBought
      ethSold
      tokensBought
      tokensSold
      ethFeesPaid
      tokenFeesPaid
      ethFeesInUSD
      tokenFeesInUSD
    }
  }
}
```

### Querying Historical Data

#### PairHistory

This query fetches historical data for the MKR exchange, ordered by time:

```graphql
{
  exchangeHistories(where: { tokenSymbol: "MKR" }, orderBy: timestamp, orderDirection: desc) {
    id
    exchangeAddress
    tokenSymbol
    tokenAddress
    type
    timestamp
    ethLiquidity
    tokenLiquidity
    ethBalance
    tokenBalance
    combinedBalanceInEth
    combinedBalanceInUSD
    ROI
    totalUniToken
    priceUSD
    price
    tradeVolumeToken
    tradeVolumeEth
    feeInEth
  }
}
```

These queries fetch historical data as the events that were emitted, split into trade events and liquidity events:

```graphql
{
  liquidityEvents {
    id
    type
    provider
    ethAmount
    tokenAmount
    exchangeAddress
    timestamp
    txhash
    block
    tokenAddress
    symbol
    decimals
    name
  }
  tradeEvents {
    id
    type
    buyer
    eth
    token
    exchangeAddress
    timestamp
    txhash
    block
    tokenFee
    ethFee
    tokenAddress
    symbol
    decimals
    name
  }
}
```
