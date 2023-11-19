import React, { useContext } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialDark,
  materialLight,
} from "/node_modules/react-syntax-highlighter/dist/esm/styles/prism";
import { DARK_THEME, ThemeContext } from "./layout";
import copy from "copy-to-clipboard";

export function CodeBlock({ className, children }) {
  const { theme } = useContext(ThemeContext);

  if (!className) {
    return <code>{children}</code>;
  }

  return (
    <div className="code-container">
      <a className="btn btn-outline code-copy-button" href="#" onClick={() => copy(children)}>
        <i class="bi bi-clipboard-fill"></i>
      </a>
      <SyntaxHighlighter
        language={className.split("language-")[1]}
        style={theme === DARK_THEME ? materialDark : materialLight}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
