
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
            <p className="text-muted-foreground text-center mb-12">
              Last updated: January 2024
            </p>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Acceptance of Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    By accessing and using the services provided by Boots On The Ground, you accept and 
                    agree to be bound by the terms and provision of this agreement. If you do not agree 
                    to abide by the above, please do not use this service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service Description</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Boots On The Ground provides professional property documentation services including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Visual documentation and photography</li>
                    <li>Property condition assessments</li>
                    <li>Written inspection reports</li>
                    <li>Damage documentation</li>
                    <li>Emergency documentation services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Payment is due upon completion of services unless otherwise agreed</li>
                    <li>We accept cash, check, and electronic payments</li>
                    <li>Late payments may incur additional fees</li>
                    <li>Refunds are available within 30 days for unused services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Liability and Warranties</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Our documentation services are provided for informational purposes. While we strive 
                    for accuracy, we do not warrant that our assessments are comprehensive or that all 
                    property conditions have been identified.
                  </p>
                  <p>
                    Clients should conduct their own due diligence and consult with appropriate 
                    professionals before making property investment decisions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    All photographs, reports, and documentation created by Boots On The Ground remain 
                    our intellectual property until full payment is received. Upon payment, clients 
                    receive usage rights for the intended business purpose.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cancellation Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Standard appointments can be cancelled up to 24 hours in advance without penalty</li>
                    <li>Emergency services may have different cancellation terms</li>
                    <li>Same-day cancellations may incur a fee</li>
                    <li>Weather-related cancellations will be rescheduled at no additional cost</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Boots On The Ground's liability shall not exceed the total amount paid for services. 
                    We are not liable for any indirect, incidental, or consequential damages arising 
                    from the use of our services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> info@reBootsOnTheGround.com</p>
                    <p><strong>Phone:</strong> (609) 350-4359</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
