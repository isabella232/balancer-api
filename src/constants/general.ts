export const COINGECKO_BASEURL = 'https://api.coingecko.com/api/v3';
export const COINGECKO_MAX_TOKENS_PER_PAGE = 100;
export const COINGECKO_MAX_TPS = 10;

export const MAX_BATCH_WRITE_SIZE = 5;
export const MAX_DYNAMODB_PRECISION = 38;

export const SOR_MIN_LIQUIDITY = '100';
export const SOR_DEADLINE = 60; // Deadline in minutes for the swap to be valid
export const SOR_DEFAULT_SLIPPAGE = 0.01;

export const HOUR_IN_MS = 60 * 60 * 1000;
export const DAY_IN_MS = HOUR_IN_MS * 24;
export const WEEK_IN_MS = DAY_IN_MS * 7;

export const MAX_VALID_TO_EPOCH = 2 ** 32 - 1;

export const Network: Record<string, number> = {
  MAINNET: 1,
  GOERLI: 5,
  KOVAN: 42,
  POLYGON: 137,
  ARBITRUM: 42161,
  GNOSIS: 100,
  ZKEVM: 1101,
};

export const NativeAssetAddress = {
  ETH: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  MATIC: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
  XDAI: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
};

export const NativeAssetId = {
  ETH: 'ethereum',
  MATIC: 'matic-network',
  XDAI: 'xdai',
};

export const NativeAssetPriceSymbol = {
  ETH: 'eth',
  MATIC: 'matic',
  XDAI: 'xdai',
};

export const TEST_NETWORKS: Record<string, number> = Object.fromEntries(
  Object.entries(Network).filter(([, id]) => {
    return [Network.GOERLI, Network.KOVAN].includes(id);
  })
);

export const PRODUCTION_NETWORKS: Record<string, number> = Object.fromEntries(
  Object.entries(Network).filter(([name]) => {
    return TEST_NETWORKS[name] == null;
  })
);
