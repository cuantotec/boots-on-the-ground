import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "wouter";
import { cityData } from "@/data/cities";

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