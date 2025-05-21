import { Card } from "@/components/ui/card";

interface ContentCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkText: string;
  linkUrl: string;
}

export function ContentCard({ title, description, imageUrl, linkText, linkUrl }: ContentCardProps) {
  return (
    <Card className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-dark mb-2">{title}</h3>
        <p className="text-dark-gray text-sm">{description}</p>
        <a 
          href={linkUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-3 inline-block text-primary font-medium hover:text-blue-700"
        >
          {linkText} <i className="fas fa-arrow-right ml-1"></i>
        </a>
      </div>
    </Card>
  );
}
