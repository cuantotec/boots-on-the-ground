
import { useParams } from "wouter";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stateData = {
  "new-jersey": {
    name: "New Jersey",
    description: "New Jersey's real estate market benefits from its strategic location between New York City and Philadelphia, offering diverse opportunities from urban high-rises to suburban family homes.",
    marketOverview: "The Garden State features strong demand in Northern New Jersey due to NYC proximity, while Southern New Jersey offers more affordable options. The state's transportation infrastructure, employment base, and proximity to major metros drive consistent real estate demand.",
    keyMetrics: {
      medianHomePrice: "$465,000",
      averageRent: "$2,100",
      populationGrowth: "0.2%",
      unemploymentRate: "3.2%"
    },
    cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Trenton", "Camden", "Atlantic City", "Clifton", "Passaic", "Union City", "Bayonne", "East Orange", "Vineland", "New Brunswick", "Hoboken"]
  },
  "pennsylvania": {
    name: "Pennsylvania",
    description: "Pennsylvania's real estate market offers excellent value propositions with major metros like Philadelphia and Pittsburgh driving demand, while smaller cities provide affordable investment opportunities.",
    marketOverview: "The Keystone State features diverse markets from Philadelphia's urban renaissance to Pittsburgh's tech transformation. The state's 'eds and meds' economy, manufacturing heritage, and affordable housing costs create stable market conditions.",
    keyMetrics: {
      medianHomePrice: "$255,000",
      averageRent: "$1,650",
      populationGrowth: "0.1%",
      unemploymentRate: "3.4%"
    },
    cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster", "Harrisburg", "York", "Wilkes-Barre", "Chester", "Norristown", "Upper Darby", "Levittown"]
  },
  "new-york": {
    name: "New York",
    description: "New York State's real estate market spans from the world's most expensive properties in NYC to highly affordable markets upstate, offering opportunities across all price points.",
    marketOverview: "Beyond NYC's premium market, upstate New York provides excellent value with growing tech sectors in Albany and Buffalo, university towns, and emerging markets. The state's economic diversity creates varied investment opportunities.",
    keyMetrics: {
      medianHomePrice: "$420,000",
      averageRent: "$2,200",
      populationGrowth: "-0.5%",
      unemploymentRate: "3.9%"
    },
    cities: ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica", "White Plains", "Hempstead", "Troy", "Niagara Falls", "Binghamton"]
  },
  "connecticut": {
    name: "Connecticut",
    description: "Connecticut's real estate market is characterized by high property values, particularly in Fairfield County, driven by proximity to NYC and a high-income resident base.",
    marketOverview: "The Constitution State offers luxury markets in Fairfield County near NYC, while other regions provide more affordable options. The state's insurance and financial services industries, along with aerospace manufacturing, support property values.",
    keyMetrics: {
      medianHomePrice: "$385,000",
      averageRent: "$2,000",
      populationGrowth: "-0.3%",
      unemploymentRate: "3.6%"
    },
    cities: ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury", "Norwalk", "Danbury", "New Britain", "West Hartford", "Greenwich", "Hamden", "Meriden", "Bristol", "Manchester", "West Haven"]
  }
};

export default function StatePage() {
  const { state } = useParams();
  const stateInfo = stateData[state as keyof typeof stateData];

  if (!stateInfo) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">State Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">
              The requested state could not be found. Please check the URL or return to our homepage.
            </p>
            <Button asChild size="lg">
              <a href="/">Return Home</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
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
                      <a href={`/location/${state}/${city.toLowerCase().replace(/\s+/g, '-')}`}>
                        Learn More
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Data Attribution Section */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Market Data Sources</h3>
              <p className="text-sm text-muted-foreground">
                Data compiled from U.S. Census Bureau (2023 Est.), Redfin, Realtor.com, RentCafe, Zumper, 
                and FBI Uniform Crime Reporting (2023 Data). Market metrics represent state-wide averages 
                weighted by major metropolitan areas as of August 2025.
              </p>
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
