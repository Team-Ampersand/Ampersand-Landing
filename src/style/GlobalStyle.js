import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body {
          overscroll-behavior-y: none;
        }

        body,
        * {
          font-family: 'Pretendard';
          box-sizing: border-box;
        }
        button {
          border: none;
          padding: 0;
          cursor: pointer;
          background: none;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
}
