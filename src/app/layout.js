'use client';

import GlobalStyle from '@/style/GlobalStyle';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
