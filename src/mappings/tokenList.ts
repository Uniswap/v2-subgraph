import {
  Address,
  Bytes,
  BigInt,
  ipfs,
  json,
  JSONValueKind,
} from '@graphprotocol/graph-ts'
import { Token } from '../types/schema'

const TOKEN_LIST_IPFS = 'QmUCbHRcJczJJMxKw4Ma69DtDPz4Dbi16PzTj8arGkTx6w' // Kleros T2CR (t2crtokens.eth)

// Fallback to tokenlist if ERC20 function reverts
export function fetchTokenFromTokenList(tokenAddress: Address) : Token | null {
  
  // Retrieve the Token List
  let tokenListBytes = ipfs.cat(TOKEN_LIST_IPFS)

  // Stop if no result from IPFS
  if(tokenListBytes == null) {
    return null
  }

  // Extract the token list object
  let tokenListJson = json.fromBytes(<Bytes>tokenListBytes)
  if(tokenListJson.kind != JSONValueKind.OBJECT) {
    return null
  }
  let tokenList = tokenListJson.toObject()

  // Extract the tokens from the token list
  if(!tokenList.isSet('tokens')) {
    return null
  }
  let tokensJson = tokenListJson.toObject().get('tokens')
  if(tokensJson.kind != JSONValueKind.ARRAY) {
    return null
  }
  let tokens = tokensJson.toArray()
    
  for (let i: i32 = 0, len: i32 = tokens.length; i < len; i++) {
    // Check type
    if(tokens[i].kind != JSONValueKind.OBJECT) {
      continue
    }
    let tokenData = tokens[i].toObject()

    // Check Chain is mainnet
    if(
      !tokenData.isSet('chainId') || 
      tokenData.get('chainId').kind != JSONValueKind.NUMBER || 
      tokenData.get('chainId').toI64() != 1
    ) {
      continue
    }

    // Check Token Address
    if(
      !tokenData.isSet('address') ||
      tokenData.get('address').kind != JSONValueKind.STRING ||
      tokenData.get('address').toString() != tokenAddress.toString()
    ) {
      continue
    }

    // Build Token with best-effort
    let token = new Token(tokenAddress.toString())
    if(tokenData.isSet('symbol') && tokenData.get('symbol').kind == JSONValueKind.STRING) {
      token.symbol = tokenData.get('symbol').toString()
    }
    if(tokenData.isSet('name') && tokenData.get('name').kind == JSONValueKind.STRING) {
      token.name = tokenData.get('name').toString()
    }
    if(tokenData.isSet('decimals') && tokenData.get('decimals').kind == JSONValueKind.NUMBER) {
      token.decimals = tokenData.get('decimals').toBigInt()
    }

    return token
    
  }

  return null
  
}

// Helper to get a token symbol from the token list
export function fetchTokenSymbolFromTokenList(tokenAddress: Address): string {
  let token = fetchTokenFromTokenList(tokenAddress)
  if(token) {
    return token.symbol
  } else {
    return 'unknown'
  }
}

// Helper to get a token name from the token list
export function fetchTokenNameFromTokenList(tokenAddress: Address): string {
  let token = fetchTokenFromTokenList(tokenAddress)
  if(token) {
    return token.name
  } else {
    return 'unknown'
  }
}

// Helper to get a token decimals from the token list
export function fetchTokenDecimalsFromTokenList(tokenAddress: Address): BigInt {
  let token = fetchTokenFromTokenList(tokenAddress)
  if(token) {
    return token.decimals
  } else {
    return null
  }
}