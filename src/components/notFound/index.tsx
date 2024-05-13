"use client";
import { HiHome } from "react-icons/hi";
import { Link, Navigate } from "react-router-dom";

export function NotFounded() {
  function routeToHome() {
    window.location.href = "/";
  }
  return (
    <>
      <div className="w-full h-screen">
        <div className="relative m-auto text-center">
          <div className="relative w-full h-[400px]">
            <img
              src="/images/404/404.png"
              className="object-contain"
              alt="404"
            />
          </div>
          <h1 className="absolute bottom-0 lg:-bottom-[20px] right-0 left-0 text-[20px] lg:text-[20px] text-zinc-500 font-semibold">
            صفحه مورد نظر پیدا نشد
          </h1>
        </div>

        <Link
          to="/login"
          className="mt-[70px] w-[250px] 
        border border-solid border-borderPrimary rounded-lg p-2 m-auto cursor-pointer"
        >
          <div
            className="flex justify-center items-center gap-[2px]
              text-textSecondary hover:!text-primary transition-all"
          >
            <HiHome size={25} />
            <p className="pt-[1px]">بازگشت به صفحه اصلی</p>
          </div>
        </Link>
      </div>
    </>
  );
}
