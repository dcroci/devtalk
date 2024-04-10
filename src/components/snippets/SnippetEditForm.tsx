"use client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { editSnippet } from "@/actions/snippets";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

function SnippetEditForm({ snippet, language }: any) {
  const [code, setCode] = useState(snippet.code);
  const [desc, setDesc] = useState(snippet.desc);
  const [title, setTitle] = useState(snippet.title);
  function handleEditorChange(value: string = "") {
    setCode(value);
  }
  const editSnippetAction = editSnippet.bind(
    null,
    snippet.id,
    title,
    desc,
    code,
    language,
  );
  return (
    <div className="col-span-5 px-2 lg:col-span-3">
      <p className="mb-2 text-small text-medGray">
        <Link href="/">Home</Link> /{" "}
        <Link href={`/${snippet.language.name.toLowerCase()}`}>
          {snippet.language.name}
        </Link>{" "}
        /{" "}
        <Link href={`/${snippet.language.name.toLowerCase()}/snippets`}>
          <span>Snippets</span>
        </Link>{" "}
        /{" "}
        <Link
          href={`/${snippet.language.name.toLowerCase()}/snippets/${snippet.id}`}
        >
          <span>{snippet.title}</span>
        </Link>{" "}
        / <span className="text-almostWhite">Edit</span>
      </p>
      <h1 className=" w-full  py-4 text-[30px] font-bold text-almostWhite">
        {`Editing "${snippet.title}" `}
      </h1>
      <form action={editSnippetAction}>
        <div className="flex flex-col gap-4 pb-4">
          <Input
            label="Title"
            radius="lg"
            name="title"
            value={title}
            id="title"
            placeholder={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            label="Description"
            radius="lg"
            name="desc"
            value={desc}
            id="desc"
            placeholder={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <Editor
          height="40vh"
          theme="vs-dark"
          language="javascript"
          defaultValue={snippet.code}
          options={{ minimap: { enabled: false } }}
          onChange={handleEditorChange}
        />

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
