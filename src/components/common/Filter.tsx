function Filter() {
  return (
    <div className="mb-4 mt-2 w-full rounded bg-darkGray">
      <ul className="grid w-full grid-cols-4 place-items-center  text-medium text-almostWhite">
        <li className="block h-full w-full border-b-2 border-purple px-2 py-4 text-center text-[14px]">
          New
        </li>
        <li className="block h-full w-full  px-2 py-4 text-center text-[14px]">
          Most Liked
        </li>
        <li className="block h-full w-full  px-2 py-4 text-center text-[14px]">
          Most Comments
        </li>
        <li className="block h-full w-full  px-2 py-4 text-center text-[14px]">
          Active
        </li>
      </ul>
    </div>
  );
}

export default Filter;
