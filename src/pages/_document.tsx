import MagicScriptTag from '@/providers/theme/components/MagicScriptTag'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <MagicScriptTag />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
