
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Clock } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & Lead Inspector",
      experience: "15+ years in real estate",
      image: "https://placehold.co/300x300/3B82F6/FFFFFF?text=JS"
    },
    {
      name: "Sarah Johnson",
      role: "Senior Documentation Specialist",
      experience: "10+ years in property assessment",
      image: "https://placehold.co/300x300/3B82F6/FFFFFF?text=SJ"
    },
    {
      name: "Mike Rodriguez",
      role: "Field Operations Manager",
      experience: "8+ years in construction",
      image: "https://placehold.co/300x300/3B82F6/FFFFFF?text=MR"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Accuracy",
      description: "Precise documentation that real estate professionals can trust for critical investment decisions."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Consistent, timely service delivery that meets your project deadlines every time."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Industry-leading standards in property documentation and visual assessment services."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships with our clients through exceptional service and communication."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Boots On The Ground
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Professional real estate documentation experts serving the Tri-State area with precision and integrity.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 2015, Boots On The Ground emerged from a simple observation: real estate professionals 
                  needed reliable, detailed property documentation to make informed investment decisions. What started 
                  as a local service in New Jersey has grown into the Tri-State area's most trusted property 
                  documentation company.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our team combines deep real estate knowledge with cutting-edge documentation technology to provide 
                  comprehensive visual assessments that save our clients time, money, and risk. We've documented 
                  over 5,000 properties and helped facilitate millions in real estate transactions.
                </p>
                <Button size="lg" className="mt-4">
                  View Our Services
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://placehold.co/600x400/3B82F6/FFFFFF?text=Team+Photo" 
                  alt="Boots On The Ground Team" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do and ensure exceptional service for every client.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals dedicated to providing the highest quality property documentation services.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <CardTitle>{member.name}</CardTitle>
                    <p className="text-primary font-semibold">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold mb-2">5,000+</h3>
                <p className="text-lg">Properties Documented</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">98%</h3>
                <p className="text-lg">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">24hrs</h3>
                <p className="text-lg">Average Turnaround</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">4</h3>
                <p className="text-lg">States Covered</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
