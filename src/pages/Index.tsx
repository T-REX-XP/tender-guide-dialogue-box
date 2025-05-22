
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DocumentationLinks from '@/components/DocumentationLinks';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Horizontal top image */}
      <div className="w-full h-40 md:h-64 bg-cover bg-center" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80')"
      }}>
        <div className="w-full h-full flex items-end bg-gradient-to-t from-blue-500/80 to-transparent">
          <div className="p-6 md:p-8 text-white">
            <h2 className="text-2xl font-bold">Procurement Documentation</h2>
            <p className="text-lg">Resources for Big Food Supermarket Network</p>
          </div>
        </div>
      </div>

      {/* Main content - full width */}
      <main className="w-full">
        {/* Documentation section */}
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-4">
              <p className="text-gray-700">
                This portal provides all the tools and resources you need to manage the procurement
                process efficiently. Browse the documentation below to get started.
              </p>
            </div>
            
            <Tabs defaultValue="guides" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4 bg-white border-b">
                <TabsTrigger value="guides" className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600">
                  Getting Started
                </TabsTrigger>
                <TabsTrigger value="tenders" className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600">
                  Tender Process
                </TabsTrigger>
                <TabsTrigger value="contracts" className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600">
                  Contracts
                </TabsTrigger>
                <TabsTrigger value="compliance" className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600">
                  Compliance
                </TabsTrigger>
              </TabsList>
              
              <div className="bg-white rounded-md p-6 shadow-sm">
                <TabsContent value="guides" className="py-2">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Getting Started Guides</h3>
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
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Tender Process Documentation</h3>
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
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Contract Management</h3>
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
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Compliance & Regulations</h3>
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
        </div>
      </main>
    </div>
  );
};

export default Index;
