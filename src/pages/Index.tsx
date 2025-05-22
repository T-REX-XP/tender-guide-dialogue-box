
import React, { useState, useEffect } from 'react';
import OnboardingDialog from '@/components/OnboardingDialog';
import { Button } from '@/components/ui/button';
import { QuestionMarkCircle } from 'lucide-react';

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  
  // Show onboarding dialog when the page loads for the first time
  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
      localStorage.setItem('hasSeenOnboarding', 'true');
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-blue-700 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Procurement Management Portal</h1>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-blue-600" 
            onClick={() => setShowOnboarding(true)}
          >
            <QuestionMarkCircle className="h-5 w-5 mr-2" />
            Documentation
          </Button>
        </div>
      </header>
      
      {/* Main content */}
      <main className="container mx-auto p-6 max-w-7xl">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Welcome to the Big Food Supermarket Network Procurement Portal
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Manage all your procurement needs efficiently with our comprehensive platform.
            Access tenders, contracts, supplier information, and more.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-md border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Getting Started</h3>
            <p className="mb-4">
              New to the procurement portal? Our onboarding documentation will help you
              understand the platform and get started quickly.
            </p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700" 
              onClick={() => setShowOnboarding(true)}
            >
              View Documentation
            </Button>
          </div>
        </div>
      </main>
      
      {/* Onboarding Dialog */}
      <OnboardingDialog 
        open={showOnboarding} 
        onOpenChange={setShowOnboarding} 
      />
    </div>
  );
};

export default Index;
