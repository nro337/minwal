'use server'

import { createGroup } from "@/utils/groups"
import { revalidatePath } from "next/cache"

export async function createGroupAction({name, privateGroup}:{name: string, privateGroup?: boolean}) {
  await createGroup({name, privateGroup})
  revalidatePath("/groups")
}