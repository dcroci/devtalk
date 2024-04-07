interface LikeBoxProps {
  likes: string;
}
async function LikeBox({ likes }: LikeBoxProps) {
  return (
    <p className="mb-8 text-center text-small font-bold text-almostWhite">
      {likes}
    </p>
  );
}

export default LikeBox;
