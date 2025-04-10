import { notFound } from "next/navigation"
import Edizione2023 from "../2023/page"
import Edizione2024 from "../2024/page"

export default function EdizioneYear({ params }: { params: { year: string } }) {
  const { year } = params

  // Redirect to the specific year page
  if (year === "2023") {
    return <Edizione2023 />
  } else if (year === "2024") {
    return <Edizione2024 />
  }

  // If the year is not supported, return 404
  return notFound()
}

export function generateStaticParams() {
  return [{ year: "2023" }, { year: "2024" }]
}

