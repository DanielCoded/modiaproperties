import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PropertiesHero from "@/components/properties-hero"
import AllProperties from "@/components/all-properties"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Properties | Modia Properties",
  description:
    "Explore our curated selection of premium properties and find your ideal home or investment opportunity.",
}

export default function PropertiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <PropertiesHero />
        <AllProperties />
      </main>
      <Footer />
    </>
  )
}

