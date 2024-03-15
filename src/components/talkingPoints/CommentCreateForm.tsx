"use client";

import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Textarea, Button } from "@nextui-org/react";
import { createComment } from "@/actions/comments";

interface CommentCreateFormProps {
  talkingPointId: string;
  parentId?: string;
  startOpen?: boolean;
}

export default function CommentCreateForm({
  talkingPointId,
  parentId,
  startOpen,
}: CommentCreateFormProps) {
  const [open, setOpen] = useState(startOpen);
  const ref = useRef<HTMLFormElement | null>(null);
  const [formState, action] = useFormState(
    createComment.bind(null, { talkingPointId, parentId }),
    { errors: {} },
  );
  console.log(talkingPointId);
  useEffect(() => {
    if (formState.success) {
      ref.current?.reset();

      if (!startOpen) {
        setOpen(false);
      }
    }
  }, [formState, startOpen]);

  const form = (
    <form ref={ref} action={action}>
      <div className="space-y-2 bg-purple px-1 text-almostWhite">
        <Textarea
          name="content"
          label="Reply"
          placeholder="Enter your comment"
          isInvalid={!!formState.errors.content}
          errorMessage={formState.errors.content?.join(", ")}
          autoFocus
        />

        {formState.errors._form ? (
          <div className="rounded border border-red-400 bg-red-200 p-2">
            {formState.errors._form?.join(", ")}
          </div>
        ) : null}

        <button>Create Comment</button>
      </div>
    </form>
  );

  return (
    <div>
      <Button
        size="sm"
        className="bg-purple text-white"
        onClick={() => setOpen(!open)}
      >
        Reply
      </Button>
      {open && form}
    </div>
  );
}
