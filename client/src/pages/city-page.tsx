
import { useParams } from "wouter";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cityData = {
  "new-jersey": {
    "newark": {
      name: "Newark",
      state: "New Jersey",
      description: "Newark is experiencing a renaissance with major development projects and proximity to NYC making it an attractive real estate investment destination.",
      marketInfo: "Newark's real estate market is benefiting from urban revitalization efforts, with new residential and commercial developments. The city's transportation links to Manhattan make it popular with commuters.",
      keyStats: {
        population: "311,549",
        medianHomePrice: "$320,000",
        averageRent: "$1,800",
        crimeRate: "Moderate"
      }
    },
    "jersey-city": {
      name: "Jersey City",
      state: "New Jersey",
      description: "Jersey City offers stunning Manhattan views and has become a major residential alternative to NYC with rapid development and appreciation.",
      marketInfo: "One of the hottest real estate markets in the tri-state area, Jersey City has seen tremendous growth in luxury high-rises and waterfront developments.",
      keyStats: {
        population: "292,449",
        medianHomePrice: "$650,000",
        averageRent: "$2,800",
        crimeRate: "Low"
      }
    },
    "paterson": {
      name: "Paterson",
      state: "New Jersey",
      description: "Paterson offers affordable real estate opportunities with potential for appreciation as the broader region continues to develop.",
      marketInfo: "An emerging market with opportunities for investors seeking value plays, Paterson benefits from its location and ongoing revitalization efforts.",
      keyStats: {
        population: "159,732",
        medianHomePrice: "$280,000",
        averageRent: "$1,400",
        crimeRate: "Moderate"
      }
    },
    "elizabeth": {
      name: "Elizabeth",
      state: "New Jersey",
      description: "Elizabeth combines industrial heritage with residential opportunities, offering diverse real estate investment options.",
      marketInfo: "The city's proximity to major transportation hubs and affordable housing stock make it attractive for both residents and investors.",
      keyStats: {
        population: "137,298",
        medianHomePrice: "$380,000",
        averageRent: "$1,600",
        crimeRate: "Moderate"
      }
    },
    "trenton": {
      name: "Trenton",
      state: "New Jersey",
      description: "As New Jersey's capital, Trenton offers government-stable employment and affordable real estate opportunities.",
      marketInfo: "Trenton's real estate market is supported by steady government employment and ongoing urban renewal initiatives.",
      keyStats: {
        population: "90,871",
        medianHomePrice: "$180,000",
        averageRent: "$1,200",
        crimeRate: "High"
      }
    }
  },
  "pennsylvania": {
    "philadelphia": {
      name: "Philadelphia",
      state: "Pennsylvania",
      description: "Philadelphia's diverse neighborhoods and growing job market make it a premier destination for real estate investment in Pennsylvania.",
      marketInfo: "The City of Brotherly Love offers everything from historic properties to modern developments, with strong fundamentals driven by healthcare, education, and finance sectors.",
      keyStats: {
        population: "1,567,442",
        medianHomePrice: "$180,000",
        averageRent: "$1,400",
        crimeRate: "Moderate"
      }
    },
    "pittsburgh": {
      name: "Pittsburgh",
      state: "Pennsylvania",
      description: "Pittsburgh's tech boom and medical sector growth have revitalized the real estate market with strong appreciation potential.",
      marketInfo: "Once a steel town, Pittsburgh has transformed into a tech hub with companies like Google and Uber establishing major presences, driving real estate demand.",
      keyStats: {
        population: "302,971",
        medianHomePrice: "$150,000",
        averageRent: "$1,100",
        crimeRate: "Low"
      }
    },
    "allentown": {
      name: "Allentown",
      state: "Pennsylvania",
      description: "Allentown offers affordable real estate with potential upside as the Lehigh Valley continues to attract businesses and residents.",
      marketInfo: "Part of the growing Lehigh Valley region, Allentown benefits from its location between NYC and Philadelphia while maintaining affordable housing costs.",
      keyStats: {
        population: "125,845",
        medianHomePrice: "$170,000",
        averageRent: "$1,000",
        crimeRate: "Moderate"
      }
    },
    "erie": {
      name: "Erie",
      state: "Pennsylvania",
      description: "Erie's lakefront location and affordable real estate make it an interesting market for investors seeking value and potential.",
      marketInfo: "Located on Lake Erie, the city offers unique waterfront properties and affordable housing stock with ongoing revitalization efforts.",
      keyStats: {
        population: "94,831",
        medianHomePrice: "$90,000",
        averageRent: "$700",
        crimeRate: "Moderate"
      }
    },
    "reading": {
      name: "Reading",
      state: "Pennsylvania",
      description: "Reading presents value opportunities for real estate investors with affordable prices and potential for future growth.",
      marketInfo: "An industrial city with affordable housing stock, Reading offers opportunities for investors willing to take on renovation projects.",
      keyStats: {
        population: "95,112",
        medianHomePrice: "$75,000",
        averageRent: "$800",
        crimeRate: "High"
      }
    }
  },
  "new-york": {
    "new-york-city": {
      name: "New York City",
      state: "New York",
      description: "NYC remains the premier real estate market globally, offering diverse opportunities from luxury condos to multi-family investments.",
      marketInfo: "The most dynamic real estate market in the world, NYC offers opportunities across all boroughs with varying price points and investment strategies.",
      keyStats: {
        population: "8,336,817",
        medianHomePrice: "$680,000",
        averageRent: "$3,200",
        crimeRate: "Low"
      }
    },
    "buffalo": {
      name: "Buffalo",
      state: "New York",
      description: "Buffalo's affordable real estate and growing tech sector make it an emerging market with significant investment potential.",
      marketInfo: "Western New York's largest city is experiencing a renaissance with major employers like Tesla and growing medical and educational sectors.",
      keyStats: {
        population: "278,349",
        medianHomePrice: "$85,000",
        averageRent: "$800",
        crimeRate: "Moderate"
      }
    },
    "rochester": {
      name: "Rochester",
      state: "New York",
      description: "Rochester offers excellent value for real estate investors with a strong educational and medical foundation supporting the local economy.",
      marketInfo: "Home to major universities and medical centers, Rochester provides stable rental demand and affordable entry points for investors.",
      keyStats: {
        population: "211,328",
        medianHomePrice: "$95,000",
        averageRent: "$900",
        crimeRate: "Moderate"
      }
    },
    "yonkers": {
      name: "Yonkers",
      state: "New York",
      description: "Yonkers offers NYC proximity with more affordable real estate, making it popular with commuters and investors alike.",
      marketInfo: "Just north of the Bronx, Yonkers provides excellent access to Manhattan while offering more affordable housing options.",
      keyStats: {
        population: "211,569",
        medianHomePrice: "$450,000",
        averageRent: "$2,000",
        crimeRate: "Low"
      }
    },
    "syracuse": {
      name: "Syracuse",
      state: "New York",
      description: "Syracuse's affordable real estate market and stable employment base make it attractive for value-oriented investors.",
      marketInfo: "Central New York's hub offers affordable properties with rental demand supported by Syracuse University and local healthcare systems.",
      keyStats: {
        population: "148,620",
        medianHomePrice: "$85,000",
        averageRent: "$800",
        crimeRate: "Moderate"
      }
    }
  },
  "connecticut": {
    "bridgeport": {
      name: "Bridgeport",
      state: "Connecticut",
      description: "Bridgeport offers value opportunities in Connecticut's expensive real estate market with ongoing revitalization efforts.",
      marketInfo: "Connecticut's largest city provides more affordable entry points while maintaining access to the state's high-income job markets.",
      keyStats: {
        population: "148,654",
        medianHomePrice: "$180,000",
        averageRent: "$1,200",
        crimeRate: "High"
      }
    },
    "new-haven": {
      name: "New Haven",
      state: "Connecticut",
      description: "Home to Yale University, New Haven offers stable rental demand and diverse real estate opportunities.",
      marketInfo: "The presence of Yale University and Yale-New Haven Hospital provides consistent rental demand and employment stability.",
      keyStats: {
        population: "134,023",
        medianHomePrice: "$200,000",
        averageRent: "$1,400",
        crimeRate: "Moderate"
      }
    },
    "hartford": {
      name: "Hartford",
      state: "Connecticut",
      description: "Connecticut's capital offers government stability and insurance sector employment supporting the real estate market.",
      marketInfo: "As the insurance capital of the world, Hartford's economy is supported by major insurance companies providing employment stability.",
      keyStats: {
        population: "121,054",
        medianHomePrice: "$160,000",
        averageRent: "$1,100",
        crimeRate: "High"
      }
    },
    "stamford": {
      name: "Stamford",
      state: "Connecticut",
      description: "Stamford's proximity to NYC and major corporate headquarters make it a premium real estate market.",
      marketInfo: "Home to numerous Fortune 500 companies, Stamford offers high-end real estate opportunities with strong fundamentals.",
      keyStats: {
        population: "135,470",
        medianHomePrice: "$550,000",
        averageRent: "$2,400",
        crimeRate: "Low"
      }
    },
    "waterbury": {
      name: "Waterbury",
      state: "Connecticut",
      description: "Waterbury presents value opportunities in Connecticut with affordable prices and potential for appreciation.",
      marketInfo: "The Brass City offers some of Connecticut's most affordable real estate with ongoing efforts to revitalize the downtown area.",
      keyStats: {
        population: "114,403",
        medianHomePrice: "$140,000",
        averageRent: "$1,000",
        crimeRate: "High"
      }
    }
  }
};

