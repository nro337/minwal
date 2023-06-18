import Link from "next/link"
import prisma from "@/utils/prisma";

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default async function IndexPage() {

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      Home
    </section>
  )
}
