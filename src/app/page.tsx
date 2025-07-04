import AddAffirm from "@/components/affirmations/AddAffirm";
import { prisma } from "@/utils/prisma";

async function getData() {
  const data = await prisma.affirmation.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className=" w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-4xl font-extrabold uppercase">Affirmation App</span>
      <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
        <span className="lowercase">of the day</span>
      </h1>

      <div className="flex justify-center flex-col items-center">
        <AddAffirm />

        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
          {data.map((affrimation, id) => (
            <div className="w-full" key={id}>
              <Affrimation affrimation={affrimation} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}