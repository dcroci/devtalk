"use client";

import { useFormState } from "react-dom";
import { createTalkingPoint } from "@/actions/talkingpoints";
import {
  Input,
  Button,
  Textarea,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

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
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  useEffect(() => {
    if (formState.errors) {
      setIsLoading(false);
    }
  }, [formState.errors]);
  return (
    <>
      <Button
        className=" w-full bg-purple  text-2xl font-semibold text-almostWhite shadow-lg shadow-purple/50"
        onPress={onOpen}
      >
        +
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        className="mx-8"
      >
        <ModalContent>
          <form action={action} onSubmit={() => setIsLoading(true)}>
            <div className="flex w-full flex-col gap-4 p-4">
              <ModalHeader>
                <h3 className="text-lg font-semibold text-almostWhite">
                  Create a Talking Point
                </h3>
              </ModalHeader>
              <ModalBody>
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
                  isLoading={isLoading}
                >
                  Create
                </Button>
              </ModalBody>
            </div>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateTalkingPointForm;
