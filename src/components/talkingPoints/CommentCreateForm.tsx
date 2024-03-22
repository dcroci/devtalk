"use client";

import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Textarea, Button } from "@nextui-org/react";
import { createComment } from "@/actions/comments";
import { motion } from "framer-motion";

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
  const [isLoading, setIsLoading] = useState(false);
  const [formState, action] = useFormState(
    createComment.bind(null, { talkingPointId, parentId }),
    { errors: {} },
  );
  useEffect(() => {
    if (formState.errors.content) {
      setIsLoading(false);
    }
    if (formState.success) {
      setIsLoading(false);
    }
  }, [formState]);

  useEffect(() => {
    if (formState.success) {
      ref.current?.reset();

      if (!startOpen) {
        setOpen(false);
      }
    }
  }, [formState, startOpen]);

  const form = (
    <motion.form
      onSubmit={() => setIsLoading(true)}
      ref={ref}
      action={action}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,

        ease: [0, 0.71, 0.2, 1.01],
      }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      <div className="space-y-2  px-1 text-almostWhite">
        <Textarea
          className="border-purple  "
          name="content"
          placeholder="Enter your comment"
          isInvalid={!!formState.errors.content}
          errorMessage={formState.errors.content?.join(", ")}
          autoFocus
          variant="bordered"
        />

        {formState.errors._form ? (
          <div className="rounded border border-red-400 bg-red-200 p-2">
            {formState.errors._form?.join(", ")}
          </div>
        ) : null}

        <Button
          type="submit"
          className="jus ml-auto flex w-min bg-purple font-bold text-white"
          isLoading={isLoading}
        >
          Create Comment
        </Button>
      </div>
    </motion.form>
  );

  return (
    <div>
      <div className="flex flex-col">
        <div className="mb-2 flex items-center gap-2">
          <Button
            size="sm"
            className="w-min bg-transparent p-0 text-white"
            onClick={() => setOpen(!open)}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            {/* {7} Comments */}
          </Button>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={2}
              className="h-6 w-6 stroke-purple"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>

            {/* <p className="mr-4 text-small text-almostWhite">{7}</p> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={2}
              className="h-6 w-6 stroke-purple"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </div>
        </div>
        {open && form}
      </div>
    </div>
  );
}
