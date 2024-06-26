/* eslint-disable @next/next/no-img-element */
import { Button } from "@nextui-org/react";
import { Language } from "@prisma/client";
import Link from "next/link";

function LanguageMain({ language }: any) {
  return (
    <main className="col-start-1 col-end-6 flex flex-col gap-4 px-2 lg:col-start-2 lg:col-end-5">
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

        <p className="leading-relaxed text-medGray">
          Dive into coding with Dev Talk, where every line of code connects you
          to a world of resources, expert insights, and a vibrant developer
          community.
        </p>

        <img className="w-[224px]" src={language.logoUrl} alt="" />
      </section>
      <section id="useCase" className="border-b-1 border-darkGray pb-4">
        <h2 className="mb-2 text-[24px] font-semibold text-almostWhite">
          What is {language.name} used for?
        </h2>
        <p className="max-w-[75ch] leading-relaxed text-medGray">
          {language.usedFor}
        </p>
      </section>
      <section id="history" className="border-b-1 border-darkGray pb-4">
        <h2 className="mb-2 text-[24px] font-semibold text-almostWhite">
          The History of {language.name}
        </h2>
        <p className="max-w-[75ch] leading-relaxed text-medGray">
          {language.history}
        </p>
      </section>
      {language.documentation && (
        <section id="documentation" className="border-b-1 border-darkGray pb-4">
          <h2 className="mb-2 text-[24px] font-semibold text-almostWhite">
            Documentation
          </h2>
          <p className="text-medGray hover:underline">
            <a href={language.documentation}>
              View popular {language.name} documentation here
            </a>
          </p>
        </section>
      )}
      {language.latestRelease && (
        <section
          id="latestRelease"
          className="mb-[60px] border-b-2 border-purple pb-[60px]"
        >
          <h2 className="mb-2 text-[24px] font-semibold text-almostWhite">
            Latest Release
          </h2>
          <p className="text-medGray">
            {language.name} is currently operating at version{" "}
            {language.latestRelease}
          </p>
        </section>
      )}
      {(language.creator1Name ||
        language.course1Name ||
        language.book1Name) && (
        <section id="resources" className="flex flex-col gap-4">
          <h2 className="text-[36px] font-bold text-almostWhite">Resources</h2>
          <p className="text-medGray">
            Find the most useful resources here to help you along your learning
            journey.
          </p>
          {language.creator1Name && (
            <section
              id="contentCreators"
              className="flex flex-col gap-4 border-b-1 border-darkGray pb-4"
            >
              <section>
                <h2 className="mb-2 text-[24px] font-semibold text-almostWhite">
                  Content Creators
                </h2>
                <p className="leading-relaxed text-medGray">
                  Dive into coding with Dev Talk, where every line of code
                  connects you to a world of resources, expert insights, and a
                  vibrant developer community.
                </p>
              </section>
              {language.creator1Name && (
                <section className="grid grid-cols-1 gap-2 md:grid-cols-4">
                  <img
                    src={language.creator1Image}
                    alt=""
                    className=" mx-auto rounded-full border-2 border-purple md:col-start-1 md:col-end-1"
                  />
                  <div className="md:col-start-2 md:col-end-5">
                    <h3 className="mb-2 text-[18px] font-semibold text-almostWhite">
                      {language.creator1Name}
                    </h3>
                    <p className="leading-relaxed text-medGray">
                      {language.creator1Desc}
                    </p>
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
                <section className="grid grid-cols-1 gap-2 md:grid-cols-4">
                  <img
                    src={language.creator2Image}
                    alt=""
                    className=" mx-auto rounded-full border-2 border-purple md:col-start-1 md:col-end-1"
                  />
                  <div className="md:col-start-2 md:col-end-5">
                    <h3 className="mb-2 text-[18px] font-semibold text-almostWhite">
                      {language.creator2Name}
                    </h3>
                    <p className="leading-relaxed text-medGray">
                      {language.creator2Desc}
                    </p>
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
                <section className="grid grid-cols-1 gap-2 md:grid-cols-4">
                  <img
                    src={language.creator3Image}
                    alt=""
                    className=" mx-auto rounded-full border-2 border-purple md:col-start-1 md:col-end-1"
                  />
                  <div className="md:col-start-2 md:col-end-5">
                    <h3 className="mb-2 text-[18px] font-semibold text-almostWhite">
                      {language.creator3Name}
                    </h3>
                    <p className="mb-2 leading-relaxed text-medGray">
                      {language.creator3Desc}
                    </p>
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
          )}
          <section
            id="courses"
            className="grid grid-cols-1 gap-4 border-b-1 border-darkGray pb-4 sm:grid-cols-2"
          >
            {language.course1Name && (
              <section className="col-span-full">
                <h2 className="mb-2 text-[24px] font-semibold text-almostWhite">
                  Popular Courses
                </h2>
                <p className="leading-relaxed text-medGray">
                  Dive into coding with Dev Talk, where every line of code
                  connects you to a world of resources, expert insights, and a
                  vibrant developer community.
                </p>
              </section>
            )}
            {language.course1Name && (
              <section className="relative grid grid-cols-1 gap-4 pb-10">
                <img src={language.course1Image} alt="" className="w-full" />
                <div>
                  <h3 className="mb-2 text-[18px] font-semibold leading-relaxed text-almostWhite">
                    {language.course1Name}
                  </h3>
                  <p className="leading-relaxed text-medGray">
                    {language.course1Desc}
                  </p>
                  <a
                    href={language.course1Link}
                    className=" ml-auto flex w-fit "
                    target="_blank"
                  >
                    <Button className="absolute bottom-0 right-0 rounded bg-purple px-4 py-2 font-semibold text-almostWhite">
                      View Course
                    </Button>
                  </a>
                </div>
              </section>
            )}
            {language.course2Name && (
              <section className="relative grid grid-cols-1 gap-2 pb-10">
                <img src={language.course2Image} alt="" className="w-full" />
                <div>
                  <h3 className="mb-2 text-[18px] font-semibold leading-relaxed text-almostWhite">
                    {language.course2Name}
                  </h3>
                  <p className="mb-2 leading-relaxed text-medGray">
                    {language.course2Desc}
                  </p>
                  <a
                    href={language.course2Link}
                    className=" ml-auto flex w-fit "
                    target="_blank"
                  >
                    <Button className="absolute bottom-0 right-0 rounded bg-purple px-4 py-2 font-semibold text-almostWhite">
                      View Course
                    </Button>
                  </a>
                </div>
              </section>
            )}
          </section>
          {language.book1Name && (
            <section
              id="books"
              className="grid grid-cols-1 gap-4  pb-4 sm:grid-cols-2"
            >
              <section className="col-span-full">
                <h2 className="mb-2 text-[24px] font-semibold text-almostWhite">
                  Popular Books
                </h2>
                <p className="leading-relaxed text-medGray">
                  Dive into coding with Dev Talk, where every line of code
                  connects you to a world of resources, expert insights, and a
                  vibrant developer community.
                </p>
              </section>
              {language.book1Name && (
                <section className="relative flex flex-col">
                  <img
                    src={language.book1Image}
                    alt=""
                    className="mx-auto mb-2 w-80 sm:ml-0 sm:mr-auto"
                  />
                  <div className="pb-10">
                    <h3 className="mb-2 text-[18px] font-semibold leading-relaxed text-almostWhite">
                      {language.book1Name}
                    </h3>
                    <p className="mb-2 leading-relaxed text-medGray ">
                      {language.book1Desc}
                    </p>
                    <a
                      href={language.book1Link}
                      className=" ml-auto flex w-fit "
                      target="_blank"
                    >
                      <Button className="absolute bottom-0 right-0 rounded bg-purple px-4 py-2 font-semibold text-almostWhite">
                        View Book
                      </Button>
                    </a>
                  </div>
                </section>
              )}
              {language.book2Name && (
                <section className="relative flex flex-col">
                  <img
                    src={language.book2Image}
                    alt=""
                    className="mx-auto mb-2 w-80 sm:ml-0 sm:mr-auto"
                  />
                  <div className="pb-10">
                    <h3 className="mb-2 text-[18px] font-semibold leading-relaxed text-almostWhite">
                      {language.book2Name}
                    </h3>
                    <p className="mb-2 leading-relaxed text-medGray">
                      {language.book2Desc}
                    </p>
                    <a
                      href={language.book2Link}
                      className=" ml-auto flex w-fit "
                      target="_blank"
                    >
                      <Button className="absolute bottom-0 right-0 rounded bg-purple px-4 py-2 font-semibold text-almostWhite">
                        View Book
                      </Button>
                    </a>
                  </div>
                </section>
              )}
            </section>
          )}
        </section>
      )}
    </main>
  );
}

export default LanguageMain;
