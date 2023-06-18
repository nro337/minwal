import prisma from "./prisma";

export async function getGroups() {
  try {
    const groups = await prisma.group.findMany();
    return {groups}
  } catch (error) {
    return { error }
  }
}

export async function createGroup({name, privateGroup}:{name: string, privateGroup?: boolean}) {
  try {
    const group = await prisma.group.create({data: {name: name, private: privateGroup}})
    return {group}
  } catch (error) {
    return {error}
  }
}