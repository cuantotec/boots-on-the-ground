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
      description: "Newark's real estate market is experiencing significant revitalization, driven by major development projects and its proximity to NYC. While historically undervalued, prices are rising, offering strong investment potential, particularly in multifamily properties and transit-oriented developments.",
      marketInfo: "As a major transportation and logistics hub with Newark Liberty International Airport and Port Newark, the city is attracting new investment. The presence of Rutgers-Newark, NJIT, and major employers like Prudential Financial creates steady demand for housing.",
      keyStats: {
        population: "305,344",
        medianHomePrice: "$460,000",
        averageRent: "$1,950",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Transportation and Logistics (Port Newark, Newark Liberty International Airport)", "Higher Education (Rutgers-Newark, NJIT)", "Healthcare", "Finance (Prudential Financial, Audible)"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "jersey-city": {
      name: "Jersey City",
      state: "New Jersey",
      description: "Often called NYC's 'Sixth Borough,' Jersey City has a highly competitive market with strong demand for both rentals and sales. Luxury high-rises dominate the waterfront, while other neighborhoods offer diverse housing stock.",
      marketInfo: "The market is mature but continues to see steady appreciation. Financial services companies have established major presences, creating 'Wall Street West' and driving high-end residential demand.",
      keyStats: {
        population: "286,670",
        medianHomePrice: "$725,000",
        averageRent: "$3,400",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Financial Services (Wall Street West)", "Real Estate", "Healthcare", "Transportation and Logistics", "Technology"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: RentCafe (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "paterson": {
      name: "Paterson",
      state: "New Jersey",
      description: "Paterson's market is characterized by affordability compared to nearby cities, attracting first-time homebuyers and investors. The city is focused on redevelopment initiatives around its historic industrial core.",
      marketInfo: "Growth potential exists but is tied to the success of ongoing urban renewal projects. The city's manufacturing heritage and healthcare sector provide economic stability.",
      keyStats: {
        population: "156,647",
        medianHomePrice: "$475,000",
        averageRent: "$1,800",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Manufacturing", "Healthcare (St. Joseph's University Medical Center)", "Retail", "Small Business"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "elizabeth": {
      name: "Elizabeth",
      state: "New Jersey",
      description: "As a major transportation and shipping hub, Elizabeth has a stable, industry-driven housing market. The city offers a mix of urban and suburban living with relatively affordable prices.",
      marketInfo: "Investment opportunities are present in multifamily units catering to the city's workforce. The Port Newark-Elizabeth complex and major retail centers drive economic activity.",
      keyStats: {
        population: "134,283",
        medianHomePrice: "$505,000",
        averageRent: "$1,900",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Shipping and Logistics (Port Newark-Elizabeth)", "Retail (The Mills at Jersey Gardens)", "Manufacturing", "Healthcare"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "trenton": {
      name: "Trenton",
      state: "New Jersey",
      description: "As the state capital, Trenton's market is heavily influenced by government employment. Home prices are among the most affordable in the state, presenting opportunities for investors willing to navigate a market with slower appreciation.",
      marketInfo: "Revitalization efforts are underway but face challenges. The presence of state government provides employment stability, while educational institutions like Thomas Edison State University add to demand.",
      keyStats: {
        population: "90,457",
        medianHomePrice: "$230,000",
        averageRent: "$1,550",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["State Government", "Healthcare (Capital Health Regional Medical Center)", "Manufacturing", "Higher Education (Thomas Edison State University)"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "camden": {
      name: "Camden",
      state: "New Jersey",
      description: "Camden is undergoing a significant transformation driven by public and private investment, particularly in its waterfront and downtown areas. While it remains one of the most affordable markets, it carries higher risk.",
      marketInfo: "The city's future real estate trajectory is closely tied to continued economic development and public safety improvements. Major healthcare and corporate investments are driving change.",
      keyStats: {
        population: "71,791",
        medianHomePrice: "$150,000",
        averageRent: "$1,300",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Healthcare (Cooper University Health Care, Virtua)", "Education (Rutgers-Camden)", "Corporate Headquarters (Holtec International, Subaru of America)", "Technology"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: RentCafe (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "atlantic-city": {
      name: "Atlantic City",
      state: "New Jersey",
      description: "Atlantic City's real estate market is highly cyclical and tied to the casino and tourism industries. Non-casino development and a growing university presence are diversifying the economy.",
      marketInfo: "The market offers low entry prices but is considered volatile and high-risk for investors. Stockton University's presence provides some stability to the rental market.",
      keyStats: {
        population: "38,469",
        medianHomePrice: "$225,000",
        averageRent: "$1,450",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Gaming and Hospitality", "Tourism", "Healthcare (AtlantiCare)", "Higher Education (Stockton University)"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "clifton": {
      name: "Clifton",
      state: "New Jersey",
      description: "Clifton is a stable, suburban market with strong demand due to its good schools, safety, and commuter access to NYC. The housing stock is diverse, ranging from post-war single-family homes to modern apartments.",
      marketInfo: "The market is competitive with steady, reliable appreciation. Healthcare, retail, and manufacturing sectors provide employment stability for residents.",
      keyStats: {
        population: "89,456",
        medianHomePrice: "$580,000",
        averageRent: "$2,200",
        crimeRate: "Low"
      },
      keyEconomicDrivers: ["Healthcare", "Retail", "Manufacturing", "Corporate Offices"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "passaic": {
      name: "Passaic",
      state: "New Jersey",
      description: "Passaic offers relative affordability for the North Jersey region, attracting a diverse population. The market is dominated by older, multi-family homes, presenting opportunities for investors focused on rental income.",
      marketInfo: "The city is working on redevelopment projects to spur growth. Its diverse economy and affordable housing stock make it attractive for value-oriented investors.",
      keyStats: {
        population: "70,084",
        medianHomePrice: "$499,000",
        averageRent: "$1,850",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Retail", "Manufacturing", "Healthcare", "Small Business"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "union-city": {
      name: "Union City",
      state: "New Jersey",
      description: "As one of the most densely populated cities in the U.S., Union City has a competitive housing market with a high concentration of multi-family buildings.",
      marketInfo: "Its close proximity to Manhattan makes it a popular choice for commuters. The rental market is particularly strong and is the primary focus for most investors.",
      keyStats: {
        population: "65,306",
        medianHomePrice: "$540,000",
        averageRent: "$2,300",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Retail", "Transportation", "Healthcare", "Proximity to NYC employment hubs"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "bayonne": {
      name: "Bayonne",
      state: "New Jersey",
      description: "Bayonne is transitioning from an industrial past to a residential community, with significant new development along its waterfront.",
      marketInfo: "The city offers more space and value than neighboring Jersey City while maintaining good transit links. It's an emerging market with strong growth potential.",
      keyStats: {
        population: "70,394",
        medianHomePrice: "$565,000",
        averageRent: "$2,450",
        crimeRate: "Low"
      },
      keyEconomicDrivers: ["Logistics and Shipping (Port Jersey)", "Healthcare", "Construction and Development", "Retail"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: RentCafe (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "east-orange": {
      name: "East Orange",
      state: "New Jersey",
      description: "East Orange is an affordable urban market with excellent commuter rail access to NYC. The city features a large stock of historic apartment buildings and single-family homes.",
      marketInfo: "The market is seeing renewed interest due to rising prices in surrounding areas. Healthcare and proximity to major employment centers drive demand.",
      keyStats: {
        population: "68,695",
        medianHomePrice: "$425,000",
        averageRent: "$1,750",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Healthcare", "Social Services", "Proximity to Newark and NYC employment", "Retail"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "vineland": {
      name: "Vineland",
      state: "New Jersey",
      description: "Located in southern New Jersey, Vineland has an affordable and stable real estate market. It's characterized by a mix of suburban and rural properties with larger lot sizes.",
      marketInfo: "The market is less volatile than those in the northern part of the state, appealing to buyers seeking value and a slower pace. Agriculture and food processing anchor the economy.",
      keyStats: {
        population: "60,865",
        medianHomePrice: "$300,000",
        averageRent: "$1,400",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Agriculture and Food Processing", "Healthcare (Inspira Medical Center)", "Glass Manufacturing", "Government Services"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "new-brunswick": {
      name: "New Brunswick",
      state: "New Jersey",
      description: "Dominated by Rutgers University and a major healthcare sector, New Brunswick has a perpetually strong rental market. The city is a hub of innovation and has seen significant new residential and commercial development.",
      marketInfo: "Investment potential is high, especially for properties catering to students and medical professionals. Johnson & Johnson's headquarters adds corporate stability.",
      keyStats: {
        population: "55,671",
        medianHomePrice: "$465,000",
        averageRent: "$2,500",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Higher Education (Rutgers University)", "Healthcare (Robert Wood Johnson University Hospital, Saint Peter's University Hospital)", "Pharmaceuticals (Johnson & Johnson HQ)", "Technology"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: RentCafe (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "hoboken": {
      name: "Hoboken",
      state: "New Jersey",
      description: "Hoboken is a premium, high-demand market due to its vibrant, walkable community and unparalleled access to Manhattan.",
      marketInfo: "The market is composed largely of condos and historic brownstones. While prices are high, it's considered a blue-chip market with stable, long-term investment value.",
      keyStats: {
        population: "58,690",
        medianHomePrice: "$850,000",
        averageRent: "$3,950",
        crimeRate: "Low"
      },
      keyEconomicDrivers: ["Proximity to NYC Financial District", "Technology", "Higher Education (Stevens Institute of Technology)", "Retail and Hospitality"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    }
  },
  "pennsylvania": {
    "philadelphia": {
      name: "Philadelphia",
      state: "Pennsylvania",
      description: "Philadelphia's market offers a unique combination of big-city amenities and relative affordability. There's strong demand in revitalized areas like Fishtown and University City, while other neighborhoods offer lower entry points.",
      marketInfo: "The city's 'eds and meds' economy provides a stable foundation for long-term growth. Major healthcare systems and universities drive consistent demand.",
      keyStats: {
        population: "1,567,258",
        medianHomePrice: "$285,000",
        averageRent: "$1,900",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Healthcare (University of Pennsylvania Health System, Jefferson Health)", "Higher Education (UPenn, Temple, Drexel)", "Biotechnology and Pharmaceuticals", "Finance"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: RentCafe (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "pittsburgh": {
      name: "Pittsburgh",
      state: "Pennsylvania",
      description: "Transitioning from industrial roots, Pittsburgh is now a hub for technology, healthcare, and education. Its real estate market is known for its stability and affordability.",
      marketInfo: "The market is experiencing steady growth driven by its strong job sector. Major tech companies and world-class healthcare systems provide economic stability.",
      keyStats: {
        population: "302,898",
        medianHomePrice: "$255,000",
        averageRent: "$1,650",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Healthcare (UPMC, Allegheny Health Network)", "Technology (Google, Uber, Duolingo)", "Higher Education (Carnegie Mellon, University of Pittsburgh)", "Advanced Manufacturing"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "allentown": {
      name: "Allentown",
      state: "Pennsylvania",
      description: "Allentown is at the center of the Lehigh Valley's economic resurgence, with a downtown that has seen over a billion dollars in new development.",
      marketInfo: "The housing market is competitive, fueled by job growth and its strategic location between NYC and Philadelphia. It offers strong appreciation potential for investors.",
      keyStats: {
        population: "125,956",
        medianHomePrice: "$280,000",
        averageRent: "$1,700",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Healthcare (Lehigh Valley Health Network)", "Logistics and Warehousing", "Manufacturing", "Finance"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "erie": {
      name: "Erie",
      state: "Pennsylvania",
      description: "Erie offers one of the most affordable housing markets in the nation, located on the shores of Lake Erie.",
      marketInfo: "The market is stable, with slower appreciation compared to larger metro areas. Investment is focused on low-cost single-family homes and rental properties catering to the local workforce and student population.",
      keyStats: {
        population: "93,191",
        medianHomePrice: "$150,000",
        averageRent: "$950",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Manufacturing (Wabtec)", "Healthcare (UPMC Hamot)", "Higher Education (Gannon University, Penn State Behrend)", "Plastics Industry"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "reading": {
      name: "Reading",
      state: "Pennsylvania",
      description: "Reading is an affordable market with a strong industrial and manufacturing base. The city has faced economic challenges but is seeing renewed interest from investors due to very low property prices.",
      marketInfo: "The market is considered high-risk, high-reward with steady rental demand. Manufacturing and healthcare provide economic foundations.",
      keyStats: {
        population: "94,895",
        medianHomePrice: "$210,000",
        averageRent: "$1,400",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Manufacturing", "Healthcare (Tower Health)", "Transportation", "Retail"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: RentCafe (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "scranton": {
      name: "Scranton",
      state: "Pennsylvania",
      description: "Scranton, known as 'The Electric City,' offers a stable market with a strong healthcare and education sector.",
      marketInfo: "The city's affordability and steady job market make it a reliable investment, particularly for rental properties catering to students and healthcare workers.",
      keyStats: {
        population: "76,328",
        medianHomePrice: "$200,000",
        averageRent: "$1,250",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Healthcare (Geisinger Commonwealth School of Medicine)", "Higher Education (University of Scranton, Lackawanna College)", "State Government", "Logistics"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "bethlehem": {
      name: "Bethlehem",
      state: "Pennsylvania",
      description: "Bethlehem is a historic city within the growing Lehigh Valley, offering a blend of cultural attractions and economic opportunity.",
      marketInfo: "The market is strong and growing, benefiting from its location and ongoing investment in arts, entertainment, and business.",
      keyStats: {
        population: "76,000",
        medianHomePrice: "$320,000",
        averageRent: "$1,800",
        crimeRate: "Low"
      },
      keyEconomicDrivers: ["Healthcare (Lehigh Valley Health Network)", "Higher Education (Lehigh University)", "Manufacturing", "Tourism and Entertainment (Wind Creek Bethlehem)"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "lancaster": {
      name: "Lancaster",
      state: "Pennsylvania",
      description: "Lancaster is a unique market blending Amish heritage with a growing economy, particularly in healthcare and manufacturing.",
      marketInfo: "The city offers a stable housing market with consistent demand. Its tourism sector also contributes to rental property opportunities.",
      keyStats: {
        population: "59,322",
        medianHomePrice: "$270,000",
        averageRent: "$1,450",
        crimeRate: "Low"
      },
      keyEconomicDrivers: ["Healthcare (Penn Medicine Lancaster General Health)", "Manufacturing", "Agriculture", "Tourism", "Education"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "harrisburg": {
      name: "Harrisburg",
      state: "Pennsylvania",
      description: "As Pennsylvania's capital, Harrisburg has a market influenced by government employment and a growing logistics sector.",
      marketInfo: "The city offers affordable housing and steady rental demand. Redevelopment efforts are focused on its downtown and riverfront areas.",
      keyStats: {
        population: "49,528",
        medianHomePrice: "$170,000",
        averageRent: "$1,200",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["State Government", "Healthcare", "Logistics", "Education"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "york": {
      name: "York",
      state: "Pennsylvania",
      description: "York is an affordable market with a strong manufacturing and distribution base, attracting investment from logistics companies.",
      marketInfo: "The housing market is stable with consistent rental demand. Its position in the I-81 corridor makes it a key logistics hub.",
      keyStats: {
        population: "44,800",
        medianHomePrice: "$235,000",
        averageRent: "$1,300",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Manufacturing", "Logistics and Distribution", "Healthcare", "Agriculture"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "wilkes-barre": {
      name: "Wilkes-Barre",
      state: "Pennsylvania",
      description: "Wilkes-Barre offers value in northeastern Pennsylvania, with affordable housing and a recovering economy.",
      marketInfo: "The market is driven by healthcare and education sectors. Investors are drawn to the low entry prices and potential for rental income.",
      keyStats: {
        population: "44,328",
        medianHomePrice: "$190,000",
        averageRent: "$1,100",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Healthcare (Geisinger)", "Education (Wilkes University)", "Logistics", "Retail"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "chester": {
      name: "Chester",
      state: "Pennsylvania",
      description: "Chester is an affordable city on the Delaware River, offering significant investment potential through urban redevelopment efforts.",
      marketInfo: "The market is characterized by very low prices and a focus on revitalization projects. Its proximity to Philadelphia is a key advantage.",
      keyStats: {
        population: "33,855",
        medianHomePrice: "$150,000",
        averageRent: "$1,000",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Manufacturing", "Logistics", "Proximity to Philadelphia", "Healthcare"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "norristown": {
      name: "Norristown",
      state: "Pennsylvania",
      description: "Norristown, the county seat of Montgomery County, offers suburban living with good access to Philadelphia's job market.",
      marketInfo: "The market is stable, with consistent demand from commuters. It features a mix of historic homes and newer apartment complexes.",
      keyStats: {
        population: "34,324",
        medianHomePrice: "$280,000",
        averageRent: "$1,500",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Healthcare", "Government", "Retail", "Proximity to Philadelphia"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "upper-darby": {
      name: "Upper Darby",
      state: "Pennsylvania",
      description: "Upper Darby is a large, diverse suburb of Philadelphia, known for its affordability and excellent public transportation.",
      marketInfo: "The market is competitive, especially for well-maintained properties. Its proximity to University City and Center City Philadelphia drives strong rental demand.",
      keyStats: {
        population: "84,144",
        medianHomePrice: "$275,000",
        averageRent: "$1,550",
        crimeRate: "Low"
      },
      keyEconomicDrivers: ["Proximity to Philadelphia employment centers", "Retail", "Healthcare"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "levittown": {
      name: "Levittown",
      state: "Pennsylvania",
      description: "Levittown is a historic post-war planned community offering affordable, family-friendly living.",
      marketInfo: "The market is stable with consistent demand from families attracted to its schools and community feel. It's a desirable area for first-time homebuyers.",
      keyStats: {
        population: "52,983",
        medianHomePrice: "$350,000",
        averageRent: "$1,800",
        crimeRate: "Very Low"
      },
      keyEconomicDrivers: ["Healthcare", "Retail", "Manufacturing", "Proximity to Philadelphia"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    }
  },
  "new-york": {
    "new-york-city": {
      name: "New York City",
      state: "New York",
      description: "As a global financial and cultural center, NYC's real estate market is one of the most expensive and complex in the world.",
      marketInfo: "The market varies dramatically by borough, from ultra-luxury condos in Manhattan to more affordable single-family homes in Queens and Staten Island. It is a resilient, high-demand market with significant barriers to entry.",
      keyStats: {
        population: "8,335,897",
        medianHomePrice: "$820,000",
        averageRent: "$4,100",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Finance", "Technology", "Real Estate", "Healthcare", "Media and Entertainment", "Tourism"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: StreetEasy/Zillow (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: NYPD CompStat (2023-2024)"
    },
    "buffalo": {
      name: "Buffalo",
      state: "New York",
      description: "Buffalo's real estate market has seen a remarkable resurgence, characterized by strong demand and rapid price appreciation.",
      marketInfo: "Driven by a growing healthcare and technology sector, the city remains highly affordable compared to other major metros. The market is very competitive, with significant investment flowing into neighborhood revitalization.",
      keyStats: {
        population: "276,486",
        medianHomePrice: "$225,000",
        averageRent: "$1,300",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Healthcare (Kaleida Health)", "Higher Education (University at Buffalo)", "Finance (M&T Bank HQ)", "Technology"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: RentCafe (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "rochester": {
      name: "Rochester",
      state: "New York",
      description: "Rochester is known for its highly-ranked universities and a strong technology and optics industry.",
      marketInfo: "The housing market is very competitive and affordable, with home prices well below the national average. It's a seller's market with strong demand from both homebuyers and investors.",
      keyStats: {
        population: "209,474",
        medianHomePrice: "$215,000",
        averageRent: "$1,400",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Higher Education (University of Rochester, RIT)", "Healthcare (UR Medicine)", "Technology and Optics", "Manufacturing"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "yonkers": {
      name: "Yonkers",
      state: "New York",
      description: "As an inner suburb of NYC, Yonkers has a diverse and dynamic real estate market. It has seen a boom in luxury apartment construction along its waterfront.",
      marketInfo: "The market combines urban convenience with suburban appeal, leading to steady demand. Waterfront developments are attracting residents priced out of NYC.",
      keyStats: {
        population: "209,510",
        medianHomePrice: "$650,000",
        averageRent: "$2,500",
        crimeRate: "Low"
      },
      keyEconomicDrivers: ["Healthcare", "Retail", "Education", "Proximity to NYC"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: RentCafe (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "syracuse": {
      name: "Syracuse",
      state: "New York",
      description: "Syracuse's market is one of the most affordable in the state, anchored by Syracuse University and a growing tech sector.",
      marketInfo: "The city is poised for significant growth, making it an attractive target for investors seeking high potential returns. Micron's planned investment will drive future demand.",
      keyStats: {
        population: "145,151",
        medianHomePrice: "$175,000",
        averageRent: "$1,350",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Higher Education (Syracuse University)", "Healthcare", "Technology (Micron)", "Manufacturing"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "albany": {
      name: "Albany",
      state: "New York",
      description: "As New York's capital, Albany offers a stable market driven by government employment and a growing tech sector.",
      marketInfo: "The Capital Region benefits from a diverse economy with strong healthcare and education sectors, providing steady demand for housing.",
      keyStats: {
        population: "97,856",
        medianHomePrice: "$280,000",
        averageRent: "$1,650",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["State Government", "Healthcare", "Higher Education (SUNY Albany)", "Technology"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: RentCafe (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "new-rochelle": {
      name: "New Rochelle",
      state: "New York",
      description: "New Rochelle is a desirable Westchester County city offering suburban amenities and excellent transit access to NYC.",
      marketInfo: "The city has seen significant investment in its downtown area, attracting new residents and businesses. It remains a premium market with strong property values.",
      keyStats: {
        population: "79,726",
        medianHomePrice: "$750,000",
        averageRent: "$2,900",
        crimeRate: "Low"
      },
      keyEconomicDrivers: ["Healthcare", "Education", "Finance", "Proximity to NYC"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "mount-vernon": {
      name: "Mount Vernon",
      state: "New York",
      description: "Mount Vernon provides more affordable housing options within Westchester County, with convenient transportation to Manhattan.",
      marketInfo: "The market is primarily composed of multi-family dwellings, offering good rental income potential. It serves as a more affordable alternative to nearby New Rochelle and Bronxville.",
      keyStats: {
        population: "67,292",
        medianHomePrice: "$550,000",
        averageRent: "$2,300",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Retail", "Healthcare", "Proximity to NYC", "Transportation"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "schenectady": {
      name: "Schenectady",
      state: "New York",
      description: "Schenectady offers affordable real estate in the Capital Region, with ongoing revitalization efforts focused on its downtown and Mohawk Harbor areas.",
      marketInfo: "The market is growing, supported by investments in tech and renewable energy. It's an attractive option for investors looking for value and upside potential.",
      keyStats: {
        population: "65,336",
        medianHomePrice: "$200,000",
        averageRent: "$1,300",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Technology (GE Power)", "Healthcare", "Higher Education", "Government"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "utica": {
      name: "Utica",
      state: "New York",
      description: "Utica presents significant value opportunities with extremely affordable real estate and ongoing urban renewal projects.",
      marketInfo: "The market is driven by a stable, diverse economy and a growing refugee resettlement program, which fuels consistent rental demand. It offers high potential for cash-flow investments.",
      keyStats: {
        population: "65,283",
        medianHomePrice: "$170,000",
        averageRent: "$1,100",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Healthcare (Mohawk Valley Health System)", "Higher Education (Utica University)", "Manufacturing", "State Government"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: RentCafe (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "white-plains": {
      name: "White Plains",
      state: "New York",
      description: "White Plains is Westchester County's commercial and retail hub, offering a strong job market and upscale real estate.",
      marketInfo: "The city attracts professionals with its corporate headquarters and excellent transit links to Manhattan. It's a high-cost market with stable appreciation.",
      keyStats: {
        population: "58,109",
        medianHomePrice: "$725,000",
        averageRent: "$2,800",
        crimeRate: "Low"
      },
      keyEconomicDrivers: ["Corporate Headquarters", "Finance", "Retail", "Healthcare", "Proximity to NYC"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "hempstead": {
      name: "Hempstead",
      state: "New York",
      description: "Hempstead, located in Nassau County, offers diverse housing stock and good transportation access to New York City.",
      marketInfo: "It's a large, diverse market with significant rental demand, particularly from students attending local universities and professionals working in NYC.",
      keyStats: {
        population: "59,169",
        medianHomePrice: "$560,000",
        averageRent: "$2,300",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Higher Education (Hofstra University, Nassau Community College)", "Healthcare", "Retail", "Proximity to NYC"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "troy": {
      name: "Troy",
      state: "New York",
      description: "Troy offers a unique blend of historic architecture, a growing arts scene, and affordable housing, with proximity to Albany.",
      marketInfo: "The city is experiencing a renaissance, with new businesses and residents drawn to its charm and affordability. It's an attractive market for investors focusing on value and character.",
      keyStats: {
        population: "51,401",
        medianHomePrice: "$270,000",
        averageRent: "$1,450",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Technology", "Higher Education", "Government", "Arts and Culture"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "niagara-falls": {
      name: "Niagara Falls",
      state: "New York",
      description: "Niagara Falls' real estate market is heavily influenced by tourism, but also offers affordable housing for its local workforce.",
      marketInfo: "The market is value-driven, with opportunities in both residential rentals and hospitality-related commercial properties. It's a market for investors comfortable with tourism-dependent economies.",
      keyStats: {
        population: "47,978",
        medianHomePrice: "$170,000",
        averageRent: "$1,100",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Tourism", "Hospitality", "Manufacturing", "Energy"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "binghamton": {
      name: "Binghamton",
      state: "New York",
      description: "Binghamton offers extremely affordable real estate with university-driven rental demand.",
      marketInfo: "Home to Binghamton University, the city has a steady student rental market and a stable economy supported by education and healthcare sectors. It represents a strong value proposition for investors.",
      keyStats: {
        population: "44,819",
        medianHomePrice: "$190,000",
        averageRent: "$1,200",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Higher Education (Binghamton University)", "Healthcare", "Manufacturing", "Technology"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    }
  },
  "connecticut": {
    "bridgeport": {
      name: "Bridgeport",
      state: "Connecticut",
      description: "Bridgeport is one of Connecticut's most affordable coastal cities, offering significant value compared to its Fairfield County neighbors.",
      marketInfo: "The city is focused on economic development and waterfront revitalization. Its market has strong investment potential, particularly in multi-family properties, but is tied to the city's ongoing recovery.",
      keyStats: {
        population: "148,377",
        medianHomePrice: "$365,000",
        averageRent: "$1,850",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Healthcare (Hartford HealthCare, Yale New Haven Health)", "Manufacturing", "Finance", "Higher Education (University of Bridgeport)"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "new-haven": {
      name: "New Haven",
      state: "Connecticut",
      description: "Home to Yale University, New Haven has a robust and stable rental market. The city is a center for bioscience and healthcare, which fuels consistent housing demand.",
      marketInfo: "The market is a mix of historic homes and new construction, with strong investment opportunities near the university and downtown.",
      keyStats: {
        population: "138,913",
        medianHomePrice: "$350,000",
        averageRent: "$2,300",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Higher Education (Yale University)", "Healthcare (Yale New Haven Hospital)", "Biotechnology and Life Sciences", "Finance"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "hartford": {
      name: "Hartford",
      state: "Connecticut",
      description: "As the state capital and the 'Insurance Capital of the World,' Hartford has a market anchored by the insurance and healthcare industries.",
      marketInfo: "Home prices are very affordable for a capital city, offering high rental yields for investors. Downtown revitalization projects are aiming to attract more residents and spur market growth.",
      keyStats: {
        population: "120,576",
        medianHomePrice: "$299,000",
        averageRent: "$1,600",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Insurance (The Hartford, Aetna, Travelers)", "Healthcare", "State Government", "Aerospace (Pratt & Whitney nearby)"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: RentCafe (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "stamford": {
      name: "Stamford",
      state: "Connecticut",
      description: "Stamford has a vibrant, corporate-driven real estate market with a large population of professionals commuting to NYC.",
      marketInfo: "The city has seen extensive development of luxury apartments and condos. It is a high-cost, high-demand market considered one of the safest bets in Connecticut for stable, long-term appreciation.",
      keyStats: {
        population: "136,191",
        medianHomePrice: "$675,000",
        averageRent: "$3,200",
        crimeRate: "Low"
      },
      keyEconomicDrivers: ["Financial Services", "Corporate Headquarters", "Technology", "Healthcare", "Real Estate"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "waterbury": {
      name: "Waterbury",
      state: "Connecticut",
      description: "Waterbury offers some of the lowest property prices in the state, making it a focal point for value-oriented investors.",
      marketInfo: "The market is driven by a local manufacturing and healthcare economy. The city presents an opportunity for cash-flow investments, particularly in multi-family housing.",
      keyStats: {
        population: "114,197",
        medianHomePrice: "$270,000",
        averageRent: "$1,450",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Healthcare", "Manufacturing", "Higher Education", "Retail"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "norwalk": {
      name: "Norwalk",
      state: "Connecticut",
      description: "Norwalk combines suburban charm with urban amenities, making it a desirable location for families and investors.",
      marketInfo: "Located in Fairfield County, Norwalk offers excellent schools and proximity to NYC while maintaining reasonable property values. Its diverse economy supports a stable housing market.",
      keyStats: {
        population: "91,184",
        medianHomePrice: "$550,000",
        averageRent: "$2,400",
        crimeRate: "Low"
      },
      keyEconomicDrivers: ["Healthcare", "Technology", "Maritime Industry", "Retail"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "danbury": {
      name: "Danbury",
      state: "Connecticut",
      description: "Danbury's diverse economy and affordable housing make it an attractive option for real estate investment.",
      marketInfo: "The 'Hat City' offers good value propositions with strong rental demand from nearby corporate employment centers. It appeals to both homebuyers and investors seeking growth.",
      keyStats: {
        population: "86,518",
        medianHomePrice: "$460,000",
        averageRent: "$2,000",
        crimeRate: "Low"
      },
      keyEconomicDrivers: ["Healthcare", "Technology", "Manufacturing", "Retail"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "new-britain": {
      name: "New Britain",
      state: "Connecticut",
      description: "New Britain offers affordable entry points into Connecticut's real estate market, with ongoing redevelopment initiatives.",
      marketInfo: "The city's industrial heritage provides opportunities for adaptive reuse and affordable housing investments. Its central location is also an advantage.",
      keyStats: {
        population: "72,543",
        medianHomePrice: "$300,000",
        averageRent: "$1,500",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Healthcare", "Manufacturing", "Higher Education", "State Government"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "west-hartford": {
      name: "West Hartford",
      state: "Connecticut",
      description: "West Hartford is known for its excellent schools, vibrant downtown, and upscale living, making it a premium real estate market.",
      marketInfo: "The town enjoys strong property values and consistent demand, appealing to families and professionals alike. It's a highly desirable community in Connecticut.",
      keyStats: {
        population: "64,083",
        medianHomePrice: "$560,000",
        averageRent: "$2,200",
        crimeRate: "Very Low"
      },
      keyEconomicDrivers: ["Education", "Healthcare", "Retail", "Finance"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "greenwich": {
      name: "Greenwich",
      state: "Connecticut",
      description: "Greenwich represents Connecticut's luxury real estate market, with some of the highest property values in the state and nation.",
      marketInfo: "It's an exclusive enclave for high-net-worth individuals, offering luxury properties and exceptional proximity to New York City. The market is stable and highly sought after.",
      keyStats: {
        population: "63,518",
        medianHomePrice: "$2,100,000",
        averageRent: "$4,500",
        crimeRate: "Very Low"
      },
      keyEconomicDrivers: ["Finance", "Hedge Funds", "Corporate Headquarters", "Luxury Retail", "Proximity to NYC"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "hamden": {
      name: "Hamden",
      state: "Connecticut",
      description: "Hamden offers suburban living with good schools and reasonable property values for Connecticut standards.",
      marketInfo: "Located near New Haven, Hamden provides good value for families and steady rental demand from nearby universities. It's a solid market for long-term investment.",
      keyStats: {
        population: "61,169",
        medianHomePrice: "$320,000",
        averageRent: "$1,800",
        crimeRate: "Low"
      },
      keyEconomicDrivers: ["Higher Education (Quinnipiac University)", "Healthcare", "Retail", "Proximity to New Haven"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "meriden": {
      name: "Meriden",
      state: "Connecticut",
      description: "Meriden's central location and affordable housing make it an interesting market for value-oriented investors.",
      marketInfo: "Centrally located in Connecticut with good transportation access and affordable housing stock. It's a market with potential for appreciation as the state's economy grows.",
      keyStats: {
        population: "60,850",
        medianHomePrice: "$300,000",
        averageRent: "$1,500",
        crimeRate: "Moderate"
      },
      keyEconomicDrivers: ["Healthcare", "Manufacturing", "Retail", "Transportation"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "bristol": {
      name: "Bristol",
      state: "Connecticut",
      description: "Bristol offers small-town charm with affordable real estate and steady employment from local industries.",
      marketInfo: "Home to ESPN headquarters, Bristol provides employment stability and affordable housing opportunities. It's a reliable market for middle-income families.",
      keyStats: {
        population: "60,039",
        medianHomePrice: "$310,000",
        averageRent: "$1,600",
        crimeRate: "Low"
      },
      keyEconomicDrivers: ["Media (ESPN)", "Healthcare", "Manufacturing", "Retail"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "manchester": {
      name: "Manchester",
      state: "Connecticut",
      description: "Manchester combines suburban amenities with affordable housing, making it attractive for families and investors.",
      marketInfo: "A well-established community with good schools and reasonable property values for the Hartford area. It offers a stable market with consistent demand.",
      keyStats: {
        population: "58,241",
        medianHomePrice: "$330,000",
        averageRent: "$1,700",
        crimeRate: "Low"
      },
      keyEconomicDrivers: ["Healthcare", "Retail", "Manufacturing", "Higher Education"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Realtor.com (Aug 2025); Average Rent: Zumper (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
    },
    "west-haven": {
      name: "West Haven",
      state: "Connecticut",
      description: "West Haven offers coastal living and affordable housing options, benefiting from its proximity to New Haven.",
      marketInfo: "The market is driven by its value proposition and access to New Haven's job centers. It's an attractive area for first-time homebuyers and investors seeking rental income.",
      keyStats: {
        population: "57,113",
        medianHomePrice: "$340,000",
        averageRent: "$1,750",
        crimeRate: "High"
      },
      keyEconomicDrivers: ["Healthcare", "Higher Education", "Retail", "Proximity to New Haven"],
      dataSource: "Population: U.S. Census Bureau (2023 Est.); Median Home Price: Redfin (Aug 2025); Average Rent: Apartments.com (Aug 2025); Crime Rate: FBI UCR (2023 Data)"
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

        {/* Economic Drivers Section */}
        <section className="py-16 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Key Economic Drivers</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Major Industries</h3>
                  <ul className="space-y-2">
                    {cityInfo.keyEconomicDrivers.map((driver, index) => (
                      <li key={index} className="text-muted-foreground">
                        • {driver}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Data Sources</h3>
                  <p className="text-sm text-muted-foreground">
                    {cityInfo.dataSource}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
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