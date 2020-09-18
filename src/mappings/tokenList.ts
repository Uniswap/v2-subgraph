import {
  Address,
  Bytes,
  BigInt,
  ipfs,
  json,
  JSONValueKind,
  log,
} from '@graphprotocol/graph-ts'
import { Token } from '../types/schema'

const TOKEN_LIST_IPFS = 'QmUCbHRcJczJJMxKw4Ma69DtDPz4Dbi16PzTj8arGkTx6w' // Kleros T2CR (t2crtokens.eth)

// Fallback to tokenlist if ERC20 function reverts
export function fetchTokenFromTokenList(tokenAddress: Address) : Token | null {
  
  // Retrieve the Token List
  let tokenListBytes = ipfs.cat(TOKEN_LIST_IPFS)

  // Stop if no result from IPFS
  if(tokenListBytes == null) {
    log.error('Failed to retrieve Token List from IPFS', [])
    return null
  }

  // Extract the token list object
  let tokenListJson = json.fromBytes(tokenListBytes as Bytes)
  if(tokenListJson.kind != JSONValueKind.OBJECT) {
    log.error('JSON retrieved is not an object', [])
    return null
  }
  let tokenList = tokenListJson.toObject()

  // Extract the tokens from the token list
  if(!tokenList.isSet('tokens')) {
    log.error('Missing tokens property in JSON list', [])
    return null
  }
  let tokensJson = tokenListJson.toObject().get('tokens')
  if(tokensJson.kind != JSONValueKind.ARRAY) {
    log.error('Tokens property is not an array', [])
    return null
  }
  let tokens = tokensJson.toArray()
    
  for (let i: i32 = 0, len: i32 = tokens.length; i < len; i++) {
    // Check type
    if(tokens[i].kind != JSONValueKind.OBJECT) {
      log.warning('Skipping array entry, not an object', [])
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
      log.info('Token symbol found in Token List', [tokenAddress.toString(), token.symbol])
    }
    if(tokenData.isSet('name') && tokenData.get('name').kind == JSONValueKind.STRING) {
      token.name = tokenData.get('name').toString()
      log.info('Token name found in Token List', [tokenAddress.toString(), token.name])
    }
    if(tokenData.isSet('decimals') && tokenData.get('decimals').kind == JSONValueKind.NUMBER) {
      token.decimals = tokenData.get('decimals').toBigInt()
      log.info('Token decimals found in Token List', [tokenAddress.toString(), token.decimals.toString()])
    }

    return token
    
  }

  return null
  
}

// Helper to get a token symbol from the token list
export function fetchTokenSymbolFromTokenList(tokenAddress: Address): string {
  let token = fetchTokenFromTokenList(tokenAddress)
  if(token != null) {
    return token.symbol
  } else {
    return 'unknown'
  }
}

// Helper to get a token name from the token list
export function fetchTokenNameFromTokenList(tokenAddress: Address): string {
  let token = fetchTokenFromTokenList(tokenAddress)
  if(token != null) {
    return token.name
  } else {
    return 'unknown'
  }
}

// Helper to get a token decimals from the token list
export function fetchTokenDecimalsFromTokenList(tokenAddress: Address): BigInt {
  let token = fetchTokenFromTokenList(tokenAddress)
  if(token != null) {
    return token.decimals
  } else {
    return null
  }
}