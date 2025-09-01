import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams } from "wouter";
import { cityData } from "@/data/cities";

export default function CityPage() {
  const { state, city } = useParams();
  const cityInfo = cityData[state as keyof typeof cityData]?.[city as string];

  if (!cityInfo) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">City Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">
              The requested city could not be found. Please check the URL or return to our homepage.
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
                  {cityInfo.name} is a vibrant city in {cityInfo.state} with a diverse real estate market. 
                  Our professional team provides comprehensive property documentation services to help real 
                  estate professionals make informed investment decisions.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you're evaluating distressed properties, need condition reports, or require 
                  professional photography, we deliver the insights you need to succeed in the {cityInfo.name} market.
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

        {/* Market Overview Section */}
        <section className="py-16 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Market Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Real Estate Market</h3>
                  <p className="text-muted-foreground">
                    {cityInfo.name} offers diverse real estate opportunities with a median home price of {cityInfo.keyStats.medianHomePrice}. 
                    The market features a mix of residential and commercial properties, making it an attractive 
                    destination for real estate investors and professionals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Data Sources</h3>
                  <p className="text-sm text-muted-foreground">
                    Market data compiled from U.S. Census Bureau, Redfin, Realtor.com, RentCafe, Zumper, 
                    and FBI Uniform Crime Reporting. Statistics represent current market conditions as of 2025.
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
            <Button asChild size="lg">
              <a href="/#contact">Contact Us Today</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}