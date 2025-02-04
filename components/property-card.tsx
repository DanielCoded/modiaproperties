import Image from "next/image"
import type { Property } from "@/types"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Square } from "lucide-react"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={property.image || "/placeholder.svg"} alt={property.title} layout="fill" objectFit="cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{property.location}</p>
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Bed size={16} className="mr-1" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Square size={16} className="mr-1" />
            <span>{property.area} sqft</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 bg-gray-50">
        <span className="text-lg font-bold text-[#3D0C11]">{property.price}</span>
        <Button variant="outline">View Details</Button>
      </CardFooter>
    </Card>
  )
}

