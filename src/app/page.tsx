'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'
import { PortfolioNav } from '@/components/portfolio-nav'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import {
  Users,
  Eye,
  Star,
  TrendingUp,
  Code2,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Palette,
  Zap,
  Calendar,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Download,
  Target,
  Sparkles,
  FolderKanban,
  User,
} from 'lucide-react'

export default function PortfolioPage() {
  const isMobile = useIsMobile()

  const stats = [
    { name: 'Total Views', value: '24.5K', icon: Eye, trend: '+12%', color: 'text-blue-500' },
    { name: 'Projects', value: '42', icon: BriefcaseIcon, trend: '+3', color: 'text-green-500' },
    { name: 'Clients', value: '28', icon: Users, trend: '+5', color: 'text-purple-500' },
    { name: 'Rating', value: '4.9', icon: Star, trend: 'Excellent', color: 'text-yellow-500' },
  ]

  const skills = [
    { name: 'React', level: 95, icon: Code2 },
    { name: 'TypeScript', level: 90, icon: Code2 },
    { name: 'Node.js', level: 85, icon: Database },
    { name: 'Cloud Services', level: 80, icon: Cloud },
    { name: 'Mobile Dev', level: 75, icon: Smartphone },
    { name: 'UI/UX Design', level: 85, icon: Palette },
  ]

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovation Co.',
      period: '2022 - Present',
      description: 'Leading frontend development team, implementing modern React architectures and improving performance by 40%.',
      tags: ['React', 'TypeScript', 'Next.js', 'Team Lead'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Inc.',
      period: '2020 - 2022',
      description: 'Developed full-stack applications using MERN stack, handled database optimization, and implemented CI/CD pipelines.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2019 - 2020',
      description: 'Started career building responsive web applications and learning modern development practices.',
      tags: ['JavaScript', 'HTML/CSS', 'Git'],
    },
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration and inventory management.',
      image: '',
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      status: 'completed',
      views: '2.5K',
      likes: '342',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      image: '',
      tags: ['Next.js', 'Socket.io', 'PostgreSQL'],
      status: 'completed',
      views: '1.8K',
      likes: '256',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Business intelligence dashboard with interactive charts and data visualization.',
      image: '',
      tags: ['React', 'D3.js', 'Python', 'AWS'],
      status: 'completed',
      views: '3.2K',
      likes: '487',
    },
    {
      title: 'Social Media App',
      description: 'Modern social networking platform with real-time messaging and content sharing.',
      image: '',
      tags: ['React Native', 'Firebase', 'Redux'],
      status: 'in-progress',
      views: '1.2K',
      likes: '189',
    },
    {
      title: 'AI Chatbot',
      description: 'Intelligent chatbot powered by machine learning for customer support automation.',
      image: '',
      tags: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
      status: 'in-progress',
      views: '2.1K',
      likes: '312',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website with modern design and smooth animations.',
      image: '',
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
      status: 'completed',
      views: '4.5K',
      likes: '523',
    },
  ]

  const blogPosts = [
    {
      title: 'Building Modern Web Applications with Next.js 14',
      excerpt: 'Explore the latest features and best practices for building performant web applications.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['Next.js', 'React', 'Tutorial'],
    },
    {
      title: 'Mastering TypeScript: Advanced Patterns',
      excerpt: 'Learn advanced TypeScript patterns and techniques for writing better code.',
      date: '2024-01-10',
      readTime: '12 min read',
      tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    },
    {
      title: 'UI/UX Design Principles for Developers',
      excerpt: 'Essential design principles every developer should know for creating better interfaces.',
      date: '2024-01-05',
      readTime: '6 min read',
      tags: ['Design', 'UI/UX', 'Frontend'],
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Exceptional work! The attention to detail and technical expertise exceeded our expectations.',
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataFlow',
      content: 'Professional, creative, and delivers on time. A true asset to any project.',
      avatar: 'MC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, InnovateCo',
      content: 'Transformed our vision into reality with outstanding technical implementation.',
      avatar: 'ER',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <PortfolioNav />

      <main
        className={`transition-all duration-300 ${
          isMobile ? 'ml-0 pt-20' : 'ml-72'
        }`}
      >
        {/* Dashboard Section */}
        <section id="dashboard" className="p-6 md:p-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-2">Welcome Back! 👋</h1>
            <p className="text-muted-foreground">Here's what's happening with your portfolio today.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="overflow-hidden border-2 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {stat.name}
                      </CardTitle>
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                        {stat.trend}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest portfolio interactions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { action: 'Project viewed', project: 'E-Commerce Platform', time: '2 hours ago' },
                  { action: 'Contact form submitted', project: 'New inquiry', time: '5 hours ago' },
                  { action: 'Blog post liked', project: 'Next.js Tutorial', time: '1 day ago' },
                  { action: 'Profile viewed', project: 'LinkedIn', time: '2 days ago' },
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.project}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-between group"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-between group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Contact Me</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-between group"
                  onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Read Blog Posts</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Profile Section */}
        <section id="profile" className="p-6 md:p-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">Profile</h2>
            <p className="text-muted-foreground">About me and my professional journey</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            <Card className="lg:col-span-1">
              <CardHeader className="text-center">
                <motion.div
                  className="mx-auto mb-4"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Avatar className="w-32 h-32 border-4 border-primary">
                    <AvatarImage src="" alt="Profile" />
                    <AvatarFallback className="text-3xl bg-gradient-to-br from-violet-500 to-purple-600 text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
                <CardTitle className="text-2xl">John Doe</CardTitle>
                <CardDescription className="text-base">Creative Full Stack Developer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>john@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <span>johndoe.dev</span>
                </div>

                <div className="pt-4 flex gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com" target="_blank">
                      <Github className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://linkedin.com" target="_blank">
                      <Linkedin className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://twitter.com" target="_blank">
                      <Twitter className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Passionate full-stack developer with 5+ years of experience building modern web applications.
                    I specialize in creating exceptional digital experiences that combine beautiful design with
                    powerful functionality. My expertise spans across frontend and backend technologies,
                    with a strong focus on React, Node.js, and cloud services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    I believe in writing clean, maintainable code and staying up-to-date with the latest
                    industry trends. When I'm not coding, you'll find me exploring new technologies,
                    contributing to open-source projects, or sharing knowledge through blog posts and tutorials.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    Skills & Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills.map((skill, index) => {
                      const Icon = skill.icon
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4 text-primary" />
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                            />
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-base mt-1">{exp.company}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="p-6 md:p-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">Projects</h2>
            <p className="text-muted-foreground">A showcase of my best work</p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card className="h-full overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
                      <div className="h-48 bg-gradient-to-br from-violet-500/20 to-purple-600/20 flex items-center justify-center">
                        <BriefcaseIcon className="w-16 h-16 text-violet-500/50" />
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-lg line-clamp-1">{project.title}</CardTitle>
                          <Badge
                            variant={project.status === 'completed' ? 'default' : 'secondary'}
                            className="shrink-0"
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <CardDescription className="line-clamp-2">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {project.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {project.likes}
                          </span>
                          <Button size="sm" variant="ghost" className="gap-1">
                            View Details <ExternalLink className="w-3 h-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="completed" className="mt-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects
                  .filter((p) => p.status === 'completed')
                  .map((project, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Card className="h-full overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
                        <div className="h-48 bg-gradient-to-br from-violet-500/20 to-purple-600/20 flex items-center justify-center">
                          <BriefcaseIcon className="w-16 h-16 text-violet-500/50" />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                          <CardDescription className="line-clamp-2">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button className="w-full" variant="outline">
                            View Project
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="in-progress" className="mt-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects
                  .filter((p) => p.status === 'in-progress')
                  .map((project, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Card className="h-full overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
                        <div className="h-48 bg-gradient-to-br from-violet-500/20 to-purple-600/20 flex items-center justify-center">
                          <BriefcaseIcon className="w-16 h-16 text-violet-500/50" />
                        </div>
                        <CardHeader>
                          <div className="flex items-start justify-between gap-2">
                            <CardTitle className="text-lg line-clamp-1">{project.title}</CardTitle>
                            <Badge variant="secondary">In Progress</Badge>
                          </div>
                          <CardDescription className="line-clamp-2">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button className="w-full" variant="outline">
                            View Progress
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Blog Section */}
        <section id="blog" className="p-6 md:p-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">Blog</h2>
            <p className="text-muted-foreground">Thoughts, tutorials, and insights</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="h-full overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-violet-500/20 to-purple-600/20 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-violet-500/50" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full" variant="outline">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="p-6 md:p-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">What People Say</h2>
            <p className="text-muted-foreground">Feedback from clients and colleagues</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-violet-500 to-purple-600 text-white">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="p-6 md:p-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">Skills</h2>
            <p className="text-muted-foreground">Technical expertise and technologies I work with</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'Frontend',
                skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
                icon: Code2,
                color: 'text-blue-500',
              },
              {
                category: 'Backend',
                skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
                icon: Database,
                color: 'text-green-500',
              },
              {
                category: 'Tools',
                skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Testing'],
                icon: Sparkles,
                color: 'text-purple-500',
              },
            ].map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-${category.color.split('-')[1]}-500/10`}>
                          <Icon className={`w-6 h-6 ${category.color}`} />
                        </div>
                        <CardTitle>{category.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="p-6 md:p-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">Experience</h2>
            <p className="text-muted-foreground">My professional journey and career highlights</p>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="p-6 md:p-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">Services</h2>
            <p className="text-muted-foreground">What I can do for you</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern technologies',
                icon: Globe,
                price: 'Starting from $1,000',
              },
              {
                title: 'Mobile App Development',
                description: 'Cross-platform mobile applications for iOS and Android',
                icon: Smartphone,
                price: 'Starting from $2,500',
              },
              {
                title: 'UI/UX Design',
                description: 'User-centered design that looks great and works perfectly',
                icon: Palette,
                price: 'Starting from $800',
              },
              {
                title: 'Backend Development',
                description: 'Scalable server-side solutions with APIs and databases',
                icon: Database,
                price: 'Starting from $1,200',
              },
              {
                title: 'Consulting',
                description: 'Technical guidance and architecture planning for your projects',
                icon: Target,
                price: '$150/hour',
              },
              {
                title: 'Maintenance & Support',
                description: 'Ongoing support and updates to keep your project running smoothly',
                icon: Zap,
                price: '$500/month',
              },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold text-primary">{service.price}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </section>

        {/* Downloads Section */}
        <section id="downloads" className="p-6 md:p-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">Downloads</h2>
            <p className="text-muted-foreground">Resume, CV, and other resources</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Resume',
                description: 'My professional resume in PDF format',
                icon: FileText,
                size: '245 KB',
                format: 'PDF',
              },
              {
                title: 'CV',
                description: 'Detailed curriculum vitae with full work history',
                icon: FileText,
                size: '312 KB',
                format: 'PDF',
              },
              {
                title: 'Portfolio',
                description: 'Complete portfolio in PDF format',
                icon: BriefcaseIcon,
                size: '1.2 MB',
                format: 'PDF',
              },
              {
                title: 'Contact vCard',
                description: 'Contact information for your address book',
                icon: User,
                size: '2 KB',
                format: 'VCF',
              },
            ].map((download, index) => {
              const Icon = download.icon
              return (
                <motion.div
                  key={download.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{download.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{download.description}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                            <span>{download.size}</span>
                            <span>•</span>
                            <span>{download.format}</span>
                          </div>
                          <Button size="sm" className="gap-2">
                            <Download /> Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Settings Section */}
        <section id="settings" className="p-6 md:p-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">Settings</h2>
            <p className="text-muted-foreground">Customize your portfolio experience</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Appearance
                </CardTitle>
                <CardDescription>Customize the look and feel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-muted-foreground">Use dark theme for the portfolio</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Toggle
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Animations</p>
                    <p className="text-sm text-muted-foreground">Enable page animations</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Enabled
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Notifications
                </CardTitle>
                <CardDescription>Manage notification preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Updates</p>
                    <p className="text-sm text-muted-foreground">Receive email notifications</p>
                  </div>
                  <Button variant="outline" size="sm">
                    On
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Newsletter</p>
                    <p className="text-sm text-muted-foreground">Subscribe to updates</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Off
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="p-6 md:p-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
            <p className="text-muted-foreground">Have a project in mind? Let's work together!</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <Button className="w-full" size="lg">
                  Send Message <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">john@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    <Button variant="outline" size="lg" className="flex flex-col gap-2 h-auto py-4">
                      <Github className="w-6 h-6" />
                      <span className="text-xs">GitHub</span>
                    </Button>
                    <Button variant="outline" size="lg" className="flex flex-col gap-2 h-auto py-4">
                      <Linkedin className="w-6 h-6" />
                      <span className="text-xs">LinkedIn</span>
                    </Button>
                    <Button variant="outline" size="lg" className="flex flex-col gap-2 h-auto py-4">
                      <Twitter className="w-6 h-6" />
                      <span className="text-xs">Twitter</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-violet-500/10 to-purple-600/10 border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    Available for Work
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    I'm currently available for freelance projects and full-time opportunities.
                    Let's create something amazing together!
                  </p>
                  <Button className="w-full">
                    Download CV <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="p-6 md:p-8 border-t mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                P
              </div>
              <p className="text-sm text-muted-foreground">
                © 2024 Portfolio. Built with ❤️ using Next.js
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

// Icons
function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

function Link({
  href,
  children,
  target,
  rel,
}: {
  href: string
  children: React.ReactNode
  target?: string
  rel?: string
}) {
  return (
    <a href={href} target={target} rel={rel} className="inline-flex">
      {children}
    </a>
  )
}
