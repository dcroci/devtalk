import { Avatar } from "@nextui-org/react";

function ProfileInfo({ user }: any) {
  return (
    <div className="mb-2 border-b-2 border-darkGray">
      <div className="mb-10 flex items-center gap-4">
        <img
          src={user.image}
          className="col-start-1 h-28 w-28 rounded-full border-2 border-purple transition-all duration-1000  hover:shadow-lg hover:shadow-purple"
        />
        <section className="col-start-2">
          <h2 className="text-3xl font-medium text-almostWhite">{user.name}</h2>
          <p className="text-medGray">{user.email}</p>
        </section>
      </div>
      <small className="text-xs text-medGray">
        This information is securely collected from GitHub OAuth{" "}
      </small>
    </div>
  );
}

export default ProfileInfo;
