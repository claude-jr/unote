import { Button } from "@/components/ui/button"

const Welcome = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-2">
      <div className="bg-neutral-800 size-25 rounded-4xl mb-3">

      </div>
      <p className="text-2xl">Welcome to unote</p>
      <Button>Create your first note</Button>
    </div>
  )
}

export default Welcome