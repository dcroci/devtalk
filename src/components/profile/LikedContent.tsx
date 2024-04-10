"use client";
import Link from "next/link";
import TimeAgo from "../common/TimeAgo";
import { Card } from "@nextui-org/react";
import { motion } from "framer-motion";
function LikedContent({ talkingPointLikes }: any) {
  return (
    <div className="mb-2 border-b-2 border-darkGray">
      <h2 className="mb-2 text-3xl font-semibold text-almostWhite">
        Your Likes
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {talkingPointLikes ? (
          talkingPointLikes.map((talkingPointLike: any, i: number) => (
            <motion.div
              key={talkingPointLike.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                ease: "linear",
                duration: 0.5,
                delay: 0.1 + i * 0.15,
              }}
            >
              <Link
                href={`/${talkingPointLike.talkingPoint.language.name.toLowerCase()}/talkingpoints/${talkingPointLike.talkingPoint.id}`}
                key={talkingPointLike.id}
              >
                <Card className="relative min-h-[120px] rounded border-l-4 border-purple  bg-almostBlack px-6  py-6 transition-all duration-200 lg:hover:scale-[1.01] lg:hover:border-l-8 ">
                  <img
                    src={talkingPointLike.talkingPoint.language.logoUrl}
                    alt=""
                    className="h-20 w-20"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="leading-relaxed text-almostWhite">
                      {talkingPointLike.talkingPoint.title}
                    </h3>
                    <p className="text-medGray">
                      <TimeAgo date={talkingPointLike.createdAt} />
                    </p>
                    {/* <img src={project.imgUrl} alt="" className="w-fit" /> */}
                  </div>
                </Card>
              </Link>
            </motion.div>
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

export default LikedContent;
