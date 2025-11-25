import React from 'react';
import Navbar from "../components/Navbar/Navbar"; 
import Footer from '../components/Footer/Footer';
import { TeamMemberCard } from '../components/OurTeamMembers/TeamMemberCard';
import { teamMembers } from '../Data/teammember';

export default function TeamMembersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/60" />
        
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Team Member</h1>
          <div className="flex items-center gap-2 text-white">
            <span className="font-semibold">AGRIMO</span>
            <span>{'>'}</span>
            <span className="text-yellow-400">OUR TEAM MEMBER</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
