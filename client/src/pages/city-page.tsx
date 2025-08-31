
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
    },
    "camden": {
      name: "Camden",
      state: "New Jersey",
      description: "Camden is undergoing significant redevelopment with major investment opportunities for those willing to take on urban renewal projects.",
      marketInfo: "Major corporations and institutions are investing in Camden's revitalization, creating potential for significant appreciation.",
      keyStats: {
        population: "71,791",
        medianHomePrice: "$85,000",
        averageRent: "$900",
        crimeRate: "High"
      }
    },
    "atlantic-city": {
      name: "Atlantic City",
      state: "New Jersey",
      description: "Atlantic City's gaming and tourism industry creates unique real estate opportunities, particularly in hospitality and residential sectors.",
      marketInfo: "The resort town offers diverse investment opportunities from residential to commercial properties serving the tourism industry.",
      keyStats: {
        population: "38,497",
        medianHomePrice: "$140,000",
        averageRent: "$1,100",
        crimeRate: "High"
      }
    },
    "clifton": {
      name: "Clifton",
      state: "New Jersey",
      description: "Clifton offers suburban living with good schools and reasonable property values, making it attractive for families.",
      marketInfo: "A stable residential market with good transportation access to NYC and steady demand from families.",
      keyStats: {
        population: "85,390",
        medianHomePrice: "$420,000",
        averageRent: "$1,700",
        crimeRate: "Low"
      }
    },
    "passaic": {
      name: "Passaic",
      state: "New Jersey",
      description: "Passaic provides affordable real estate opportunities with potential for appreciation as the region develops.",
      marketInfo: "An affordable market with good transportation links and potential for growth as nearby areas continue to develop.",
      keyStats: {
        population: "69,789",
        medianHomePrice: "$290,000",
        averageRent: "$1,400",
        crimeRate: "Moderate"
      }
    },
    "union-city": {
      name: "Union City",
      state: "New Jersey",
      description: "Union City offers urban living with Manhattan views and has seen significant development in recent years.",
      marketInfo: "Dense urban environment with high-rise developments and strong rental demand from NYC commuters.",
      keyStats: {
        population: "68,073",
        medianHomePrice: "$480,000",
        averageRent: "$2,200",
        crimeRate: "Moderate"
      }
    },
    "bayonne": {
      name: "Bayonne",
      state: "New Jersey",
      description: "Bayonne combines waterfront living with affordable prices compared to nearby Jersey City and NYC.",
      marketInfo: "Waterfront community with developing residential market and good transportation access to Manhattan.",
      keyStats: {
        population: "67,186",
        medianHomePrice: "$450,000",
        averageRent: "$1,900",
        crimeRate: "Low"
      }
    },
    "east-orange": {
      name: "East Orange",
      state: "New Jersey",
      description: "East Orange offers affordable real estate with good transportation access to NYC and development potential.",
      marketInfo: "An affordable market with good transportation infrastructure and potential for appreciation.",
      keyStats: {
        population: "69,556",
        medianHomePrice: "$250,000",
        averageRent: "$1,300",
        crimeRate: "Moderate"
      }
    },
    "vineland": {
      name: "Vineland",
      state: "New Jersey",
      description: "Vineland offers rural charm with affordable real estate and agricultural heritage creating unique opportunities.",
      marketInfo: "Agricultural community with affordable housing and potential for rural residential development.",
      keyStats: {
        population: "59,405",
        medianHomePrice: "$180,000",
        averageRent: "$1,000",
        crimeRate: "Low"
      }
    },
    "new-brunswick": {
      name: "New Brunswick",
      state: "New Jersey",
      description: "Home to Rutgers University, New Brunswick offers steady rental demand and diverse real estate opportunities.",
      marketInfo: "University town with consistent rental demand from students and faculty, plus growing biotech sector.",
      keyStats: {
        population: "55,676",
        medianHomePrice: "$280,000",
        averageRent: "$1,500",
        crimeRate: "Moderate"
      }
    },
    "hoboken": {
      name: "Hoboken",
      state: "New Jersey",
      description: "Hoboken is a premium market with Manhattan skyline views and excellent transportation to NYC.",
      marketInfo: "One of the most expensive markets in NJ with luxury condos and high rental rates due to NYC proximity.",
      keyStats: {
        population: "60,417",
        medianHomePrice: "$750,000",
        averageRent: "$3,000",
        crimeRate: "Very Low"
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
    },
    "scranton": {
      name: "Scranton",
      state: "Pennsylvania",
      description: "Scranton offers affordable real estate opportunities with a stable economy supported by healthcare and education sectors.",
      marketInfo: "Known as 'The Electric City', Scranton provides value investments with steady rental demand from local universities.",
      keyStats: {
        population: "76,328",
        medianHomePrice: "$95,000",
        averageRent: "$900",
        crimeRate: "Moderate"
      }
    },
    "bethlehem": {
      name: "Bethlehem",
      state: "Pennsylvania",
      description: "Bethlehem combines historic charm with modern development, offering diverse real estate investment opportunities.",
      marketInfo: "Part of the Lehigh Valley, Bethlehem benefits from proximity to NYC and Philadelphia while maintaining affordable property values.",
      keyStats: {
        population: "75,781",
        medianHomePrice: "$220,000",
        averageRent: "$1,200",
        crimeRate: "Low"
      }
    },
    "lancaster": {
      name: "Lancaster",
      state: "Pennsylvania",
      description: "Lancaster offers rural charm with steady economic fundamentals and affordable real estate opportunities.",
      marketInfo: "Known for its Amish heritage, Lancaster provides unique investment opportunities in both residential and tourism-related properties.",
      keyStats: {
        population: "59,322",
        medianHomePrice: "$160,000",
        averageRent: "$1,000",
        crimeRate: "Low"
      }
    },
    "harrisburg": {
      name: "Harrisburg",
      state: "Pennsylvania",
      description: "As Pennsylvania's capital, Harrisburg offers government-stable employment and reasonable real estate values.",
      marketInfo: "The capital city provides steady demand from government workers and reasonable property values compared to major metros.",
      keyStats: {
        population: "49,528",
        medianHomePrice: "$85,000",
        averageRent: "$800",
        crimeRate: "High"
      }
    },
    "york": {
      name: "York",
      state: "Pennsylvania",
      description: "York offers affordable real estate with growing manufacturing and distribution sectors driving demand.",
      marketInfo: "Known for manufacturing and logistics, York provides affordable housing with steady employment opportunities.",
      keyStats: {
        population: "44,800",
        medianHomePrice: "$110,000",
        averageRent: "$900",
        crimeRate: "Moderate"
      }
    },
    "wilkes-barre": {
      name: "Wilkes-Barre",
      state: "Pennsylvania",
      description: "Wilkes-Barre offers value opportunities in northeastern Pennsylvania with affordable housing stock.",
      marketInfo: "A former coal mining city with affordable properties and potential for redevelopment investments.",
      keyStats: {
        population: "44,328",
        medianHomePrice: "$70,000",
        averageRent: "$700",
        crimeRate: "Moderate"
      }
    },
    "chester": {
      name: "Chester",
      state: "Pennsylvania",
      description: "Chester presents significant value opportunities for investors willing to participate in urban renewal efforts.",
      marketInfo: "Located near Philadelphia, Chester offers extremely affordable properties with potential for appreciation through redevelopment.",
      keyStats: {
        population: "33,855",
        medianHomePrice: "$45,000",
        averageRent: "$600",
        crimeRate: "High"
      }
    },
    "norristown": {
      name: "Norristown",
      state: "Pennsylvania",
      description: "Norristown offers suburban living with good access to Philadelphia and reasonable property values.",
      marketInfo: "Montgomery County seat with good transportation access and steady demand from Philadelphia commuters.",
      keyStats: {
        population: "34,324",
        medianHomePrice: "$180,000",
        averageRent: "$1,100",
        crimeRate: "Moderate"
      }
    },
    "upper-darby": {
      name: "Upper Darby",
      state: "Pennsylvania",
      description: "Upper Darby provides suburban opportunities with excellent access to Philadelphia's job market.",
      marketInfo: "Close-in Philadelphia suburb with good transportation and reasonable property values for the region.",
      keyStats: {
        population: "84,144",
        medianHomePrice: "$200,000",
        averageRent: "$1,200",
        crimeRate: "Low"
      }
    },
    "levittown": {
      name: "Levittown",
      state: "Pennsylvania",
      description: "Levittown offers planned community living with stable property values and family-friendly amenities.",
      marketInfo: "Historic planned community with stable housing market and good schools attracting families.",
      keyStats: {
        population: "52,983",
        medianHomePrice: "$280,000",
        averageRent: "$1,400",
        crimeRate: "Very Low"
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
    },
    "albany": {
      name: "Albany",
      state: "New York",
      description: "As New York's capital, Albany offers government stability and growing tech sector creating steady real estate demand.",
      marketInfo: "The capital region benefits from stable government employment and emerging tech companies, supporting property values.",
      keyStats: {
        population: "97,856",
        medianHomePrice: "$180,000",
        averageRent: "$1,100",
        crimeRate: "Moderate"
      }
    },
    "new-rochelle": {
      name: "New Rochelle",
      state: "New York",
      description: "New Rochelle offers suburban living with excellent NYC access, making it attractive for commuters and investors.",
      marketInfo: "Westchester County location with good train access to Manhattan and ongoing downtown redevelopment.",
      keyStats: {
        population: "79,726",
        medianHomePrice: "$650,000",
        averageRent: "$2,400",
        crimeRate: "Low"
      }
    },
    "mount-vernon": {
      name: "Mount Vernon",
      state: "New York",
      description: "Mount Vernon provides more affordable Westchester County options with good transportation to NYC.",
      marketInfo: "Dense urban environment with good transit access and more affordable prices than surrounding Westchester communities.",
      keyStats: {
        population: "67,292",
        medianHomePrice: "$420,000",
        averageRent: "$1,800",
        crimeRate: "Moderate"
      }
    },
    "schenectady": {
      name: "Schenectady",
      state: "New York",
      description: "Schenectady offers affordable real estate in the Capital Region with ongoing revitalization efforts.",
      marketInfo: "Part of the Albany metro area with affordable housing and growing tech sector presence.",
      keyStats: {
        population: "65,336",
        medianHomePrice: "$120,000",
        averageRent: "$900",
        crimeRate: "Moderate"
      }
    },
    "utica": {
      name: "Utica",
      state: "New York",
      description: "Utica presents value opportunities with extremely affordable real estate and ongoing urban renewal.",
      marketInfo: "Former industrial city with very affordable properties and refugee resettlement programs driving rental demand.",
      keyStats: {
        population: "65,283",
        medianHomePrice: "$65,000",
        averageRent: "$700",
        crimeRate: "Moderate"
      }
    },
    "white-plains": {
      name: "White Plains",
      state: "New York",
      description: "White Plains is Westchester's commercial hub with strong employment and high-end real estate opportunities.",
      marketInfo: "Major business center with corporate headquarters and excellent transportation to NYC.",
      keyStats: {
        population: "58,109",
        medianHomePrice: "$680,000",
        averageRent: "$2,600",
        crimeRate: "Low"
      }
    },
    "hempstead": {
      name: "Hempstead",
      state: "New York",
      description: "Hempstead offers Long Island opportunities with diverse housing stock and good transportation.",
      marketInfo: "Nassau County location with diverse rental market and good access to NYC employment centers.",
      keyStats: {
        population: "59,169",
        medianHomePrice: "$480,000",
        averageRent: "$2,200",
        crimeRate: "Moderate"
      }
    },
    "troy": {
      name: "Troy",
      state: "New York",
      description: "Troy combines historic architecture with affordable prices and proximity to Albany's job market.",
      marketInfo: "Historic Hudson River city with affordable Victorian housing and growing arts scene.",
      keyStats: {
        population: "51,401",
        medianHomePrice: "$140,000",
        averageRent: "$1,000",
        crimeRate: "Moderate"
      }
    },
    "niagara-falls": {
      name: "Niagara Falls",
      state: "New York",
      description: "Niagara Falls offers tourism-related real estate opportunities and affordable residential properties.",
      marketInfo: "Tourism-dependent economy with opportunities in both residential and hospitality sectors.",
      keyStats: {
        population: "47,978",
        medianHomePrice: "$75,000",
        averageRent: "$700",
        crimeRate: "High"
      }
    },
    "binghamton": {
      name: "Binghamton",
      state: "New York",
      description: "Binghamton offers extremely affordable real estate with university-driven rental demand.",
      marketInfo: "Home to Binghamton University with very affordable housing and steady student rental market.",
      keyStats: {
        population: "44,819",
        medianHomePrice: "$80,000",
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
      description: "Waterbury offers affordable real estate opportunities in Connecticut's expensive market with ongoing revitalization efforts.",
      marketInfo: "Known as the 'Brass City', Waterbury provides value opportunities for investors with affordable housing and redevelopment potential.",
      keyStats: {
        population: "114,403",
        medianHomePrice: "$150,000",
        averageRent: "$1,000",
        crimeRate: "Moderate"
      }
    },
    "norwalk": {
      name: "Norwalk",
      state: "Connecticut", 
      description: "Norwalk combines suburban charm with urban amenities, making it a desirable location for families and investors.",
      marketInfo: "Located in Fairfield County, Norwalk offers excellent schools and proximity to NYC while maintaining reasonable property values.",
      keyStats: {
        population: "91,184",
        medianHomePrice: "$450,000",
        averageRent: "$2,000",
        crimeRate: "Low"
      }
    },
    "danbury": {
      name: "Danbury",
      state: "Connecticut",
      description: "Danbury's diverse economy and affordable housing make it an attractive option for real estate investment.",
      marketInfo: "The 'Hat City' offers good value propositions with strong rental demand from nearby corporate employment centers.",
      keyStats: {
        population: "86,518",
        medianHomePrice: "$320,000",
        averageRent: "$1,600",
        crimeRate: "Low"
      }
    },
    "new-britain": {
      name: "New Britain",
      state: "Connecticut",
      description: "New Britain offers affordable entry points into Connecticut's real estate market with ongoing redevelopment initiatives.",
      marketInfo: "Central Connecticut's industrial heritage provides opportunities for adaptive reuse and affordable housing investments.",
      keyStats: {
        population: "72,543",
        medianHomePrice: "$180,000",
        averageRent: "$1,200",
        crimeRate: "Moderate"
      }
    },
    "west-hartford": {
      name: "West Hartford",
      state: "Connecticut",
      description: "West Hartford is known for excellent schools and upscale living, making it a premium real estate market.",
      marketInfo: "One of Connecticut's most desirable communities with strong property values and excellent amenities.",
      keyStats: {
        population: "64,083",
        medianHomePrice: "$425,000",
        averageRent: "$1,800",
        crimeRate: "Very Low"
      }
    },
    "greenwich": {
      name: "Greenwich",
      state: "Connecticut",
      description: "Greenwich represents Connecticut's luxury real estate market with some of the highest property values in the state.",
      marketInfo: "An exclusive enclave for high-net-worth individuals with luxury properties and excellent proximity to NYC.",
      keyStats: {
        population: "63,518",
        medianHomePrice: "$2,100,000",
        averageRent: "$4,500",
        crimeRate: "Very Low"
      }
    },
    "hamden": {
      name: "Hamden",
      state: "Connecticut",
      description: "Hamden offers suburban living with good schools and reasonable property values for Connecticut standards.",
      marketInfo: "Located near New Haven, Hamden provides good value for families and steady rental demand from nearby universities.",
      keyStats: {
        population: "61,169",
        medianHomePrice: "$250,000",
        averageRent: "$1,400",
        crimeRate: "Low"
      }
    },
    "meriden": {
      name: "Meriden",
      state: "Connecticut",
      description: "Meriden's central location and affordable housing make it an interesting market for value-oriented investors.",
      marketInfo: "Centrally located in Connecticut with good transportation access and affordable housing stock.",
      keyStats: {
        population: "60,850",
        medianHomePrice: "$190,000",
        averageRent: "$1,100",
        crimeRate: "Moderate"
      }
    },
    "bristol": {
      name: "Bristol",
      state: "Connecticut",
      description: "Bristol offers small-town charm with affordable real estate and steady employment from local industries.",
      marketInfo: "Home to ESPN headquarters, Bristol provides employment stability and affordable housing opportunities.",
      keyStats: {
        population: "60,039",
        medianHomePrice: "$210,000",
        averageRent: "$1,200",
        crimeRate: "Low"
      }
    },
    "manchester": {
      name: "Manchester",
      state: "Connecticut",
      description: "Manchester combines suburban amenities with affordable housing, making it attractive for families and investors.",
      marketInfo: "A well-established community with good schools and reasonable property values for the Hartford area.",
      keyStats: {
        population: "58,241",
        medianHomePrice: "$230,000",
        averageRent: "$1,300",
        crimeRate: "Low"
      }
    },
    "west-haven": {
      name: "West Haven",
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
