"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ConnectWallet,
  WalletProvider,
  WalletModal,
} from "@coinbase/onchainkit/wallet";

import { AgentKit } from "@coinbase/agentkit";
import Navbar from "@/components/pages/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
