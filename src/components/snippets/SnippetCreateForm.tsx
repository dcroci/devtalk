"use client";
import { createSnippet } from "@/actions/createSnippet";
import { useFormState } from "react-dom";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@nextui-org/react";
function SnippetCreateForm({ language }: any) {
  console.log(language);
  const [formState, action] = useFormState(createSnippet, { message: "" });
  const [code, setCode] = useState("");
  function handleEditorChange(value: string = "") {
    setCode(value);
  }

  // console.log(language);
  return (
    <form action={action} className="col-span-3 ">
      <p className="text-small text-medGray">
        <Link href="/">Home</Link> /{" "}
        <Link href={`/${language.name.toLowerCase()}`}>{language.name}</Link> /{" "}
        <span>Snippets</span> /{" "}
        <Link
          href={`/${language.name.toLowerCase()}/snippets/new`}
          className="text-almostWhite"
        >
          Create
        </Link>{" "}
      </p>
      <h3 className="flex  items-center text-[36px] font-bold text-almostWhite">
        Create a {language.name} Snippet
      </h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Input
            label="Search"
            radius="lg"
            name="title"
            id="title"
            classNames={{
              label: "text-white/90",
              inputWrapper: [
                "shadow-xl",
                "bg-darkGray",
                "dark:bg-darkGray/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-darkGray-200/70",
                "dark:hover:bg-darkGray/70",
                "group-data-[focused=true]:bg-darkGray-200/50",
                "dark:group-data-[focused=true]:bg-darkGray/60",
                "!cursor-text",
              ],
            }}
            placeholder="Type to search..."
          />
        </div>
        <div className="flex flex-col gap-4">
          <label className="w-12 text-almostWhite" htmlFor="code">
            Code
          </label>
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
        <button
          className="rounded bg-purple p-2 px-4 py-2 font-semibold text-almostWhite"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default SnippetCreateForm;
