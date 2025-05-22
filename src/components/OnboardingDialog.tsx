
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DocumentationLinks from './DocumentationLinks';

interface OnboardingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const OnboardingDialog = ({ open, onOpenChange }: OnboardingDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-700">
            Welcome to the Procurement Management Portal
          </DialogTitle>
          <DialogDescription className="text-lg">
            Your comprehensive platform for managing procurement processes at Big Food Supermarket Network
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <p className="mb-4 text-gray-700">
            This portal provides all the tools and resources you need to manage the procurement
            process efficiently. Browse the documentation below to get started.
          </p>
          
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="guides">Getting Started</TabsTrigger>
              <TabsTrigger value="tenders">Tender Process</TabsTrigger>
              <TabsTrigger value="contracts">Contracts</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="guides" className="py-2">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Getting Started Guides</h3>
              <DocumentationLinks 
                links={[
                  { 
                    title: "Procurement Portal Overview", 
                    description: "Learn about the key features and benefits of our procurement platform", 
                    icon: "file-text" 
                  },
                  { 
                    title: "New User Guide", 
                    description: "Step-by-step instructions for new procurement team members", 
                    icon: "book" 
                  },
                  { 
                    title: "Supermarket Procurement Strategy", 
                    description: "Our strategic approach to supermarket chain procurement", 
                    icon: "file-text" 
                  },
                  { 
                    title: "Procurement Calendar", 
                    description: "Annual procurement planning and key dates", 
                    icon: "file-text" 
                  }
                ]} 
              />
            </TabsContent>
            
            <TabsContent value="tenders" className="py-2">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Tender Process Documentation</h3>
              <DocumentationLinks 
                links={[
                  { 
                    title: "Tender Creation Guide", 
                    description: "How to create and publish tenders for suppliers", 
                    icon: "file-text" 
                  },
                  { 
                    title: "Supplier Selection Criteria", 
                    description: "Standards and benchmarks for evaluating supplier proposals", 
                    icon: "file-text" 
                  },
                  { 
                    title: "Bid Evaluation Process", 
                    description: "Step-by-step process for fair and transparent bid evaluation", 
                    icon: "book" 
                  },
                  { 
                    title: "Tender Templates", 
                    description: "Standardized templates for different product categories", 
                    icon: "file-text" 
                  }
                ]} 
              />
            </TabsContent>
            
            <TabsContent value="contracts" className="py-2">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Contract Management</h3>
              <DocumentationLinks 
                links={[
                  { 
                    title: "Contract Lifecycle Management", 
                    description: "Managing contracts from creation through renewal or termination", 
                    icon: "book" 
                  },
                  { 
                    title: "Standard Contract Terms", 
                    description: "Required legal terms for all Big Food Supermarket suppliers", 
                    icon: "file-text" 
                  },
                  { 
                    title: "Contract Negotiation Guide", 
                    description: "Best practices for negotiating favorable terms", 
                    icon: "file-text" 
                  },
                  { 
                    title: "Supplier Relationship Management", 
                    description: "Building and maintaining strong supplier partnerships", 
                    icon: "file-text" 
                  }
                ]} 
              />
            </TabsContent>
            
            <TabsContent value="compliance" className="py-2">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Compliance & Regulations</h3>
              <DocumentationLinks 
                links={[
                  { 
                    title: "Food Safety Standards", 
                    description: "Mandatory safety requirements for food suppliers", 
                    icon: "file-text" 
                  },
                  { 
                    title: "Ethical Sourcing Policy", 
                    description: "Our commitment to ethical and sustainable procurement", 
                    icon: "book" 
                  },
                  { 
                    title: "Supplier Code of Conduct", 
                    description: "Expected standards for all Big Food Supermarket suppliers", 
                    icon: "file-text" 
                  },
                  { 
                    title: "Regulatory Compliance Checklist", 
                    description: "Ensuring all procurement activities meet legal requirements", 
                    icon: "file-text" 
                  }
                ]} 
              />
            </TabsContent>
          </Tabs>
        </div>
        
        <DialogFooter className="flex gap-2 items-center justify-between mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Dismiss
          </Button>
          <p className="text-sm text-gray-500 italic">
            You can access this documentation anytime from the help menu
          </p>
          <Button onClick={() => onOpenChange(false)}>
            Get Started
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingDialog;
