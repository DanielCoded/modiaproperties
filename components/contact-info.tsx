"use client"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactInfo() {
  const contactItems = [
    {
      icon: <MapPin className="w-6 h-6 text-[#3D0C11]" />,
      title: "Address",
      content: "No 2 Michika street off Ahmadu Bello way Area 11 Garki Abuja Nigeria",
    },
    {
      icon: <Phone className="w-6 h-6 text-[#3D0C11]" />,
      title: "Phone",
      content: (
        <>
          <p>+234 803 974 3274</p>
          <p>+234 813 538 9424</p>
        </>
      ),
    },
    {
      icon: <Mail className="w-6 h-6 text-[#3D0C11]" />,
      title: "Email",
      content: "modiaproperties@gmail.com",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#3D0C11]" />,
      title: "Business Hours",
      content: (
        <>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </>
      ),
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-6 text-[#3D0C11]">Contact Information</h2>
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="flex items-start"
          >
            <div className="mr-4 mt-1">{item.icon}</div>
            <div>
              <h3 className="font-medium text-gray-900">{item.title}</h3>
              <div className="text-gray-600 mt-1">{item.content}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

