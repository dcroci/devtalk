"use client";
import { createSnippet } from "@/actions/createSnippet";
import { useFormState } from "react-dom";
function SnippetCreateForm() {
  const [formState, action] = useFormState(createSnippet, { message: "" });
  return (
    <form action={action} className="col-span-3 ">
      <h3 className="m-3 font-bold text-almostWhite">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12 text-almostWhite" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full rounded border p-2"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12 text-almostWhite" htmlFor="code">
            Code
          </label>
          <textarea
            id="code"
            name="code"
            className="w-full rounded border p-2"
          />
        </div>
        {formState.message ? (
          <div className="my-2 rounded border border-red-400 bg-red-200 p-2">
            {formState.message}
          </div>
        ) : null}
        <button className="rounded bg-blue-200 p-2" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}

export default SnippetCreateForm;
