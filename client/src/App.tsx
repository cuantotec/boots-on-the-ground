import { Router, Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsOfService from "./pages/terms-of-service";
import StatePage from "./pages/state-page";
import CityPage from "./pages/city-page";
import { lazy } from "react";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/cuanto-technologies" component={lazy(() => import("@/pages/cuanto-technologies"))} />
          <Route path="/location/:state" component={StatePage} />
          <Route path="/state/:state" component={StatePage} />
          <Route path="/city/:state/:city" component={CityPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}