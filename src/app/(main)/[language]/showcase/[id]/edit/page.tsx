import { db } from "@/app/db";
import EditProjectForm from "@/components/showcase/EditProjectForm";
interface EditProjectParams {
  params: {
    language: string;
    id: string;
  };
}

async function EditProjectPage({ params }: EditProjectParams) {
  const { id } = params;
  const project = await db.project.findFirst({
    where: { id },
    include: {
      language: true,
    },
  });
  return (
    <main className="col-start-1 col-end-6 w-full md:col-start-2 md:col-end-5">
      <EditProjectForm project={project} />
    </main>
  );
}

export default EditProjectPage;
