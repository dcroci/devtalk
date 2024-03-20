"use client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { editSnippet } from "@/actions/snippets";

function SnippetEditForm({ snippet, language }: any) {
  const [code, setCode] = useState(snippet.code);
  function handleEditorChange(value: string = "") {
    setCode(value);
  }
  const editSnippetAction = editSnippet.bind(null, snippet.id, code, language);
  return (
    <div className="col-span-3">
      <h1 className="col-span-full h-fit text-[36px] font-bold text-almostWhite">
        {`Edit ${snippet.title} `}
      </h1>
      <h1>{snippet.title}</h1>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button className="rounded border p-2 text-almostWhite">Save</button>
      </form>
    </div>
  );
}

export default SnippetEditForm;
