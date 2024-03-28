"use client";
import { editTalkingPoint } from "@/actions/talkingpoints";
import { Button, Textarea, Input } from "@nextui-org/react";
import { useState } from "react";
function TalkingPointEditForm({ talkingPoint }: any) {
  const [title, setTitle] = useState(talkingPoint.title);
  const [desc, setDesc] = useState(talkingPoint.desc);
  const [isLoading, setIsLoading] = useState(false);
  const EditTalkingPointAction = editTalkingPoint.bind(
    null,
    talkingPoint,
    title,
    desc,
  );

  return (
    <form
      className="w-full"
      action={EditTalkingPointAction}
      onSubmit={() => setIsLoading(true)}
    >
      <div className="flex w-full flex-col gap-4 p-4">
        <h1 className="text-lg font-semibold text-almostWhite">
          Edit a Talking Point
        </h1>
        <Input
          label="Title"
          name="title"
          labelPlacement="inside"
          placeholder="How do I create an array?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          // isInvalid={!!formState.errors.title}
          // errorMessage={formState.errors.title?.join(", ")}
        />
        <Textarea
          label="Content"
          name="content"
          labelPlacement="inside"
          placeholder="Write your Talking Point"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          // isInvalid={!!formState.errors.content}
          // errorMessage={formState.errors.content?.join(", ")}
        />
        {/* {formState.errors._form ? (
            <div className="w-full text-center text-tiny text-danger">
              {formState.errors._form?.join(", ")}
            </div>
          ) : null} */}

        <Button
          type="submit"
          className="bg-purple  font-bold text-almostWhite"
          isLoading={isLoading}
          spinnerPlacement="end"
        >
          Save
        </Button>
      </div>
    </form>
  );
}

export default TalkingPointEditForm;
