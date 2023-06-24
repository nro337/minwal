'use client'
// import prisma from "@/utils/prisma";
// import { User } from "@prisma/client";
import { Check, ChevronsUpDown } from "lucide-react"
import { User } from "@prisma/client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect, useState } from "react";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export default function UsersDropdown({users}:{users: User[]}) {
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className="w-[200px] justify-between"
      >
        {value
          ? users.find((user) => user.username === value)?.username
          : "Select user..."}
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-[200px] p-0">
      <Command>
        <CommandInput placeholder="Search user..." />
        <CommandEmpty>No user found.</CommandEmpty>
        <CommandGroup>
          {users.map((user) => (
            <CommandItem
              key={user.id}
              onSelect={(currentValue) => {
                setValue(currentValue === value ? "" : currentValue)
                setOpen(false)
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  value === user.username ? "opacity-100" : "opacity-0"
                )}
              />
              {user.username}
            </CommandItem>
          ))}
        </CommandGroup>
      </Command>
    </PopoverContent>
  </Popover>
  )
}