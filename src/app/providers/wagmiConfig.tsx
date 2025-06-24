import { createConfig, http } from "wagmi";
import { baseSepolia } from "viem/chains";
import { coinbaseWallet, metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [baseSepolia],
  connectors: [
    coinbaseWallet({
      appName: "Chaver",
      chainId: baseSepolia.id,
    }),
    metaMask(),
  ],
  transports: {
    [baseSepolia.id]: http(),
  },
});
