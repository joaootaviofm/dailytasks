export default function Hero() {
  return (
    <div className="px-[100px] mt-[200px] flex flex-col justify-center items-center gap-[20px] text-white">
      <h1 className="text-6xl font-bold">
        Double your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
          productivity
        </span>
      </h1>
      <div className="text-center text-4xl mt-[20px]">
        <p>
          {" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
            Track
          </span>{" "}
          your habits,
        </p>
        <p>
          Be
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
            {" "}
            better
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-between mt-[20px] gap-5  max-w-[700px] text-center">
        <p>
          Tracking your daily tasks gives you clarity, focus, and direction.
          Instead of reacting to distractions, you take control of your time and
          energy. With a clear plan, you can prioritize what matters, reduce
          procrastination, and build the discipline needed to make steady
          progress every single day.
        </p>
        <p>
          When you track your tasks daily, you unlock more than productivity—you
          build momentum. You feel less overwhelmed, accomplish more with less
          stress, and turn goals into habits. Over time, small daily actions
          compound into massive results. Consistency is the secret to growth,
          and tracking is the first step.
        </p>
        <div className="mt-[20px] w-full flex justify-center items-center">
          <a href="/tasks" className="font-bold tracking-[2px] text-lg border-black border hover:shadow-purple-100 shadow-2xl hover:scale-105 duration-400 w-full py-2 bg-gradient-to-l from-[#9C83FF] to-[#80080] rounded-lg">Start tracking</a>
        </div>
      </div>
    </div>
  );
}

