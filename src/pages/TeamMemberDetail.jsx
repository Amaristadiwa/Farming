import { useParams, Navigate } from 'react-router-dom';
import  Footer  from '../components/Footer/Footer';
import { teamMembers } from '../Data/teammember';
import { Facebook, Twitter, Instagram, Youtube, CheckCircle } from 'lucide-react';

export default function TeamMemberDetail() {
  const { id } = useParams(); 
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/60" />

        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <p className="text-yellow-400 mb-2">Team Member</p>
          <h1 className="text-5xl font-bold text-white mb-4">{member.name}</h1>
          <div className="flex items-center gap-2 text-white">
            <span className="font-semibold">AGRIMO</span>
            <span>{'>'}</span>
            <span>TEAM MEMBERS</span>
            <span>{'>'}</span>
            <span className="text-yellow-400">{member.name.toUpperCase()}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-yellow-500 text-sm font-semibold mb-2">{member.role}</p>
            <h2 className="text-4xl font-bold text-green-900 mb-6">{member.name}</h2>
            <p className="text-gray-600 mb-8">{member.description}</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="font-semibold text-green-900 w-24">Phone</span>
                <span className="text-gray-600">{member.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-green-900 w-24">Email</span>
                <span className="text-gray-600">{member.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-green-900 w-24">Experience</span>
                <span className="text-gray-600">{member.experience}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="bg-gray-100 hover:bg-yellow-400 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5 text-green-800" />
              </button>
              <button className="bg-gray-100 hover:bg-yellow-400 p-3 rounded-full transition-colors">
                <Twitter className="w-5 h-5 text-green-800" />
              </button>
              <button className="bg-gray-100 hover:bg-yellow-400 p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5 text-green-800" />
              </button>
              <button className="bg-gray-100 hover:bg-yellow-400 p-3 rounded-full transition-colors">
                <Youtube className="w-5 h-5 text-green-800" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-12 mb-12">
          <h3 className="text-3xl font-bold text-green-900 mb-6">Personal Information</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            They need solid practical knowledge to take care of plants properly and make successful decisions, covering
            all essential aspects of agriculture, including plant care, farm management, resource allocation, pest
            management, equipment maintenance, financial management, and proper safety procedures. These abilities offer
            all the skills needed to deal with farm activities efficiently and generate steady production. This approach
            offers thorough information on agricultural production, machineries, research, field of natural resource
            sustainable management of natural resources for achieving food, nutritional, environmental sustainability
            and economic benefits as well as social development in agribusiness. They employ exceptional thinking
            abilities for solving agriculture problems, keep current on innovations and utilize methods for improving
            agricultural efficiency and benefit the regional community.
          </p>
          <p className="text-gray-600 leading-relaxed">
            They offer adaptability, high nutritional value, and can yield higher yields with reduced agronomical inputs.
            As nutritional agronomy applications provide all the recommended benefits of using the recommended dose of
            chemical inputs, continued all up to obviously necessary invention in minimizes and facilitate standard
            agriculture plus provide nutritional and income security for small and marginal farmers in dry and semiarid
            semi-arid areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white rounded-3xl shadow-lg p-12">
            <h3 className="text-3xl font-bold text-green-900 mb-8">Professional Skills</h3>
            <p className="text-gray-600 mb-8">
              As an aspiring farmer, it's important to work on your skill set for this particular profession. Not only
              can improving your farmer skills help you in future interviews, but it can also help you on the job. In
              this article, we explain several job-specific skills and provide examples, then list five skills to improve
              with answers for why they matter and reference process.
            </p>

            <div className="space-y-8">
              {member.skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-green-900">{skill.name}</span>
                    <span className="font-bold text-green-900">{skill.percentage}%</span>
                  </div>
                  <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="absolute h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-12">
            <h3 className="text-3xl font-bold text-green-900 mb-8">Awards & Honors</h3>
            <p className="text-gray-600 mb-8">
              They offer adaptability, high nutritional value, and can yield higher yields with reduced agronomical inputs.
              As nutritional agronomy applications provide all the recommended benefits of using the recommended dose of
              chemical inputs, continued all up to obviously necessary invention in minimizes and facilitate standard
              agriculture plus provide nutritional and income security for small and marginal farmers in dry and semiarid
              semi-arid areas.
            </p>

            <div className="space-y-6">
              {member.awards.map((award, index) => (
                <div key={index} className="border-l-4 border-yellow-400 pl-6">
                  <p className="font-bold text-green-900 mb-1">{award.year}</p>
                  <p className="text-gray-600">{award.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-12 mb-12">
          <h3 className="text-3xl font-bold text-green-900 mb-8">Everything on our farm is grown</h3>
          <p className="text-gray-600 mb-8">
            Farmer skills refer to the expertise, talents, or abilities you have that help you perform a farmer's daily
            duties. Key farmer skills include problem-solving, interpersonal, farm management, organizational skills. You
            can use these skills in many ways in your farming career. Such as on preparing or planting fields, tending
            crops and repairing machinery. Having these skills can help you become productive and successful in many
            different ways.
          </p>

          <div className="space-y-4">
            {member.farmingPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-800 rounded-3xl shadow-lg p-12">
          <h3 className="text-3xl font-bold text-white mb-8">Send a message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-yellow-400"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-yellow-400"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-yellow-400"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-6 py-4 rounded-3xl border-2 border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-yellow-400 resize-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-green-800 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              Submit Now →
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
