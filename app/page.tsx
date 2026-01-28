export default function Page() {
  return (
    <>
      <h1>LayerZero Farcaster Frame</h1>

      <meta property="fc:frame" content="vNext" />
      <meta
        property="fc:frame:image"
        content="https://YOUR_DOMAIN/api/frame"
      />
      <meta
        property="fc:frame:button:1"
        content="🚀 Open New Era"
      />
      <meta
        property="fc:frame:button:1:action"
        content="link"
      />
      <meta
        property="fc:frame:button:1:target"
        content="https://layerzero.network/new-era"
      />
    </>
  )
}
