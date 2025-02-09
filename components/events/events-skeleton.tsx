import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

export const EventSkeleton = () => (
  <Card className="w-[425px] animate-pulse transition hover:scale-105">
    <CardHeader className="pb-3">
      <CardTitle>
        <span className="h-6 w-3/4 rounded-md bg-gray-300" />
      </CardTitle>
      <CardDescription>
        <span className="grid grid-cols-2 grid-rows-2 gap-2">
          <span className="col-start-1 row-start-1 h-4 w-1/2 rounded-md bg-gray-300" />
          <span className="col-start-2 row-start-1 ml-auto h-4 w-1/2 rounded-md bg-gray-300" />
          <span className="col-start-2 row-start-2 ml-auto h-4 w-1/2 rounded-md bg-gray-300" />
        </span>
      </CardDescription>
    </CardHeader>
    <CardContent>
      <span className="mb-2 h-4 w-full rounded-md bg-gray-300" />
      <span className="mb-2 h-4 w-5/6 rounded-md bg-gray-300" />
      <span className="h-4 w-3/4 rounded-md bg-gray-300" />
    </CardContent>
    <CardFooter className="flex justify-between">
      <span className="h-10 w-48 rounded-md bg-gray-300" />
    </CardFooter>
  </Card>
)
