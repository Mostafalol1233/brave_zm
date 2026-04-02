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
    <Card className="bg-slate-950/80 border border-slate-700 rounded-xl shadow-xl overflow-hidden backdrop-blur-sm">
      <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
        <a 
          href={linkUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:from-red-600 hover:to-orange-600 transition-all"
        >
          {linkText} <i className="fas fa-arrow-right ml-1"></i>
        </a>
      </div>
    </Card>
  );
}
