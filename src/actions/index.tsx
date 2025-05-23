"use server";

import AddAffirm from "@/components/affirmations/AddAffirm";
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

export async function changeStatus(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const todo = await prisma.affirmation.findUnique({
    where: {
      id: inputId,
    },
  });

  const updateStatus = !affirmation?.isCompleted;

  await prisma.affirmation.update({
    where: {
      id: inputId,
    },
    data: {
      wasSaid: updateStatus,
    },
  });

  revalidatePath("/");
}