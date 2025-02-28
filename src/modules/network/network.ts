import {
  Network,
  NativeAssetAddress,
  NativeAssetPriceSymbol,
} from '@/constants';
import configs  from '@/config';

const { INFURA_PROJECT_ID, ALCHEMY_KEY } = process.env;

export default function template(templateString, templateVariables) {
  return templateString.replace(/{{(.*?)}}/g, (_, g) => templateVariables[g]);
}

export function getRpcUrl(networkId: number): string {
  requireValidNetworkId(networkId);

  const templateUrl = configs[networkId].rpc;
  if (templateUrl.match(/INFURA_PROJECT_ID/) && INFURA_PROJECT_ID == null) {
    throw new Error(`INFURA_PROJECT_ID env variable must be set for network ${networkId}`)
  }
  if (templateUrl.match(/ALCHEMY_KEY/) && ALCHEMY_KEY == null) {
    throw new Error(`ALCHEMY_KEY env variable must be set for network ${networkId}`)
  }

  const rpcUrl = template(templateUrl, {
    INFURA_PROJECT_ID,
    ALCHEMY_KEY
  });

  return rpcUrl;
}

export function getSubgraphUrl(networkId: number): string {
  requireValidNetworkId(networkId);

  return configs[networkId].subgraph;
}

export function isValidNetworkId(networkId: number): boolean {
  return Object.values(Network).includes(networkId);
}

export function requireValidNetworkId(networkId: number): void {
  if (!isValidNetworkId(networkId)) {
    throw new Error(`Invalid network ID ${networkId}`)
  }
}

export function getPlatformId(chainId: string | number): string | undefined {
  const mapping = {
    '1': 'ethereum',
    '42': 'ethereum',
    '137': 'polygon-pos',
    '42161': 'arbitrum-one',
    '100': 'xdai',
    '1101': 'polygon-zkevm',
  };

  return mapping[chainId.toString()];
}

export function getNativeAssetAddress(chainId: string | number): string {
  const mapping = {
    '1': NativeAssetAddress.ETH,
    '42': NativeAssetAddress.ETH,
    '137': NativeAssetAddress.MATIC,
    '42161': NativeAssetAddress.ETH,
    '100': NativeAssetAddress.XDAI,
    '1101': NativeAssetAddress.ETH,
  };

  return mapping[chainId.toString()] || 'eth';
}

export function getNativeAssetPriceSymbol(chainId: string | number): string {
  const mapping = {
    '1': NativeAssetPriceSymbol.ETH,
    '42': NativeAssetPriceSymbol.ETH,
    '137': NativeAssetPriceSymbol.MATIC,
    '42161': NativeAssetPriceSymbol.ETH,
    '100': NativeAssetPriceSymbol.ETH,
    '1101': NativeAssetPriceSymbol.ETH,
  };

  return mapping[chainId.toString()] || 'eth';
}