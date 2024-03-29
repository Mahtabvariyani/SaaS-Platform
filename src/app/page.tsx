import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-48 flex flex-col items-center justify-center text-center ">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-z shadow-md backdrop-blur transition-all hover:border-gray-500 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700 p-3">
          This page is now Public
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
