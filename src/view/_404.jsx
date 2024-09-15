import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className=" w-full h-auto flex flex-col justify-center items-center p-14">

        <div className="w-auto h-auto mt-8">
          <div className="text-3xl text-cta-text font-bold">
            404 Not found
          </div>
          <hr className="w-full my-4 h-0.5 border-t-0 bg-cta-text opacity-50" />
        </div>
        <Link
          className=" w-[180px] h-[40px] my-3 mb-6 bg-cta-btn  rounded-lg font-bold text-cta-btn-text flex justify-center items-center"
          to={"/"}
        >
          Return to home
        </Link>
      </div>
    </>
  );
}
