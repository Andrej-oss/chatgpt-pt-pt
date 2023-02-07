import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />

      <div className="flex">
          <body className="bg-[#343541] flex-1">{children}</body>
      </div>
    </html>
  )
}
