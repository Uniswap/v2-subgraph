# Uniswap V2 Subgraph Testing

This subgraph is for testing specifc interactions on a limited set of pairs. This subgraph should sync quickly and only contain data on pairs includes in the [whitelist](https://github.com/Uniswap/uniswap-v2-subgraph/blob/3209e951b255dcd00d079f5b4c8e0ab5001717bf/src/mappings/factory.ts#L19). 

The logic is expected to be the same as the global subgraph. 

## Dev

To run locally follow the instructions [here](https://github.com/graphprotocol/graph-node) for running local graph nodes.

To test in a sandbox on hosted node, replace the graph endpoint found [here](https://github.com/Uniswap/uniswap-v2-subgraph/blob/52e385e1a9937217fdfec4e5e4fd063a81161446/package.json#L11) with an endpoint on your personal graph account. 

Run the following commands to build and deploy. 

```yarn install```


```yarn codegen```

```yarn deploy --access-token <your-access-token found on graph website>```
