import Image from "next/image";

export default function Home() {
  return (
   <div className="w-screen py-20 flex justify-center flex-col items-center">
    <span className="text-4xl font-extrabold uppercase">Affirmations for the Day</span>
<h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
  <span className="lowercase">of the day</span>
</h1>

    <div className="flex justidy-center felx-col iterms-center">
      {/* input to do */}
      {/* map to do */}
    </div>
   </div>
  );
}
