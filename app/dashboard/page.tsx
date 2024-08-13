import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import InitButton from "./_component/initButton"

export default async function DashboardHome() {
  return (
    <div className="flex flex-1 flex-grow flex-col gap-4 lg:gap-6">
      <div className="flex flex-1 items-center justify-center rounded-3xl border bg-field shadow-sm">
        <div className="flex max-w-[500px] flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Explore Roxtron
          </h3>
          <p className="mt-3 text-muted-foreground">
            Link to koyeb to enable your bot
          </p>
          <div className="mt-8">
              <InitButton />
          </div>
          {/* <p className="mt-3 text-muted-foreground">
            (You must be logged in with an &quot;admin&quot; role in your
            organization.)
          </p> */}
        </div>
      </div>
    </div>
  )
}
