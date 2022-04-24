import React from "react";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

const Code = ({ lang = "js", children }) => {
  return (
    <SyntaxHighlighter
      showLineNumbers
      startingLineNumber={1}
      language={lang}
      style={docco}
      lineNumberStyle={{ color: "#ddd", fontSize: 20 }}
      wrapLines={false}
    >
      {children?.replace(/^\s+|\s+$/g, "")}
    </SyntaxHighlighter>
  );
};

export default Code;
