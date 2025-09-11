import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

export const EventSkeleton = () => {
  return (
    <Card className="w-[425px]">
      <CardHeader className="relative">
        <CardTitle>
          <span className="inline-block h-6 w-40 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        </CardTitle>
        <CardDescription>
          <span className="mt-2 inline-block h-4 w-64 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <span className="block h-4 w-5/6 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          <span className="block h-4 w-4/6 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="h-9 w-44 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
      </CardFooter>
    </Card>
  )
}
