import { Button } from "@/components/ui/button"

const Welcome = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-2">
      <p>Welcome to unote</p>
      <Button>Create your first note</Button>
    </div>
  )
}

export default Welcome