
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const [, setLocation] = useLocation();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setLocation("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setLocation]);

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-md mx-4 text-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/logo.svg"
            alt="Boots On The Ground Logo"
            className="h-16 w-auto mx-auto mb-4"
          />
        </div>

        <Card className="shadow-lg border-0">
          <CardContent className="pt-8 pb-6">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <AlertCircle className="h-16 w-16 text-orange-500" />
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                  404
                </div>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or you may have entered the wrong URL.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700 mb-2">
                Redirecting to home page in:
              </p>
              <div className="text-2xl font-bold text-orange-500">
                {countdown} second{countdown !== 1 ? 's' : ''}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={handleGoHome}
                className="flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                Go Home Now
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Button>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Need help? Contact us at{" "}
                <a 
                  href="mailto:info@reBootsOnTheGround.com" 
                  className="text-orange-500 hover:text-orange-600 transition-colors"
                >
                  info@reBootsOnTheGround.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
