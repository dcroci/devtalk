"use client";

import { useFormState } from "react-dom";
import { createProject } from "@/actions/projects";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectSection,
  SelectItem,
  CheckboxGroup,
  Checkbox,
} from "@nextui-org/react";
import Link from "next/link";

interface CreateProjectFormProps {
  languageId: string;
  languages: any;
}

function CreateProjectForm({ languageId, languages }: CreateProjectFormProps) {
  const [formState, action] = useFormState(
    createProject.bind(null, languageId),
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
            >
              Create
            </Button>
          </div>
          <CheckboxGroup
            label="Select Languages Used"
            color="secondary"
            name="languages"
            orientation="horizontal"
            defaultValue={["JavaScript"]}
          >
            {languages.map((language: any) => (
              <Checkbox
                className="mx-4 flex  items-center  gap-4 p-0 hover:bg-darkGray"
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
      </PopoverContent>
    </Popover>
  );
}

export default CreateProjectForm;
