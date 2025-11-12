'use client';

import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Music2, Heart, Star, Users } from 'lucide-react';
import { WaveformDivider } from '../components/WaveformDivider';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const teamMembers = [
    {
      name: 'Alex Rivera',
      role: 'Chief Music Critic',
      image: 'https://images.unsplash.com/photo-1650477250351-a7685316430f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nZXIlMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5MTUxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Specializing in electronic and indie music with over 10 years of experience.',
    },
    {
      name: 'Maya Chen',
      role: 'Senior Reviewer',
      image: 'https://images.unsplash.com/photo-1596651047212-a1b63eeded94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMHBlcmZvcm1lcnxlbnwxfHx8fDE3NjI4Nzk0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Hip hop and R&B expert with a passion for discovering emerging artists.',
    },
    {
      name: 'Jordan Blake',
      role: 'Music Editor',
      image: 'https://images.unsplash.com/photo-1638883296886-6095d6c869d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMGd1aXRhcnxlbnwxfHx8fDE3NjI5MTQ3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Rock and alternative music enthusiast, bringing depth to every review.',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Music',
      description: 'Every review comes from genuine love and appreciation for the art of music.',
    },
    {
      icon: Star,
      title: 'Honest Reviews',
      description: 'We provide authentic, unbiased perspectives on every album we cover.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a community of music lovers who share and discover together.',
    },
    {
      icon: Music2,
      title: 'Diverse Coverage',
      description: 'From mainstream hits to underground gems, we cover it all.',
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden py-20 lg:py-32"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full mb-6"
            >
              <span className="text-primary uppercase tracking-wider text-sm">
                About Us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Where Music Meets Honest Criticism
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              TribleTunes Reviews was founded in 2020 with a simple mission: to provide
              music lovers with thoughtful, honest, and in-depth album reviews across all
              genres. We believe every album tells a story, and we're here to help you
              discover those stories.
            </motion.p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </motion.section>

      <WaveformDivider />

      {/* Our Values */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            What We Stand For
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our core values guide every review, every recommendation, and every interaction
            with our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <WaveformDivider />

      {/* Team Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate music critics dedicated to bringing you the best reviews.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <h3
                className="text-2xl mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {member.name}
              </h3>
              <p className="text-primary mb-3">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <WaveformDivider />

      {/* CTA Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 border border-primary/30 p-12 lg:p-16 text-center"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2
              className="text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Join Our Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions or want to collaborate? We'd love to hear from you.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </motion.div>
      </section>
    </main>
  );
}
