import { TeamMemberCard } from './TeamMemberCard.jsx';

const teamData = [
  {
    imageUrl: "https://placehold.co/128x128/6B21A8/FFFFFF?text=SY",
    name: "Sina Yamani",
    title: "Co-Founder",
    description: "Visionary leader driving the future of decentralized AI and automation."
  },
  {
    imageUrl: "https://placehold.co/128x128/6B21A8/FFFFFF?text=JD",
    name: "Jane Doe",
    title: "Lead Protocol Engineer",
    description: "Architect of the Action Tree and the core LAM engine."
  },
  {
    imageUrl: "https://placehold.co/128x128/6B21A8/FFFFFF?text=AS",
    name: "Alex Smith",
    title: "Head of Community",
    description: "Building a global network of contributors and partners."
  },
  {
    imageUrl: "https://placehold.co/128x128/6B21A8/FFFFFF?text=EC",
    name: "Emily Carter",
    title: "Product Manager",
    description: "Designs the tools that empower users to train and deploy agents."
  },
  {
    imageUrl: "https://placehold.co/128x128/6B21A8/FFFFFF?text=MT",
    name: "Michael Turner",
    title: "Senior UX Designer",
    description: "Crafting intuitive and powerful user experiences for our applications."
  },
  {
    imageUrl: "https://placehold.co/128x128/6B21A8/FFFFFF?text=SO",
    name: "Sarah O'Connor",
    title: "DevRel & Partnerships",
    description: "Fostering relationships with developers and strategic partners."
  },
  {
    imageUrl: "https://placehold.co/128x128/6B21A8/FFFFFF?text=CB",
    name: "Chris Brown",
    title: "Data Scientist",
    description: "Analyzing workflow data to improve LAM performance and accuracy."
  },
  {
    imageUrl: "https://placehold.co/128x128/6B21A8/FFFFFF?text=LW",
    name: "Laura White",
    title: "Marketing Lead",
    description: "Telling the Action Model story to the world."
  }
];

export const TeamSection = () => {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Meet the Team</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamData.map((member, index) => (
            <TeamMemberCard
              key={index}
              imageUrl={member.imageUrl}
              name={member.name}
              title={member.title}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 