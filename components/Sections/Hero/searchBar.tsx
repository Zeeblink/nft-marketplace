import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="relative mb-20">
      <Input
        type="text"
        placeholder="Items, collections and creators"
        className="h-12 bg-white pl-4 pr-32 text-base placeholder:text-gray-500"
      />
      <div className="absolute right-0 top-0 flex h-full items-center gap-2 px-4">
        <div className="h-6 w-[1px] bg-gray-200" />
        <select className="h-full bg-transparent pr-2 text-sm text-gray-600 focus:outline-none">
          <option>Category</option>
        </select>
        <Search className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  )
}

