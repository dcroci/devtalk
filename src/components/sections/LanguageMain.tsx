import { Button } from "@nextui-org/react";
import { Language } from "@prisma/client";
import Link from "next/link";

function LanguageMain({ language }: any) {
  console.log(language);
  return (
    <main className="col-start-2 col-end-5 flex flex-col gap-4">
      <p className="text-small text-medGray">
        <Link href="/">Home</Link> /{" "}
        <Link
          href={`/${language.name.toLowerCase()}`}
          className="text-almostWhite"
        >
          {language.name}
        </Link>{" "}
      </p>
      <section className="flex flex-col gap-2">
        {/* This is where the programming language will go dynamically */}
        <h1 className="flex  items-center text-[36px] font-bold text-almostWhite">
          {language.name}
        </h1>

        {/* This is where the language description will go dynamically */}
        <p className="text-medGray">
          Dive into coding with Dev Talk, where every line of code connects you
          to a world of resources, expert insights, and a vibrant developer
          community.
        </p>
        {/* This is where the language logo will go dynamically */}
        <img className="w-[224px]" src={language.logoUrl} alt="" />
      </section>
      <section id="useCase" className="border-b-1 border-darkGray pb-4">
        {/* This is where the language use case will go dynamically */}
        <h2 className="text-[24px] font-semibold text-almostWhite">
          What is {language.name} used for?
        </h2>
        <p className="text-medGray">{language.usedFor}</p>
      </section>
      <section id="history" className="border-b-1 border-darkGray pb-4">
        <h2 className="text-[24px] font-semibold text-almostWhite">
          The History of {language.name}
        </h2>
        <p className="text-medGray">{language.history}</p>
      </section>
      <section id="documentation" className="border-b-1 border-darkGray pb-4">
        <h2 className="text-[24px] font-semibold text-almostWhite">
          Documentation
        </h2>
        <p className="text-medGray">
          Dive into coding with Dev Talk, where every line of code connects you
          to a world of resources, expert insights, and a vibrant developer
          community.
        </p>
      </section>
      <section id="latestRelease" className="border-b-1 border-darkGray pb-4">
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
        <section
          id="contentCreators"
          className="flex flex-col gap-4 border-b-1 border-darkGray pb-4"
        >
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
          {language.creator1Name && (
            <section className="grid grid-cols-4">
              <img
                src={language.creator1Image}
                alt=""
                className="col-start-1 col-end-1 rounded-full"
              />
              <div className="col-start-2 col-end-5">
                <h3 className="text-[18px] font-semibold text-almostWhite">
                  {language.creator1Name}
                </h3>
                <p className="text-medGray">{language.creator1Desc}</p>
                <Link
                  href={language.creator1Link}
                  target="_blank"
                  className=" ml-auto mt-2 flex w-fit"
                >
                  <Button className="rounded bg-purple px-4 py-2 font-semibold text-almostWhite">
                    View Channel
                  </Button>
                </Link>
              </div>
            </section>
          )}
          {language.creator2Name && (
            <section className="grid grid-cols-4">
              <img
                src={language.creator2Image}
                alt=""
                className="col-start-1 col-end-1 rounded-full"
              />
              <div className="col-start-2 col-end-5">
                <h3 className="text-[18px] font-semibold text-almostWhite">
                  {language.creator2Name}
                </h3>
                <p className="text-medGray">{language.creator2Desc}</p>
                <Link
                  href={language.creator2Link}
                  className=" ml-auto mt-2 flex w-fit"
                  target="_blank"
                >
                  <Button className="rounded bg-purple px-4 py-2 font-semibold text-almostWhite">
                    View Channel
                  </Button>
                </Link>
              </div>
            </section>
          )}
          {language.creator3Name && (
            <section className="grid grid-cols-4">
              <img
                src={language.creator3Image}
                alt=""
                className="col-start-1 col-end-1 rounded-full"
              />
              <div className="col-start-2 col-end-5">
                <h3 className="text-[18px] font-semibold text-almostWhite">
                  {language.creator3Name}
                </h3>
                <p className="text-medGray">{language.creator3Desc}</p>
                <Link
                  href={language.creator3Link}
                  className=" ml-auto mt-2 flex w-fit"
                  target="_blank"
                >
                  <Button className="rounded bg-purple px-4 py-2 font-semibold text-almostWhite">
                    View Channel
                  </Button>
                </Link>
              </div>
            </section>
          )}
        </section>
        <section
          id="courses"
          className="grid grid-cols-2 gap-4 border-b-1 border-darkGray pb-4"
        >
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
              <Link href={"/"} className=" ml-auto flex w-fit ">
                <Button className="rounded bg-purple px-4 py-2 font-semibold text-almostWhite">
                  View Course
                </Button>
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
              <Link href={"/"} className=" ml-auto flex w-fit ">
                <Button className="rounded bg-purple px-4 py-2 font-semibold text-almostWhite">
                  View Course
                </Button>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}

export default LanguageMain;
