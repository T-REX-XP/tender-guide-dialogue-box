
import React from 'react';
import { FileText, Book } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DocumentLink {
  title: string;
  description: string;
  icon: string;
}

interface DocumentationLinksProps {
  links: DocumentLink[];
}

const DocumentationLinks = ({ links }: DocumentationLinksProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'file-text':
        return <FileText className="h-5 w-5 text-blue-600" />;
      case 'book':
        return <Book className="h-5 w-5 text-blue-600" />;
      default:
        return <FileText className="h-5 w-5 text-blue-600" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {links.map((link, index) => (
        <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
          <CardContent className="p-4 flex">
            <div className="mr-4 mt-1">{getIcon(link.icon)}</div>
            <div className="flex-1">
              <h4 className="font-medium text-blue-700 mb-1">{link.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{link.description}</p>
              <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                View Document
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DocumentationLinks;
