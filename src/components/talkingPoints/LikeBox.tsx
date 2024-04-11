interface LikeBoxProps {
  //fix this type later
  likes: string | number;
}
async function LikeBox({ likes }: LikeBoxProps) {
  return (
    <p className="mb-8 text-center text-small font-bold text-almostWhite">
      {likes}
    </p>
  );
}

export default LikeBox;
