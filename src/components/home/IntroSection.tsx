function IntroSection() {
  return (
    <section className="col-span-full mt-[80px] grid grid-cols-5">
      <h1 className="col-span-full p-6 text-center text-[60px] font-bold text-almostWhite">
        Where Code Meets{" "}
        <span className="text-shadow text-purple shadow-md">Community</span>
      </h1>
      <p className="col-start-2 col-end-5 mb-10 px-8 pb-4 text-center text-[20px] font-normal text-medGray">
        Dive into coding with Dev Talk, where every line of code connects you to
        a world of resources, expert insights, and a vibrant developer
        community.
      </p>
      <div className="col-span-full flex gap-4">
        <section className="w-[1000px min-h-[380px] rounded border-2 border-darkGray p-[24px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="mx-auto h-60 w-60  stroke-almostWhite"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
          <h3 className="text-[20px] font-semibold text-almostWhite">
            Create Talking Points
          </h3>
          <p className="text-[14px] text-medGray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            impedit, placeat aliquam rem asperiores, necessitatibus illo alias,
            sed ratione tempore ut. Nemo perspiciatis eaque delectus id
            voluptates optio asperiores. Numquam.
          </p>
        </section>
        <section className="w-[1000px min-h-[380px] rounded border-2 border-darkGray p-[24px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="mx-auto h-60 w-60  stroke-almostWhite"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
          <h3 className="text-[20px] font-semibold text-almostWhite">
            Discover Code Snippets
          </h3>
          <p className="text-[14px] text-medGray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            impedit, placeat aliquam rem asperiores, necessitatibus illo alias,
            sed ratione tempore ut. Nemo perspiciatis eaque delectus id
            voluptates optio asperiores. Numquam.
          </p>
        </section>
        <section className="w-[1000px min-h-[380px] rounded border-2 border-darkGray p-[24px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="mx-auto h-60 w-60  stroke-almostWhite"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
          <h3 className="text-[20px] font-semibold text-almostWhite">
            Share Your Projects
          </h3>
          <p className="text-[14px] text-medGray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            impedit, placeat aliquam rem asperiores, necessitatibus illo alias,
            sed ratione tempore ut. Nemo perspiciatis eaque delectus id
            voluptates optio asperiores. Numquam.
          </p>
        </section>
      </div>
    </section>
  );
}

export default IntroSection;
