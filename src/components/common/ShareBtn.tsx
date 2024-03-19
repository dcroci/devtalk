"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";
function ShareBtn({ talkingPoint }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <Button
          size="sm"
          className="flex items-center justify-center rounded bg-purple  text-small text-white transition-all duration-1000"
          onClick={() => setIsOpen(() => true)}
        >
          Share
        </Button>
      ) : (
        <motion.div className="flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <TwitterShareButton
              url={`https://devtalkdc.vercel.app/${talkingPoint.language.name.toLowerCase()}/talkingpoints/${talkingPoint.id}`}
            >
              <XIcon size={40} />
            </TwitterShareButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <EmailShareButton
              url={`https://devtalkdc.vercel.app/${talkingPoint.language.name.toLowerCase()}/talkingpoints/${talkingPoint.id}`}
              subject={`Check out this DevTalk post by ${talkingPoint.user.name}: ${talkingPoint.title}`}
            >
              <EmailIcon size={40} />
            </EmailShareButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <FacebookShareButton
              url={`https://devtalkdc.vercel.app/${talkingPoint.language.name.toLowerCase()}/talkingpoints/${talkingPoint.id}`}
            >
              <FacebookIcon size={40} />
            </FacebookShareButton>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default ShareBtn;
