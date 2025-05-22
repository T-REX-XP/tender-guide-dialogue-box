
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DocumentationLinks from '@/components/DocumentationLinks';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Main content */}
      <main className="container mx-auto p-6 max-w-7xl">
        {/* Documentation section with background image */}
        <div className="relative rounded-lg overflow-hidden">
          {/* Background with overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700/95 to-blue-900/95"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Procurement Documentation
            </h2>
            <p className="text-lg text-blue-100 mb-6">
              Your comprehensive resources for managing procurement processes at Big Food Supermarket Network
            </p>
            
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
                
                <div className="bg-white/95 rounded-md p-6">
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
              
              <div className="flex flex-col sm:flex-row gap-2 items-center justify-between mt-6 text-white">
                <p className="text-sm text-blue-100 italic">
                  Access this documentation anytime from the help menu
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
