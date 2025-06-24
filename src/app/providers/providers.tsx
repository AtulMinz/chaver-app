"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { ReactNode } from "react";
import { config } from "./wagmiConfig";
import { baseSepolia } from "viem/chains";

const queryClient = new QueryClient();

export function Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
          chain={baseSepolia}
          config={{
            appearance: {
              name: "Chaver",
              mode: "auto",
              theme: "default",
            },
            wallet: {
              display: "modal",
              termsUrl: "",
              privacyUrl: "",
              supportedWallets: {
                rabby: true,
                trust: true,
                frame: true,
              },
            },
          }}
        >
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
