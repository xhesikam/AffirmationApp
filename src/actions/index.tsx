"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function createAffrim(formData: FormData) {
  const input = formData.get("input") as string;
  if (!input.trim()) {
    return;
  }

  await prisma.affirmation.create({
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}