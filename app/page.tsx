import Link from "next/link"
import prisma from "@/utils/prisma"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"

export default async function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      Home
      <Button className="w-max">
        <Link href={"/groups"}>Groups</Link>
      </Button>
      <Button className="w-max">
        <Link href={"/creategroup"}>Create Group</Link>
      </Button>
    </section>
  )
}
