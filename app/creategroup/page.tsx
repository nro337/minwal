import { User } from "@prisma/client"
import { CreateGroupForm } from "./form"
import GetUsers from "./users"
import prisma from "@/utils/prisma"

export default async function Page() {

  const users: User[] = await prisma.user.findMany()

  return (
    <>
      <CreateGroupForm users={users} />
      {/* {users.length && <GetUsers users={users} />} */}
    </>
  )
}
