import prisma from "@/utils/prisma"
import { Group } from "@prisma/client"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const res = (await request.json()) as any;

    const newGroup = await prisma.group.create({
      data: {
        name: res.name,
        private: res.private,
        users: {
          create: res.users
        }
      }
    })
    return NextResponse.json({
      group: {
        id: newGroup.id,
        name: newGroup.name,
        privateGroup: newGroup.private,
        createdAt: newGroup.createdAt,
      }
    })
  } catch (error:any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message
      }),
      {status: 500}
    )
  }
}