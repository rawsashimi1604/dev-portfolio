import React from "react";

function CodeBlock({ code }) {
  return (
    <code className="bg-gray-700 px-2.5 py-[1px] text-white rounded-lg">
      {code}
    </code>
  );
}

export default CodeBlock;
