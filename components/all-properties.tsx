"use client"

import { useState, useEffect } from "react"
import type { Property } from "@/types"
import { PropertyCard } from "@/components/property-card"
import { fetchProperties } from "@/app/actions/properties" // Updated import
import { motion } from "framer-motion"

export default function AllProperties() {
  const [properties, setProperties] = useState<Property[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setIsLoading(true)
        const fetchedProperties = await fetchProperties() // Updated function call
        setProperties(fetchedProperties)
        setError(null)
      } catch (error) {
        console.error("Error fetching properties:", error)
        setError("Failed to load properties. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }
    loadProperties()
  }, [])

  if (isLoading) {
    return <div className="text-center py-24">Loading properties...</div>
  }

  if (error) {
    return <div className="text-center py-24 text-red-500">{error}</div>
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Properties</h2>
        {properties.length === 0 ? (
          <div className="text-center py-12">No properties found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
