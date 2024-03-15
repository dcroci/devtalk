"use client";

import { useFormState } from "react-dom";
import { createTalkingPoint } from "@/actions/talkingpoints";
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
        <Button className=" bg-purple  text-2xl font-semibold text-almostWhite">
          +
        </Button>
      </PopoverTrigger>
      <PopoverContent className="border-2 border-almostBlack bg-almostBlack text-almostBlack shadow-sm shadow-medGray">
        <form action={action}>
          <div className="flex w-80 flex-col gap-4 p-4">
            <h3 className="text-lg font-semibold text-almostWhite">
              Create a Talking Point
            </h3>
            <Input
              label="Title"
              name="title"
              labelPlacement="inside"
              placeholder="How do I create an array?"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              label="Content"
              name="content"
              labelPlacement="inside"
              placeholder="Write your Talking Point"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />
            {formState.errors._form ? (
              <div className="w-full text-center text-tiny text-danger">
                {formState.errors._form?.join(", ")}
              </div>
            ) : null}

            <Button
              type="submit"
              className="bg-purple  font-bold text-almostWhite"
            >
              Create
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

export default CreateTalkingPointForm;
