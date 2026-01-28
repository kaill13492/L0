export const metadata = {
  title: 'Farcaster Frame',
  description: 'LayerZero Frame'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
