import './globals.css'

export const metadata = {
  title: 'النيزك - تجربة راقية في عالم السيارات',
  description: 'النيزك - وكالة سيارات راقية تقدم مجموعة واسعة من السيارات الجديدة والمستعملة مع خدمات التمويل والصيانة',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
