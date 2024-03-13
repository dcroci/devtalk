"use client";

import { useFormState } from "react-dom";
import { createTalkingPoint } from "@/actions/createTalkingPoint";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

interface CreateTalkingPointFormProps {
  languageId: string;
}

function CreateTalkingPointForm({ languageId }: CreateTalkingPointFormProps) {
  const [formState, action] = useFormState(
    createTalkingPoint.bind(null, languageId),
    {
      errors: {},
    },
  );
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button className="bg-purple  font-bold text-almostWhite">
          Create a Post
        </Button>
      </PopoverTrigger>
      <PopoverContent className="border-2 border-white bg-almostWhite text-white">
        <form action={action}>
          <div className="flex w-80 flex-col gap-4 p-4">
            <h3 className="text-lg">Create a Post</h3>
            <Input
              label="Title"
              name="title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              label="Content"
              name="content"
              labelPlacement="outside"
              placeholder="Write your post"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />
            {formState.errors._form ? (
              <div className="w-full text-center text-tiny text-danger">
                {formState.errors._form?.join(", ")}
              </div>
            ) : null}

            <Button type="submit">Save</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

export default CreateTalkingPointForm;
