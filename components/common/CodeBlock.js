import React from "react";

function CodeBlock({ code }) {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <code className="text-sm font-mono text-gray-800 whitespace-pre">{code}</code>
    </div>
  );
}

export default CodeBlock;
