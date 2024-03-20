import Image from "next/image";
function IntroSection() {
  return (
    <section className="col-span-full mt-[40px] grid grid-cols-5 lg:mt-[80px]">
      <h1 className="col-span-full p-6 text-center text-[60px] font-bold text-almostWhite">
        Where Code Meets{" "}
        <span className="text-shadow text-purple shadow-md">Community</span>
      </h1>
      <p className="col-start-2 col-end-5 mb-10 pb-4 text-center text-[20px] font-normal text-medGray md:px-8">
        Dive into coding with Dev Talk, where every line of code connects you to
        a world of resources, expert insights, and a vibrant developer
        community.
      </p>
      <div className="col-span-full grid grid-cols-1 place-items-center gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        <section className="flex  h-full min-h-[380px] w-[400px]  flex-col justify-between gap-2 rounded border-2 border-darkGray p-[24px] transition-all duration-1000 hover:shadow-md hover:shadow-purple">
          <Image
            src="/assets/tp.png"
            alt="image of a talking point"
            width={400}
            height={400}
          />
          <div>
            <h3 className="text-[20px] font-semibold text-almostWhite">
              Create Talking Points
            </h3>
            <p className="text-[14px] leading-relaxed text-medGray">
              Talking Points are your space to spark discussions and share
              insights on web development topics. Share your thoughts, ask
              questions, and connect with peers to exchange knowledge and ideas
              in a vibrant community.
            </p>
          </div>
        </section>
        <section className="flex  h-full min-h-[380px] w-[400px]  flex-col justify-between gap-2 rounded border-2 border-darkGray p-[24px] transition-all duration-1000 hover:shadow-md hover:shadow-purple">
          <Image
            src="/assets/snippet.png"
            alt="image of a code snippet"
            width={400}
            height={400}
          />
          <div>
            <h3 className="text-[20px] font-semibold text-almostWhite">
              Discover Code Snippets
            </h3>
            <p className="text-[14px] leading-relaxed text-medGray">
              Find and share concise, ready-to-use code pieces across various
              languages and frameworks. Enhance your projects and learn new
              tricks with this curated selection of code snippets.
            </p>
          </div>
        </section>
        <section className="flex  h-full min-h-[380px] w-[400px]  flex-col justify-between gap-2 rounded border-2 border-darkGray p-[24px] transition-all duration-1000 hover:shadow-md hover:shadow-purple">
          <Image
            src="/assets/project.png"
            alt="image of a code snippet"
            width={400}
            height={400}
          />
          <div>
            <h3 className="text-[20px] font-semibold text-almostWhite">
              Share Your Projects
            </h3>
            <p className="text-[14px] leading-relaxed text-medGray">
              Showcase your work and gain feedback from the community. Highlight
              your achievements, the technologies you used, and the obstacles
              you overcame. Connect, inspire, and grow with fellow developers.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default IntroSection;
