import { getAddress } from "ethers";

export const getWagmiAddress = (address: string): `0x${string}` => {
  try {
    return getAddress(address) as `0x${string}`;
  } catch (error) {
    throw new Error(`Invalid address: ${address}`);
  }
};

export const ensureHex = (address: string): string => {
  return address.startsWith("0x") ? address : `0x${address}`;
};
