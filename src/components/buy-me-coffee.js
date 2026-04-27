"use client";

import { useEffect, useState } from "react";

const RECEIVER_ADDRESS = "B519gRWqzp4u1KsK7AaDUE6CGdviJWc4gg2u8Ri7hjNW";
const COFFEE_AMOUNTS = [0.1, 0.25, 0.5, 1];

function formatWalletAddress(address) {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

function getInjectedProvider() {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    window.phantom?.solana ||
    window.solflare ||
    window.solana ||
    null
  );
}

export function BuyMeCoffee() {
  const [selectedAmount, setSelectedAmount] = useState(COFFEE_AMOUNTS[1]);
  const [copied, setCopied] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [walletLabel, setWalletLabel] = useState("");
  const [walletReady, setWalletReady] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const provider = getInjectedProvider();

    if (!provider) {
      return;
    }

    setWalletReady(true);
    setWalletLabel(
      provider.isPhantom ? "Phantom" : provider.isSolflare ? "Solflare" : "Solana wallet",
    );

    if (provider.publicKey) {
      setWalletAddress(provider.publicKey.toString());
    }

    const handleAccountChange = (publicKey) => {
      setWalletAddress(publicKey ? publicKey.toString() : "");
    };

    provider.on?.("accountChanged", handleAccountChange);

    return () => {
      provider.off?.("accountChanged", handleAccountChange);
    };
  }, []);

  useEffect(() => {
    if (!copied) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setCopied(false);
    }, 1800);

    return () => window.clearTimeout(timeout);
  }, [copied]);

  const connectWallet = async () => {
    const provider = getInjectedProvider();

    if (!provider) {
      setStatusMessage("Install Phantom or another Solana wallet to connect.");
      return;
    }

    try {
      setIsConnecting(true);
      setStatusMessage("");
      const result = await provider.connect();
      const address = result?.publicKey?.toString() || provider.publicKey?.toString() || "";
      setWalletAddress(address);
    } catch {
      setStatusMessage("Wallet connection was canceled or unavailable.");
    } finally {
      setIsConnecting(false);
    }
  };

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(RECEIVER_ADDRESS);
      setCopied(true);
      setStatusMessage("Solana address copied.");
    } catch {
      setStatusMessage("Could not copy the address on this device.");
    }
  };

  const startWalletTransfer = async () => {
    if (!walletAddress) {
      await connectWallet();
      return;
    }

    try {
      setIsSending(true);
      setStatusMessage("Opening your wallet transfer flow...");
      window.location.href = solanaUri;
    } catch {
      setStatusMessage("Could not open the wallet transfer flow.");
    } finally {
      setIsSending(false);
    }
  };

  const solanaUri = `solana:${RECEIVER_ADDRESS}?amount=${selectedAmount}&label=${encodeURIComponent("ODIN Coffee")}&message=${encodeURIComponent("Coffee support for ODIN/HQ")}`;
  const phantomUri = `https://phantom.app/ul/v1/transfer?recipient=${encodeURIComponent(RECEIVER_ADDRESS)}&amount=${selectedAmount}&label=${encodeURIComponent("ODIN Coffee")}&message=${encodeURIComponent("Coffee support for ODIN/HQ")}`;

  return (
    <section className="content-section support-section" id="coffee">
      <div className="support-card">
        <div className="support-copy">
          <span className="eyebrow">Buy me a coffee</span>
          <h2>Support the work with a quick SOL tip.</h2>
          <p>
            Connect your wallet first, then trigger a SOL transfer with a
            familiar web3 wallet handoff flow. You can still copy the address
            any time.
          </p>

          <div className="coffee-amounts" role="group" aria-label="Select coffee amount">
            {COFFEE_AMOUNTS.map((amount) => (
              <button
                key={amount}
                type="button"
                className={`amount-chip${selectedAmount === amount ? " is-active" : ""}`}
                onClick={() => setSelectedAmount(amount)}
              >
                {amount} SOL
              </button>
            ))}
          </div>

          <div className="support-actions">
            <button
              type="button"
              className="cta-primary coffee-button"
              onClick={startWalletTransfer}
            >
              {walletAddress
                ? isSending
                  ? "Opening wallet..."
                  : `Send ${selectedAmount} SOL`
                : isConnecting
                  ? "Connecting..."
                  : "Connect wallet"}
            </button>
            <button type="button" className="cta-secondary coffee-button" onClick={copyAddress}>
              {copied ? "Copied" : "Copy address"}
            </button>
          </div>

          <div className="support-links">
            <a href={phantomUri} className="support-link" target="_blank" rel="noreferrer">
              Open in Phantom
            </a>
            <a href={solanaUri} className="support-link">
              Open Solana app
            </a>
          </div>

          <p className="support-status">
            {statusMessage ||
              (walletReady
                ? walletAddress
                  ? `Connected with ${walletLabel || "wallet"} ${formatWalletAddress(walletAddress)}.`
                  : "Wallet detected. Connect to continue with transfer."
                : "No wallet detected yet. Copy the address or use a Solana wallet app to send SOL.")}
          </p>
        </div>

        <div className="support-panel" aria-label="Solana support wallet">
          <span className="support-panel-label">Solana wallet</span>
          <strong>{RECEIVER_ADDRESS}</strong>
          <div className="support-panel-meta">
            <span>Network</span>
            <span>Mainnet</span>
          </div>
          <div className="support-panel-meta">
            <span>Suggested tip</span>
            <span>{selectedAmount} SOL</span>
          </div>
          <div className="support-panel-meta">
            <span>From</span>
            <span>{walletAddress ? formatWalletAddress(walletAddress) : "Any wallet"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
