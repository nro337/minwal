import prisma from "@/utils/prisma";
import { Group } from "@prisma/client";

export default async function GetGroups() {
  const groups = await prisma.group.findMany()

  return (
    <ul>
      {groups.map((group: Group) => (
        <li key={group.id}>{group.name}</li>
      ))}
    </ul>
  )
}