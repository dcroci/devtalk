import { Project } from "@prisma/client";

function CreatedProjects({ projects }: any) {
  return (
    <div className="mb-2 border-b-2 border-darkGray">
      <h2 className="text-3xl font-medium text-almostWhite">
        Your Talking Points
      </h2>
      <div className="flex gap-2">
        {projects ? (
          projects.map((project: Project) => (
            <section key={project.id}>
              <h3 className="text-almostWhite">{project.title}</h3>
            </section>
          ))
        ) : (
          <p className="text-medGray">
            You have not created any Projects yet. Get started now!
          </p>
        )}
      </div>
    </div>
  );
}

export default CreatedProjects;
