# Uniswap V2 and V2-Tokens Subgraph

## Development

1. Install dependencies
`yarn install`

2. Build a v2 subgraph
`yarn build --network <network> --subgraph-type v2` 

3. Deploy a v2 subgraph
`yarn build --network <network> --subgraph-type v2 --deploy`

4. Build a v2-tokens subgraph
`yarn build --network <network> --subgraph-type v2-tokens`

5. Deploy a v2-tokens subgraph
`yarn build --network <network> --subgraph-type v2-tokens --deploy`

Note: Deployments will fail if there are uncommitted changes in the subgraph. Please commit your changes before deploying.

