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
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-0 bg-gradient-to-br from-blue-700/95 to-blue-900/95">
        <div className="relative w-full h-full">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 z-0" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80')",
              backgroundBlendMode: "overlay"
            }}
          />
          
          {/* Content with z-index to appear above background */}
          <div className="relative z-10 p-6">
            <DialogHeader className="mb-2">
              <DialogTitle className="text-2xl font-bold text-white">
                Welcome to the Procurement Management Portal
              </DialogTitle>
              <DialogDescription className="text-lg text-blue-100">
                Your comprehensive platform for managing procurement processes at Big Food Supermarket Network
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4">
              <p className="mb-4 text-white">
                This portal provides all the tools and resources you need to manage the procurement
                process efficiently. Browse the documentation below to get started.
              </p>
              
              <Tabs defaultValue="guides" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4 bg-blue-800/50">
                  <TabsTrigger value="guides" className="text-white data-[state=active]:bg-blue-600">Getting Started</TabsTrigger>
                  <TabsTrigger value="tenders" className="text-white data-[state=active]:bg-blue-600">Tender Process</TabsTrigger>
                  <TabsTrigger value="contracts" className="text-white data-[state=active]:bg-blue-600">Contracts</TabsTrigger>
                  <TabsTrigger value="compliance" className="text-white data-[state=active]:bg-blue-600">Compliance</TabsTrigger>
                </TabsList>
                
                <div className="bg-white/95 rounded-md p-4">
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
                </div>
              </Tabs>
            </div>
            
            <DialogFooter className="flex flex-col sm:flex-row gap-2 items-center justify-between mt-6">
              <Button variant="outline" className="bg-white hover:bg-gray-100 w-full sm:w-auto" onClick={() => onOpenChange(false)}>
                Dismiss
              </Button>
              <p className="text-sm text-blue-100 italic order-first sm:order-none mb-2 sm:mb-0">
                You can access this documentation anytime from the help menu
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto" onClick={() => onOpenChange(false)}>
                Get Started
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingDialog;
