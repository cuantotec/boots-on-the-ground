
import { useParams } from "wouter";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stateData = {
  "new-jersey": {
    name: "New Jersey",
    description: "New Jersey's real estate market is characterized by its proximity to major metropolitan areas like New York City and Philadelphia, making it an attractive investment destination.",
    marketOverview: "The Garden State offers diverse real estate opportunities from urban developments in Newark and Jersey City to suburban family homes. Property values have shown steady appreciation, particularly in areas with good transportation links to NYC.",
    keyMetrics: {
      medianHomePrice: "$465,000",
      averageRent: "$2,100",
      populationGrowth: "0.8%",
      unemploymentRate: "3.2%"
    },
    cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Trenton"]
  },
  "pennsylvania": {
    name: "Pennsylvania",
    description: "Pennsylvania's real estate market offers excellent value propositions with affordable housing costs compared to neighboring states while maintaining strong economic fundamentals.",
    marketOverview: "The Keystone State features diverse markets from Pittsburgh's tech revival to Philadelphia's growing job market. Rural areas offer excellent investment opportunities for those seeking higher yields.",
    keyMetrics: {
      medianHomePrice: "$210,000",
      averageRent: "$1,200",
      populationGrowth: "0.1%",
      unemploymentRate: "3.8%"
    },
    cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading"]
  },
  "new-york": {
    name: "New York",
    description: "New York State's real estate market is dominated by NYC but offers diverse opportunities throughout the state, from upstate value plays to Long Island suburban markets.",
    marketOverview: "Beyond NYC's expensive market, upstate New York offers excellent investment opportunities with growing tech sectors in Albany and Buffalo, plus vacation rental potential in the Adirondacks.",
    keyMetrics: {
      medianHomePrice: "$340,000",
      averageRent: "$1,800",
      populationGrowth: "-0.3%",
      unemploymentRate: "4.1%"
    },
    cities: ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse"]
  },
  "connecticut": {
    name: "Connecticut",
    description: "Connecticut's real estate market benefits from high-income residents and proximity to NYC, though it faces challenges from high property taxes and outmigration.",
    marketOverview: "The Constitution State offers luxury markets in Fairfield County and value opportunities in Hartford and New Haven areas. The state's focus on financial services and aerospace continues to drive demand.",
    keyMetrics: {
      medianHomePrice: "$280,000",
      averageRent: "$1,500",
      populationGrowth: "-0.6%",
      unemploymentRate: "3.7%"
    },
    cities: ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury"]
  }
};

export default function StatePage() {
  const { state } = useParams();
  const stateInfo = stateData[state as keyof typeof stateData];

  if (!stateInfo) {
    return <div>State not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {stateInfo.name} Real Estate Documentation Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {stateInfo.description}
              </p>
            </div>
          </div>
        </section>

        {/* Market Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Market Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {stateInfo.marketOverview}
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Key Market Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Median Home Price:</span>
                    <span>{stateInfo.keyMetrics.medianHomePrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Average Rent:</span>
                    <span>{stateInfo.keyMetrics.averageRent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Population Growth:</span>
                    <span>{stateInfo.keyMetrics.populationGrowth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Unemployment Rate:</span>
                    <span>{stateInfo.keyMetrics.unemploymentRate}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="py-16 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Cities We Serve in {stateInfo.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateInfo.cities.map((city) => (
                <Card key={city} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{city}</h3>
                    <p className="text-muted-foreground mb-4">
                      Professional real estate documentation services in {city}.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <a href={`/location/${state}/${city.toLowerCase().replace(' ', '-')}`}>
                        Learn More
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started in {stateInfo.name}?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today for professional real estate documentation services across {stateInfo.name}.
            </p>
            <Button size="lg" className="px-8 py-3">
              <a href="/#contact">Get Your Quote</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
