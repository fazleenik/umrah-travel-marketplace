import { ProviderCard } from "@/components/providers/ProviderCard";
import { MainNav } from "@/components/nav/MainNav";

const providers = [
  {
    name: "Al-Safwah Travel",
    description: "Premium Umrah packages with 5-star accommodations and dedicated guides.",
    registrationNumber: "UM123456",
    contactNumber: "+60 3-1234 5678",
    website: "https://example.com",
    imageUrl: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&q=80",
  },
  {
    name: "Barakah Tours",
    description: "Affordable and comprehensive Umrah packages for families.",
    registrationNumber: "UM789012",
    contactNumber: "+60 3-8765 4321",
    website: "https://example.com",
    imageUrl: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80",
  },
  {
    name: "Rahman Travel & Tours",
    description: "Experienced provider with 20+ years serving pilgrims.",
    registrationNumber: "UM345678",
    contactNumber: "+60 3-2468 1357",
    website: "https://example.com",
    imageUrl: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Choose Your Umrah Provider</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Select from our trusted Umrah travel providers offering comprehensive packages for your spiritual journey.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider) => (
            <ProviderCard key={provider.registrationNumber} {...provider} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;