"use client"

import { useState, useEffect } from "react"
import type { Property } from "@/types"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getProperties } from "@/app/actions/properties"

export default function Properties() {
  const [properties, setProperties] = useState<Property[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setIsLoading(true)
        const fetchedProperties = await getProperties()
        setProperties(fetchedProperties.slice(0, 3)) // Only display the first 3 properties
        setError(null)
      } catch (error) {
        console.error("Error fetching properties:", error)
        setError("Failed to load properties. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }
    fetchProperties()
  }, [])

  if (isLoading) {
    return <div className="text-center py-24">Loading properties...</div>
  }

  if (error) {
    return <div className="text-center py-24 text-red-500">{error}</div>
  }

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          Featured Properties
        </h2>
        {properties.length === 0 ? (
          <div className="text-center py-12">No properties found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className={cn(
                  "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#3D0C11] font-bold">{property.price}</span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div
          className={cn(
            "text-center mt-12 transition-all duration-700 delay-500",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          <Link href="/properties">
            <Button size="lg" className="bg-[#3D0C11] hover:bg-[#2D090D] text-white">
              View All Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

