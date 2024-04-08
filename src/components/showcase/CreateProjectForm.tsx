"use client";

import { useFormState } from "react-dom";
import { createProject } from "@/actions/projects";
import {
  Input,
  Button,
  Textarea,
  CheckboxGroup,
  Checkbox,
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";

import { useEffect, useState } from "react";

interface CreateProjectFormProps {
  languageId: string;
  languages: Array<{
    name: string;
    logoUrl: string;
  }>;
}

function CreateProjectForm({ languageId, languages }: CreateProjectFormProps) {
  const [formState, action] = useFormState(
    createProject.bind(null, languageId),
    {
      errors: {},
    },
  );
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (formState.errors) {
      setIsLoading(false);
    }
  }, [formState]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className=" bg-purple  text-2xl font-semibold text-almostWhite"
      >
        +
      </Button>
      <Modal placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalBody className="border-2 border-almostBlack bg-almostBlack text-almostBlack shadow-sm shadow-medGray">
            <form action={action} onSubmit={() => setIsLoading(true)}>
              <div className="flex w-full flex-col gap-4 p-4">
                <h3 className="text-lg font-semibold text-almostWhite">
                  Create a Project
                </h3>
                <Input
                  label="Title"
                  name="title"
                  labelPlacement="inside"
                  placeholder="Name of your project"
                  isInvalid={!!formState.errors.title}
                  errorMessage={formState.errors.title?.join(", ")}
                />
                <Input
                  label="Image URL"
                  name="imgUrl"
                  labelPlacement="inside"
                  placeholder="Link to an image"
                  isInvalid={!!formState.errors.imgUrl}
                  errorMessage={formState.errors.imgUrl?.join(", ")}
                />
                <Textarea
                  label="Content"
                  name="content"
                  labelPlacement="inside"
                  placeholder="Tell us about your project"
                  isInvalid={!!formState.errors.content}
                  errorMessage={formState.errors.content?.join(", ")}
                />
                {formState.errors._form ? (
                  <div className="w-full text-center text-tiny text-danger">
                    {formState.errors._form?.join(", ")}
                  </div>
                ) : null}
                <Input
                  label="GitHub Link"
                  name="githubLink"
                  labelPlacement="inside"
                  placeholder="Link to GitHub repo"
                  isInvalid={!!formState.errors.githubLink}
                  errorMessage={formState.errors.githubLink?.join(", ")}
                />
                <Input
                  label="Live Site Link"
                  name="liveSiteLink"
                  labelPlacement="inside"
                  placeholder="Link to live site"
                  isInvalid={!!formState.errors.liveSiteLink}
                  errorMessage={formState.errors.liveSiteLink?.join(", ")}
                />
                <Button
                  type="submit"
                  className="bg-purple  font-bold text-almostWhite"
                  isLoading={isLoading}
                  spinnerPlacement="end"
                >
                  Create
                </Button>
              </div>
              <CheckboxGroup
                label="Select Languages Used"
                color="secondary"
                name="languages"
                defaultValue={["JavaScript"]}
              >
                {languages.map((language: any) => (
                  <Checkbox
                    className="mx-4 flex  items-center  gap-4 p-4 hover:bg-darkGray"
                    key={language.id}
                    name={language.name}
                    id={language.name}
                    value={language.name}
                  >
                    <img src={language.logoUrl} alt="" className="h-6 w-6" />
                    <p>{language.name}</p>
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateProjectForm;
