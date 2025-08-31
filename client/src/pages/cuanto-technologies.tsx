
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, Users, Zap, Brain, Smartphone, ShoppingCart, Code, BarChart3 } from "lucide-react";

export default function CuantoTechnologies() {
  const services = [
    {
      icon: Code,
      title: "Web Applications",
      description: "Modern, responsive web applications built with Next.js and other cutting-edge frameworks, enhanced with AI capabilities for better user experiences.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile applications with AI-powered features like image recognition, voice commands, and personalized recommendations.",
      technologies: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      icon: ShoppingCart,
      title: "Shopify Development",
      description: "Custom Shopify stores with themes, apps, and integrations that use AI for advanced product recommendations and personalized shopping experiences.",
      technologies: ["Shopify", "Liquid", "Shopify Plus", "Apps"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "We integrate advanced AI models into your applications for natural language processing, computer vision, predictive analytics, and intelligent automation.",
      technologies: ["OpenAI", "TensorFlow", "PyTorch", "NLP"]
    },
    {
      icon: BarChart3,
      title: "SaaS Solutions",
      description: "Custom Software-as-a-Service platforms with subscription management, analytics, and AI-driven insights to help you make data-driven decisions.",
      technologies: ["Stripe", "Analytics", "APIs", "Cloud"]
    },
    {
      icon: Zap,
      title: "Custom Software",
      description: "Bespoke software solutions designed to address your unique business challenges, with AI integration for automation and intelligent data processing.",
      technologies: ["Custom APIs", "Databases", "Cloud", "Integration"]
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "Shopify", category: "E-commerce" },
    { name: "OpenAI", category: "AI" },
    { name: "Stripe", category: "Payments" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Vercel", category: "Deployment" },
    { name: "Python", category: "Language" }
  ];

  const projects = [
    {
      name: "Friendship Center Gallery",
      description: "Revolutionary art gallery platform with custom CMS, 3D viewing, Stripe payments, and event management for Fort Lauderdale's premier art space.",
      url: "https://friendshipcentergallery.org/",
      tags: ["CMS", "3D Tech", "Payments"]
    },
    {
      name: "Track-4U",
      description: "Israel's leading e-commerce tracking platform with ML-powered delivery predictions and multi-carrier integration.",
      url: "https://track-4u.com/",
      tags: ["AI/ML", "Tracking"]
    },
    {
      name: "ShulMaker",
      description: "Premium synagogue websites with automated Shabbat times, SMS notifications, and multilingual support.",
      url: "https://shulmaker.com/",
      tags: ["CMS", "SMS"]
    },
    {
      name: "Milk and Butterflies",
      description: "An AI-powered creative platform that transforms ideas into visual art using advanced machine learning algorithms and intuitive user interfaces.",
      url: "https://milkandbutterflies.com/",
      tags: ["AI Solutions", "Creative Tools"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cuanto Technologies
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
                Modern Software & AI Solutions - We leverage cutting-edge technologies and AI to build solutions that evolve with your business needs.
              </p>
              <div className="flex items-center justify-center mb-8">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">Based in Aventura, FL</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                  <a href="https://cuantotec.com/contact" target="_blank" rel="noopener noreferrer">
                    Get Started
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <a href="https://cuantotec.com/portfolio" target="_blank" rel="noopener noreferrer">
                    View Portfolio
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transforming Ideas Into Digital Success
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We help businesses across industries revolutionize their operations with cutting-edge technology solutions. 
                From web applications to AI integration, we provide end-to-end technology solutions that drive growth and innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">500+ Clients</h3>
                <p className="text-gray-600">Florida businesses already leading their markets</p>
              </div>
              <div className="p-6">
                <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
                <p className="text-gray-600">Advanced AI integration in all our solutions</p>
              </div>
              <div className="p-6">
                <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cutting-Edge</h3>
                <p className="text-gray-600">Latest technologies and frameworks</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive Solutions for Modern Businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <IconComponent className="w-10 h-10 text-blue-600 mb-2" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {service.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powered by Industry-Leading Technologies
              </h2>
              <p className="text-xl text-gray-600">
                We leverage cutting-edge platforms and frameworks to deliver exceptional results
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600">
                Discover how we've helped businesses revolutionize their operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center justify-between">
                      {project.name}
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Advantage Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The AI-Powered Advantage
            </h2>
            <p className="text-xl max-w-4xl mx-auto mb-8">
              Artificial intelligence isn't just a feature we add—it's a transformative capability woven into everything we build. 
              Our AI integration services help businesses automate complex tasks, uncover hidden insights, and create personalized experiences.
            </p>
            <blockquote className="text-2xl font-semibold italic mb-8">
              "AI isn't just changing what's possible—it's redefining what's imaginable."
            </blockquote>
            <p className="text-lg opacity-90">— Cuanto Technologies</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              In today's rapidly evolving digital landscape, standing still means falling behind. 
              Partner with Cuanto Technologies to harness the power of AI-enhanced software solutions 
              that drive growth, efficiency, and competitive advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="https://cuantotec.com/contact" target="_blank" rel="noopener noreferrer">
                  Schedule a Consultation
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://cuantotec.com/shopify-onboarding" target="_blank" rel="noopener noreferrer">
                  Start Shopify Onboarding
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
