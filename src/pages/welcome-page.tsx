import MaxWidthWrapper from "@/components/max-width-wrapper";

const WelcomePage = () => {
  return (
    <div className="">
      <MaxWidthWrapper>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1 className="text-heading font-abril text-8xl font-extrabold uppercase tracking-tighter [text-shadow:_2px_7px_6px_rgb(69_221_149_/_70%)]">
            Dev Learn
          </h1>
          <h2 className="text-7xl font-extrabold uppercase tracking-tighter text-white">
            Quizly
          </h2>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default WelcomePage;
