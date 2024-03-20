"use client";
import { editProject } from "@/actions/projects";
import { Input, Button, Textarea } from "@nextui-org/react";
import { Project } from "@prisma/client";
import { useState } from "react";
function EditProjectForm({ project }: any) {
  const [formState, setFormState] = useState({
    title: project.title,
    desc: project.desc,
    imgUrl: project.imgUrl,
    githubLink: project.githubLink,
    liveSiteLink: project.liveSiteLink,
  });
  const EditProjectFormAction = editProject.bind(
    null,
    project,
    formState.title,
    formState.desc,
    formState.imgUrl,
    formState.githubLink,
    formState.liveSiteLink,
  );
  function updateFormState(e: any) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  return (
    <form action={EditProjectFormAction} className="w-full">
      <div className="flex w-full flex-col gap-4 p-4 ">
        <h3 className="text-lg font-semibold text-almostWhite">
          Edit a Project
        </h3>
        <Input
          label="Title"
          name="title"
          labelPlacement="inside"
          placeholder="Name of your project"
          value={formState.title}
          defaultValue={formState.title}
          onChange={(e) => updateFormState(e)}
          //   isInvalid={!!formState.errors.title}
          //   errorMessage={formState.errors.title?.join(", ")}
        />
        <Input
          label="Image URL"
          name="imgUrl"
          labelPlacement="inside"
          placeholder="Link to an image"
          value={formState.imgUrl}
          onChange={(e) => updateFormState(e)}
          //   isInvalid={!!formState.errors.imgUrl}
          //   errorMessage={formState.errors.imgUrl?.join(", ")}
        />
        <Textarea
          label="Description"
          name="desc"
          labelPlacement="inside"
          placeholder="Tell us about your project"
          value={formState.desc}
          onChange={(e) => updateFormState(e)}
          //   isInvalid={!!formState.errors.content}
          //   errorMessage={formState.errors.content?.join(", ")}
        />
        {/* {formState.errors._form ? (
          <div className="w-full text-center text-tiny text-danger">
            {formState.errors._form?.join(", ")}
          </div>
        ) : null} */}
        <Input
          label="GitHub Link"
          name="githubLink"
          labelPlacement="inside"
          placeholder="Link to GitHub repo"
          value={formState.githubLink}
          //   isInvalid={!!formState.errors.githubLink}
          //   errorMessage={formState.errors.githubLink?.join(", ")}
        />
        <Input
          label="Live Site Link"
          name="liveSiteLink"
          labelPlacement="inside"
          placeholder="Link to live site"
          value={formState.liveSiteLink}
          onChange={(e) => updateFormState(e)}
          //   isInvalid={!!formState.errors.liveSiteLink}
          //   errorMessage={formState.errors.liveSiteLink?.join(", ")}
        />
        <Button type="submit" className="bg-purple  font-bold text-almostWhite">
          Save
        </Button>
      </div>
      {/* <CheckboxGroup
        label="Select Languages Used"
        color="secondary"
        name="languages"
        orientation="horizontal"
        defaultValue={["JavaScript"]}
      > */}
      {/* {languages.map((language: any) => (
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
      </CheckboxGroup> */}
    </form>
  );
}

export default EditProjectForm;
