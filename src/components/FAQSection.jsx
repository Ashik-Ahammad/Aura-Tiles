
import Image from "next/image";
import { Accordion } from "@heroui/react";

const FAQSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#F7F5F2] ">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        <div className="relative flex justify-center">
          <div className="relative w-70 sm:w-87.5 md:w-112.5 lg:w-112.5">

            <Image
              src="https://bracketweb.com/floenswp/wp-content/uploads/2024/01/faq-1-1.jpg"
              alt="Tiles Background"
              width={500}
              height={500}
              className="rounded-md"
            />

            <Image
              src="https://bracketweb.com/floenswp/wp-content/uploads/2024/01/faq-1-2.jpg"
              alt="Tile Work"
              width={350}
              height={350}
              className="absolute -bottom-10 -right-10 rounded-md shadow-lg border-4 border-white"
            />
          </div>
        </div>

        <div>

          <div className="mb-6">
            <p className="text-sm text-[#C68B5F] font-semibold uppercase tracking-wider">
              Our FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B1E17] mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-4 text-sm md:text-base">
              Find answers to common questions about our tiles, installation
              process, and services. We ensure quality materials and expert
              craftsmanship for every project.
            </p>
          </div>

          <Accordion
            allowsMultipleExpanded
            className="w-full space-y-3"
          >
            <Accordion.Item className="bg-white rounded-md shadow-sm">
              <Accordion.Heading>
                <Accordion.Trigger className="px-4 py-3 font-semibold text-left flex justify-between items-center">
                  What types of tiles do you offer?
                  <Accordion.Indicator />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body className="px-4 pb-4 text-sm text-gray-600">
                  We offer ceramic, porcelain, marble, and wood-finish tiles
                  suitable for floors, walls, kitchens, and bathrooms.
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className="bg-white rounded-md shadow-sm">
              <Accordion.Heading>
                <Accordion.Trigger className="px-4 py-3 font-semibold text-left flex justify-between items-center">
                  How do I choose the right tile for my space?
                  <Accordion.Indicator />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body className="px-4 pb-4 text-sm text-gray-600">
                  Consider the area usage, durability, slip resistance, and
                  design preference. Our experts can guide you based on your
                  project needs.
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className="bg-white rounded-md shadow-sm">
              <Accordion.Heading>
                <Accordion.Trigger className="px-4 py-3 font-semibold text-left flex justify-between items-center">
                  Are your tiles suitable for outdoor use?
                  <Accordion.Indicator />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body className="px-4 pb-4 text-sm text-gray-600">
                  Yes, we provide weather-resistant and anti-slip tiles that are
                  perfect for outdoor areas like balconies, patios, and walkways.
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className="bg-white rounded-md shadow-sm">
              <Accordion.Heading>
                <Accordion.Trigger className="px-4 py-3 font-semibold text-left flex justify-between items-center">
                  Do you provide installation services?
                  <Accordion.Indicator />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body className="px-4 pb-4 text-sm text-gray-600">
                  Yes, we offer professional tile installation services to
                  ensure a perfect finish and long-lasting durability.
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;