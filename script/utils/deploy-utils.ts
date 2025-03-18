import { exec as execCallback } from 'child_process'
import * as util from 'util'

import { getAlchemyDeploymentParams, getSubgraphName, prepare } from './prepareNetwork'

const exec = util.promisify(execCallback)

// Creating subgraphs is only available from hosted-service dashboard
// yarn graph create $network_name-v2 --node https://api.thegraph.com/deploy/ --access-token $SUBGRAPH_DEPLOY_KEY"
export const build = async (network, subgraphType) => {
  console.log(`Building subgraph for ${network}`)
  console.log(`\n Copying constants & templates for ${network} \n`)
  await prepare(network, subgraphType)
  console.log(`\n Generating manifest for ${network} ${subgraphType} subgraph \n`)
  await exec(
    `cross-env mustache config/${network}/config.json ${subgraphType}-subgraph.template.yaml > ${subgraphType}-subgraph.yaml`
  )
  await exec(`graph codegen ${subgraphType}-subgraph.yaml`)
}

export const deploy = async (subgraphType) => {
  try {
    await exec('git diff-index --quiet HEAD -- && git diff --quiet || (exit 1)')
  } catch (e) {
    console.log('Error: You have uncommitted changes. Please commit your changes and try again.')
    process.exit(1)
  }

  const { stdout: gitHash } = await exec('git rev-parse --short HEAD')
  const gitHashString = gitHash.toString().trim()
  const subgraphName = getSubgraphName(subgraphType)
  const { node, ipfs, deployKey } = getAlchemyDeploymentParams()

  try {
    const { stdout, stderr } = await exec(
      `graph deploy --node ${node} --ipfs ${ipfs} --deploy-key ${deployKey} --version-label ${gitHashString} ${subgraphName} ${subgraphType}-subgraph.yaml`
    )
    if (stderr.includes('Subgraph version already exists')) {
      console.log('Subgraph version already exists. Please update the version label and try again.')
      process.exit(1)
    }
    console.log(stdout)
    console.log('Subgraph deployed successfully.')
  } catch (e) {
    console.log(e.stdout)
    console.log('Error: Failed to deploy subgraph. Please try again.')
    process.exit(1)
  }
}
