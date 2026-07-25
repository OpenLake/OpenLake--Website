import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { ThemeLock } from "@/components/ThemeToggle";


export default function EventsPage() {
  return (
    <>
      <ThemeLock />
      <Navbar />

      <main className="min-h-screen bg-[var(--background)]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50 pt-36 pb-28">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
              OpenLake Events
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
              Explore workshops, hackathons, bootcamps, tech talks, and
              community events that bring students together to learn, build, and
              innovate.
            </p>
          </div>

          {/* Decorative Blurs */}
          <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-red-200 opacity-25 blur-3xl"></div>
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-200 opacity-25 blur-3xl"></div>
        </section>
        {/* Upcoming Event */}
        <section className="mx-auto max-w-7xl px-6 py-20" id="upcoming">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">Upcoming Event</h2>

            <p className="mt-4 text-lg text-gray-600">
              Stay tuned for the next exciting event organized by OpenLake.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
            <div className="grid gap-0 md:grid-cols-2">
              {/* Image */}
              {/* Image */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/team/up.jpg"
                  alt="Upcoming OpenLake Event"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-10">
                <span className="mb-3 inline-block w-fit rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
                  Coming Soon
                </span>

                <h3 className="text-3xl font-bold text-gray-900">
                  OpenLake Tech Workshop
                </h3>

                <p className="mt-5 text-gray-600 leading-8">
                  Join us for an exciting technical workshop featuring hands-on
                  sessions, networking opportunities, and guidance from
                  experienced mentors.
                </p>

                <div className="mt-8 flex flex-wrap gap-6 text-gray-700">
                  <span>📅 Date: To be Announced</span>
                  <span>📍 Venue: IIT BHILAI</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Past Events */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">Past Events</h2>

            <p className="mt-4 text-lg text-gray-600">
              Take a look at some of the memorable events organized by OpenLake.
            </p>
          </div>

          <div className="space-y-10">
            {/* Event 1 */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80">
                  <Image
                    src="/team/eventimage.png"
                    alt="Member"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col justify-center p-10">
                  <span className="mb-3 inline-block w-fit rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
                    22 Jan 2026
                  </span>

                  <h3 className="text-3xl font-bold text-black">FOSS OVERFLOW</h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    OverFlow into Open Source with India's Largest Open Source
                    Hackathon.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-6 text-gray-700">
                    <span>📍 IIT BHILAI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80 w-full bg-white">
                  <Image
                    src="/team/events12.png"
                    alt="Member"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col justify-center p-10">
                  <span className="mb-3 inline-block w-fit rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
                    11 Oct 2025
                  </span>
                  <h3 className="text-3xl font-bold text-black">
                    Linux Installation Workshop
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    Diving deep into Linux Fundamentals and Installation. From
                    sudo to grep - everything finally made sense!
                  </p>

                  <div className="mt-8 flex flex-wrap gap-6 text-gray-700">
                    <span>📍 IIT BHILAI</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80">
                  <Image
                    src="/team/event11.png"
                    alt="Member"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col justify-center p-10">
                  <span className="mb-3 inline-block w-fit rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
                    29 Aug 2025
                  </span>
                  <h3 className="text-3xl font-bold text-black">
                    Git & GitHub Workshop - Beginner Friendly!
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    A hands-on Git & GitHub workshop.Perfect for freshers &
                    anyone curious about open-source!
                  </p>

                  <div className="mt-8 flex flex-wrap gap-6 text-gray-700">
                    <span>📍IIT BHILAI</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80">
                  <Image
                    src="/team/event9.png"
                    alt="Member"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col justify-center p-10">
                  <span className="mb-3 inline-block w-fit rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
                    13 Jan 2025
                  </span>
                  <h3 className="text-3xl font-bold text-black">GSoC : An Introduction</h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    An inspiring and insightful session on Google Summer of Code
                    and how to make meaningful contributions to open source.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-6 text-gray-700">
                    <span>📍 IIT BHILAI</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80">
                  <Image
                    src="/team/event8.png"
                    alt="Member"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col justify-center p-10">
                  <span className="mb-3 inline-block w-fit rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
                    18 Jan 2025
                  </span>
                  <h3 className="text-3xl font-bold text-black">
                    Intro to Software Development
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    Beginner-friendly workshop covering fundamentals of building
                    real-world software projects.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-6 text-gray-700">
                    <span>📍 IIT BHILAI</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80">
                  <Image
                    src="/team/event7.png"
                    alt="Member"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col justify-center p-10">
                  <span className="mb-3 inline-block w-fit rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
                    30 Oct 2024
                  </span>
                  <h3 className="text-3xl font-bold text-black">
                    A Quick Start to Software Development
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    Tailored to equip you with the knowledge and tools to
                    kickstart your journey in software development.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-6 text-gray-700">
                    <span>📍 IIT BHILAI</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80">
                  <Image
                    src="/team/event10.png"
                    alt="Member"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col justify-center p-10">
                  <span className="mb-3 inline-block w-fit rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
                    25 June 2023
                  </span>
                  <h3 className="text-3xl font-bold text-black">How to Open-Source</h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    Open source Tools and Technologies and Open Source
                    opportunities for contributing to global projects.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-6 text-gray-700">
                    <span>📍 IIT BHILAI</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80">
                  <Image
                    src="/team/event5.png"
                    alt="Member"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center p-10">
                  <span className="mb-3 inline-block w-fit rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
                    15 Aug 2022
                  </span>
                  <h3 className="text-3xl font-bold text-black">
                    OpenlySourced with Anand Panchbai
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    An introductory workshop on open source.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-6 text-gray-700">
                    <span>📍 IIT BHILAI</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80">
                  <Image
                    src="/team/event4.png"
                    alt="Member"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col justify-center p-10">
                  <span className="mb-3 inline-block w-fit rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
                    06 Aug 2022
                  </span>
                  <h3 className="text-3xl font-bold text-black">
                    Object Oriented Programming and Flask
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    An introductory workshop on OOP concepts and Flask
                    framework.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-6 text-gray-700">
                    <span>📍 IIT BHILAI</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80">
                  <Image
                    src="/team/eventsimage.png"
                    alt="Member"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col justify-center p-10">
                  <span className="mb-3 inline-block w-fit rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
                    12 June 2022
                  </span>
                  <h3 className="text-3xl font-bold text-black">
                    HTML & CSS Tutorial + Hackathon
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    Hands-on web development session followed by a mini
                    hackathon, with goodies for participants.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-6 text-gray-700">
                    <span>📍 IIT BHILAI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
