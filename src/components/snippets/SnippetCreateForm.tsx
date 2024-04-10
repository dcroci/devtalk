"use client";
import { createSnippet } from "@/actions/snippets";
import { useFormState } from "react-dom";
import { Editor } from "@monaco-editor/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Input } from "@nextui-org/react";
function SnippetCreateForm({ language }: any) {
  const [formState, action] = useFormState(createSnippet, { message: "" });
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (formState.message) {
      setIsLoading(false);
    }
  }, [formState]);
  function handleEditorChange(value: string = "") {
    setCode(value);
  }

  return (
    <form
      action={action}
      className="col-span-full px-2 lg:col-span-3"
      onSubmit={() => setIsLoading(true)}
    >
      <p className="mb-2 text-small text-medGray">
        <Link href="/">Home</Link> /{" "}
        <Link href={`/${language.name.toLowerCase()}`}>{language.name}</Link> /{" "}
        <Link href={`/${language.name.toLowerCase()}/snippets`}>
          <span>Snippets</span> /{" "}
        </Link>
        <Link
          href={`/${language.name.toLowerCase()}/snippets/new`}
          className="text-almostWhite"
        >
          Create
        </Link>{" "}
      </p>
      <h3 className="mb-2  flex items-center text-[36px] font-bold text-almostWhite">
        Create a {language.name} Snippet
      </h3>
      <div className="flex flex-col gap-4">
        <Input
          label="Snippet Title"
          radius="lg"
          name="title"
          id="title"
          placeholder="Give this Snippet a title"
        />
        <Input
          label="Description"
          radius="lg"
          name="desc"
          id="desc"
          placeholder="What does this Snippet do?"
        />

        <div className="flex flex-col gap-4">
          <Editor
            height="40vh"
            theme="vs-dark"
            language="javascript"
            options={{ minimap: { enabled: false } }}
            onChange={handleEditorChange}
          />
          <input
            type="text"
            name="code"
            id="code"
            value={code}
            className="hidden"
          />
        </div>
        <input
          className="hidden"
          value={language.id}
          type="text"
          id="id"
          name="id"
        ></input>
        {formState.message ? (
          <div className="my-2 rounded border border-red-400 bg-red-200 p-2">
            {formState.message}
          </div>
        ) : null}
        <Button
          className="rounded bg-purple p-2 px-4 py-2 font-semibold text-almostWhite"
          type="submit"
          isLoading={isLoading}
          spinnerPlacement="end"
        >
          Create
        </Button>
      </div>
    </form>
  );
}

export default SnippetCreateForm;
