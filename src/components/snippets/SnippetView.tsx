"use client";
import { Editor } from "@monaco-editor/react";
function SnippetView({ code }: any) {
  return (
    <Editor
      height="40vh"
      theme="vs-dark"
      language="javascript"
      defaultValue={code}
      value={code}
      options={{ minimap: { enabled: false }, readOnly: true }}
    />
  );
}

export default SnippetView;
