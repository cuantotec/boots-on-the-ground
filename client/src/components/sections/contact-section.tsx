import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and email address.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // For V1, this is visual only - show success message
    toast({
      title: "Message sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: ""
    });
  };

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "By Appointment" }
  ];

  const serviceAreas = [
    "New Jersey",
    "New York", 
    "Pennsylvania",
    "Connecticut"
  ];

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-contact-title">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-contact-subtitle">
            Ready to get started? Let's discuss your property documentation needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-card-foreground" data-testid="text-form-title">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Name *
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email *
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <Label htmlFor="address" className="block text-sm font-medium text-card-foreground mb-2">
                    Property Address
                  </Label>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main St, City, State 12345"
                    data-testid="input-address"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message/Request Details
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your property documentation needs..."
                    className="resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-4 rounded-md font-semibold"
                  data-testid="button-send-message"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground" data-testid="text-direct-contact-title">
                  Have a specific question? Call or Text us now
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <a 
                      href="tel:+16093504359" 
                      className="text-foreground font-medium hover:text-primary transition-colors" 
                      data-testid="text-contact-phone"
                    >
                      (609) 350-4359
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <a 
                      href="mailto:info@reBootsOnTheGround.com" 
                      className="text-foreground hover:text-primary transition-colors" 
                      data-testid="text-contact-email"
                    >
                      info@reBootsOnTheGround.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground" data-testid="text-business-hours-title">
                  Business Hours
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  {businessHours.map((schedule, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between"
                      data-testid={`text-hours-${schedule.day.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span>{schedule.day}</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Area */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground" data-testid="text-service-area-title">
                  Service Area
                </h3>
                <p className="text-muted-foreground mb-4" data-testid="text-service-area-description">
                  We proudly serve the entire Tri-State area including:
                </p>
                <ul className="text-muted-foreground space-y-1">
                  {serviceAreas.map((area, index) => (
                    <li key={index} data-testid={`text-service-area-${area.toLowerCase().replace(/\s+/g, '-')}`}>
                      • {area}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
