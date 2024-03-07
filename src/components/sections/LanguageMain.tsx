import Link from "next/link";

function LanguageMain() {
  return (
    <main className="col-start-2 col-end-5 flex flex-col gap-4">
      <section>
        <h1 className="flex h-14 items-center text-[36px] font-bold text-almostWhite">
          JavaScript
        </h1>

        <p className="text-medGray">
          Dive into coding with Dev Talk, where every line of code connects you
          to a world of resources, expert insights, and a vibrant developer
          community.
        </p>
        <img
          className="w-[224px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
          alt=""
        />
      </section>
      <section id="useCase">
        <h2 className="text-[24px] font-semibold text-almostWhite">
          What is JavaScript used for?
        </h2>
        <p className="text-medGray">
          Dive into coding with Dev Talk, where every line of code connects you
          to a world of resources, expert insights, and a vibrant developer
          community.Dive into coding with Dev Talk, where every line of code
          connects you to a world of resources, expert insights, and a vibrant
          developer community.Dive into coding with Dev Talk, where every line
          of code connects you to a world of resources, expert insights, and a
          vibrant developer community.Dive into coding with Dev Talk, where
          every line of code connects you to a world of resources, expert
          insights, and a vibrant developer community.Dive into coding with Dev
          Talk, where every line of code connects you to a world of resources,
          expert insights, and a vibrant developer community.Dive into coding
          with Dev Talk, where every line of code connects you to a world of
          resources, expert insights, and a vibrant developer community.
        </p>
      </section>
      <section id="history">
        <h2 className="text-[24px] font-semibold text-almostWhite">
          The History of JavaScript
        </h2>
        <p className="text-medGray">
          Dive into coding with Dev Talk, where every line of code connects you
          to a world of resources, expert insights, and a vibrant developer
          community.Dive into coding with Dev Talk, where every line of code
          connects you to a world of resources, expert insights, and a vibrant
          developer community.Dive into coding with Dev Talk, where every line
          of code connects you to a world of resources, expert insights, and a
          vibrant developer community.Dive into coding with Dev Talk, where
          every line of code connects you to a world of resources, expert
          insights, and a vibrant developer community.Dive into coding with Dev
          Talk, where every line of code connects you to a world of resources,
          expert insights, and a vibrant developer community.Dive into coding
          with Dev Talk, where every line of code connects you to a world of
          resources, expert insights, and a vibrant developer community.
        </p>
      </section>
      <section id="documentation">
        <h2 className="text-[24px] font-semibold text-almostWhite">
          Documentation
        </h2>
        <p className="text-medGray">
          Dive into coding with Dev Talk, where every line of code connects you
          to a world of resources, expert insights, and a vibrant developer
          community.
        </p>
      </section>
      <section id="latestRelease">
        <h2 className="text-[24px] font-semibold text-almostWhite">
          Latest Release
        </h2>
        <p className="text-medGray">
          Dive into coding with Dev Talk, where every line of code connects you
          to a world of resources, expert insights, and a vibrant developer
          community.
        </p>
      </section>
      <section id="resources" className="flex flex-col gap-4">
        <h2 className="text-[36px] font-bold text-almostWhite">Resources</h2>
        <p className="text-medGray">
          Dive into coding with Dev Talk, where every line of code connects you
          to a world of resources, expert insights, and a vibrant developer
          community.
        </p>
        <section id="contentCreators" className="flex flex-col gap-4">
          <section>
            <h2 className="text-[24px] font-semibold text-almostWhite">
              Content Creators
            </h2>
            <p className="text-medGray">
              Dive into coding with Dev Talk, where every line of code connects
              you to a world of resources, expert insights, and a vibrant
              developer community.
            </p>
          </section>

          <section className="grid grid-cols-4">
            <img
              src="https://yt3.googleusercontent.com/ytc/AIdro_k-KLe5SzhIK9AaYnUzMdTt3RHX6LuK5VM7MFta=s176-c-k-c0x00ffffff-no-rj"
              alt=""
              className="col-start-1 col-end-1 rounded-full"
            />
            <div className="col-start-2 col-end-5">
              <h3 className="text-[18px] font-semibold text-almostWhite">
                Web Dev Simplified
              </h3>
              <p className="text-medGray">
                Dive into coding with Dev Talk, where every line of code
                connects you to a world of resources, expert insights, and a
                vibrant developer community. Dive into coding with Dev Talk,
                where every line of code connects you to a world of resources,
                expert insights, and a vibrant developer community.
              </p>
              <Link
                href={"/"}
                className=" ml-auto flex w-fit rounded bg-purple px-4 py-2 font-semibold text-almostWhite"
              >
                View Channel
              </Link>
            </div>
          </section>
          <section className="grid grid-cols-4">
            <img
              src="https://yt3.googleusercontent.com/ytc/AIdro_k-KLe5SzhIK9AaYnUzMdTt3RHX6LuK5VM7MFta=s176-c-k-c0x00ffffff-no-rj"
              alt=""
              className="col-start-1 col-end-1 rounded-full"
            />
            <div className="col-start-2 col-end-5">
              <h3 className="text-[18px] font-semibold text-almostWhite">
                Web Dev Simplified
              </h3>
              <p className="text-medGray">
                Dive into coding with Dev Talk, where every line of code
                connects you to a world of resources, expert insights, and a
                vibrant developer community. Dive into coding with Dev Talk,
                where every line of code connects you to a world of resources,
                expert insights, and a vibrant developer community.
              </p>
              <Link
                href={"/"}
                className=" ml-auto flex w-fit rounded bg-purple px-4 py-2 font-semibold text-almostWhite"
              >
                View Channel
              </Link>
            </div>
          </section>
          <section className="grid grid-cols-4">
            <img
              src="https://yt3.googleusercontent.com/ytc/AIdro_k-KLe5SzhIK9AaYnUzMdTt3RHX6LuK5VM7MFta=s176-c-k-c0x00ffffff-no-rj"
              alt=""
              className="col-start-1 col-end-1 rounded-full"
            />
            <div className="col-start-2 col-end-5">
              <h3 className="text-[18px] font-semibold text-almostWhite">
                Web Dev Simplified
              </h3>
              <p className="text-medGray">
                Dive into coding with Dev Talk, where every line of code
                connects you to a world of resources, expert insights, and a
                vibrant developer community. Dive into coding with Dev Talk,
                where every line of code connects you to a world of resources,
                expert insights, and a vibrant developer community.
              </p>
              <Link
                href={"/"}
                className=" ml-auto flex w-fit rounded bg-purple px-4 py-2 font-semibold text-almostWhite"
              >
                View Channel
              </Link>
            </div>
          </section>
        </section>
        <section id="courses" className="grid grid-cols-2 gap-4">
          <section className="col-span-full">
            <h2 className="text-[24px] font-semibold text-almostWhite">
              Popular Courses
            </h2>
            <p className="text-medGray">
              Dive into coding with Dev Talk, where every line of code connects
              you to a world of resources, expert insights, and a vibrant
              developer community.
            </p>
          </section>

          <section className="grid grid-cols-1 gap-4">
            <img
              src="https://miro.medium.com/v2/resize:fit:750/1*guF3jJePGofWd8dkdzuaqA.jpeg"
              alt=""
            />
            <div>
              <h3 className="text-[18px] font-semibold text-almostWhite">
                The Complete JavaScript Course 2024: From Zero to Expert!
              </h3>
              <p className="text-medGray">
                Dive into coding with Dev Talk, where every line of code
                connects you to a world of resources, expert insights, and a
                vibrant developer community. Dive into coding with Dev Talk,
                where every line of code connects you to a world of resources,
                expert insights, and a vibrant developer community.
              </p>
              <Link
                href={"/"}
                className=" ml-auto flex w-fit rounded bg-purple px-4 py-2 font-semibold text-almostWhite"
              >
                View Course
              </Link>
            </div>
          </section>
          <section className="grid grid-cols-1">
            <img
              src="https://miro.medium.com/v2/resize:fit:750/1*guF3jJePGofWd8dkdzuaqA.jpeg"
              alt=""
            />
            <div>
              <h3 className="text-[18px] font-semibold text-almostWhite">
                The Complete JavaScript Course 2024: From Zero to Expert!
              </h3>
              <p className="text-medGray">
                Dive into coding with Dev Talk, where every line of code
                connects you to a world of resources, expert insights, and a
                vibrant developer community. Dive into coding with Dev Talk,
                where every line of code connects you to a world of resources,
                expert insights, and a vibrant developer community.
              </p>
              <Link
                href={"/"}
                className=" ml-auto flex w-fit rounded bg-purple px-4 py-2 font-semibold text-almostWhite"
              >
                View Course
              </Link>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}

export default LanguageMain;
