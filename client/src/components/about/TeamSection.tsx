import { useQuery } from "@tanstack/react-query";
import { TeamMemberType } from "@/lib/types";
import { motion } from "framer-motion";

const TeamSection = () => {
  const { data: teamMembers, isLoading, error } = useQuery<TeamMemberType[]>({
    queryKey: ["/api/team"],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The dedicated people behind BraveShop who work tirelessly to bring you the best products and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md animate-pulse">
                <div className="bg-gray-200 h-64 w-full"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-1/2 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !teamMembers) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-red-500">Failed to load team information. Please try again later.</p>
        </div>
      </section>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The dedicated people behind BraveShop who work tirelessly to bring you the best products and service.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {teamMembers.map((member) => {
            let social = {};
            try {
              social = JSON.parse(member.social);
            } catch (e) {
              social = {};
            }

            return (
              <motion.div 
                key={member.id} 
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
                variants={item}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    {social.twitter && (
                      <a href={social.twitter} className="text-gray-600 hover:text-primary transition-all">
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {social.linkedin && (
                      <a href={social.linkedin} className="text-gray-600 hover:text-primary transition-all">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    )}
                    {social.instagram && (
                      <a href={social.instagram} className="text-gray-600 hover:text-primary transition-all">
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
