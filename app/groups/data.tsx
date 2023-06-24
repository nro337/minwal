import prisma from "@/utils/prisma";
import { Group, User } from "@prisma/client";

export default async function GetGroups() {
  const groups = await prisma.group.findMany({
    include: {
      users: true
    }
  })

  return (
    <ul>
      {groups.map((group: Group & {users: User[]}) => (
        <li key={group.id}>{group.name} - {group.users[0].username}</li>
      ))}
    </ul>
  )
}