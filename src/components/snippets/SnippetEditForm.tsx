"use client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { editSnippet } from "@/actions/snippets";
import { Button } from "@nextui-org/react";

function SnippetEditForm({ snippet, language }: any) {
  const [code, setCode] = useState(snippet.code);
  function handleEditorChange(value: string = "") {
    setCode(value);
  }
  const editSnippetAction = editSnippet.bind(null, snippet.id, code, language);
  return (
    <div className="col-span-5 px-2 lg:col-span-3">
      <h1 className="col-span-full h-fit text-[36px] font-bold text-almostWhite">
        {`Edit ${snippet.title} `}
      </h1>

      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <Button
          type="submit"
          className=" ml-auto mt-2 flex items-center justify-center rounded bg-purple font-semibold text-almostWhite"
        >
          Save
        </Button>
      </form>
    </div>
  );
}

export default SnippetEditForm;
