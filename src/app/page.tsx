"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ConnectWallet,
  WalletProvider,
  WalletModal,
} from "@coinbase/onchainkit/wallet";

import { AgentKit } from "@coinbase/agentkit";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button>Hello</Button>
    </div>
  );
}