export default function CityPage() {
  const { state, city } = useParams();
  const cityInfo = cityData[state as keyof typeof cityData]?.[city as string];

  if (!cityInfo) {
    return <div>City not found</div>;
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
                {cityInfo.name}, {cityInfo.state} Real Estate Documentation
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional property documentation services in {cityInfo.name}
              </p>
            </div>
          </div>
        </section>

        {/* City Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">About {cityInfo.name}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {cityInfo.description}
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {cityInfo.marketInfo}
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>{cityInfo.name} Key Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Population:</span>
                    <span>{cityInfo.keyStats.population}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Median Home Price:</span>
                    <span>{cityInfo.keyStats.medianHomePrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Average Rent:</span>
                    <span>{cityInfo.keyStats.averageRent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Safety Rating:</span>
                    <span>{cityInfo.keyStats.crimeRate}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services in {cityInfo.name}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Property Photography</h3>
                  <p className="text-muted-foreground">
                    Professional interior and exterior photography to showcase your {cityInfo.name} properties.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Condition Reports</h3>
                  <p className="text-muted-foreground">
                    Detailed property condition assessments for distressed properties in {cityInfo.name}.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Market Analysis</h3>
                  <p className="text-muted-foreground">
                    Local market insights and comparable property analysis for {cityInfo.name} real estate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Need Property Documentation in {cityInfo.name}?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get professional real estate documentation services for your {cityInfo.name} properties today.
            </p>
            <Button size="lg" className="px-8 py-3">
              <a href="/#contact">Contact Us Today</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
