import { Globe2, Truck, BadgeDollarSign, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Premium Quality",
      description:
        "Handcrafted jackets with durable stitching, premium fabrics, and long-lasting comfort.",
      icon: Globe2,
      tags: ["Durable fabrics", "Hand-stitched finish"],
    },
    {
      title: "Fast Delivery",
      description:
        "Get your jacket shipped in record time with our trusted logistics partners.",
      icon: Truck,
      tags: ["48h dispatch", "Trusted couriers"],
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden fees. The price you see is the price you pay.",
      icon: BadgeDollarSign,
      tags: ["Clear costs", "No surprises"],
    },
    {
      title: "24/7 Support",
      description:
        "We’re always here to help you with sizing, orders, and style advice.",
      icon: Headphones,
      tags: ["Live chat", "Email support"],
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg shadow-black/40 hover:shadow-blue-500/20 transition-transform transform hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <Icon className="w-14 h-14 text-blue-500 mb-5" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-6">{item.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
