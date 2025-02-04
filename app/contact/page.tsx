import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import dynamic from "next/dynamic"
import type { Metadata } from "next"

const ContactMap = dynamic(() => import("@/components/contact-map"), { ssr: false })

export const metadata: Metadata = {
  title: "Contact Us | Modia Properties",
  description: "Get in touch with Modia Properties for all your real estate needs.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#3D0C11]">Get in Touch</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We're here to help you with all your real estate needs. Whether you're looking to buy, sell, or invest, our
            team of experts is ready to assist you.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <ContactForm />
            <ContactInfo />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <ContactMap />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

