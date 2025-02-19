import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="relative mb-8 sm:mb-12 lg:mb-20">
      <Input
        type="text"
        placeholder="Items, collections and creators"
        className="h-10 sm:h-12 bg-white pl-3 sm:pl-4 pr-24 sm:pr-32 text-base sm:text-base placeholder:text-gray-500 placeholder:text-[0.6rem] placeholder:sm:text-xs text-black focus:outline-none"
      />
      <div className="absolute right-0 top-0 flex h-full items-center gap-1 sm:gap-2 px-2 sm:px-4">
        <div className="h-5 sm:h-6 w-[1px] bg-gray-200" />
        <select className="h-full bg-transparent pr-1 sm:pr-2 text-xs sm:text-xs text-gray-600 focus:outline-none">
          <option>Category</option>
        </select>
        <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
      </div>
    </div>
  )
}

