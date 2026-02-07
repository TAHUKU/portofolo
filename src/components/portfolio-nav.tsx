'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  User,
  Briefcase,
  FileText,
  Mail,
  Menu,
  X,
  Moon,
  Sun,
  Github,
  Linkedin,
  Twitter,
  Code2,
  Award,
  Target,
  MessageSquare,
  Download,
  Settings,
  ChevronDown,
  ChevronRight,
  Star,
  TrendingUp,
  Calendar,
  FolderKanban,
  Sparkles,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useTheme } from 'next-themes'
import { useIsMobile } from '@/hooks/use-mobile'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

interface NavItem {
  name: string
  icon: React.ElementType
  href: string
  description?: string
  badge?: string | number
  external?: boolean
}

interface NavGroup {
  name: string
  items: NavItem[]
  defaultOpen?: boolean
}

const navGroups: NavGroup[] = [
  {
    name: 'Main',
    items: [
      { name: 'Dashboard', icon: LayoutDashboard, href: '#dashboard', description: 'Overview & stats' },
      { name: 'Profile', icon: User, href: '#profile', description: 'About me' },
    ],
  },
  {
    name: 'Portfolio',
    items: [
      { name: 'Projects', icon: Briefcase, href: '#projects', description: 'My work', badge: 42 },
      { name: 'Skills', icon: Code2, href: '#skills', description: 'Technical skills' },
      { name: 'Experience', icon: Award, href: '#experience', description: 'Work history' },
    ],
    defaultOpen: true,
  },
  {
    name: 'Content',
    items: [
      { name: 'Blog', icon: FileText, href: '#blog', description: 'Articles & posts', badge: 3 },
      { name: 'Services', icon: Target, href: '#services', description: 'What I offer' },
      { name: 'Testimonials', icon: MessageSquare, href: '#testimonials', description: 'Client reviews', badge: 5 },
    ],
    defaultOpen: true,
  },
  {
    name: 'More',
    items: [
      { name: 'Contact', icon: Mail, href: '#contact', description: 'Get in touch' },
      { name: 'Downloads', icon: Download, href: '#downloads', description: 'Resume & CV' },
      { name: 'Settings', icon: Settings, href: '#settings', description: 'Preferences' },
    ],
  },
]

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
]

interface NavContentProps {
  activeSection: string
  scrollToSection: (href: string) => void
  theme: string | undefined
  setTheme: (theme: 'light' | 'dark' | 'system') => void
}

function NavContent({ activeSection, scrollToSection, theme, setTheme }: NavContentProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-6 border-b bg-gradient-to-r from-violet-500/5 to-purple-600/5">
        <motion.div
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-violet-500/30"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          P
        </motion.div>
        <div>
          <h2 className="font-bold text-lg">Portfolio</h2>
          <p className="text-xs text-muted-foreground">Creative Developer</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-2">
        {navGroups.map((group, groupIndex) => (
          <Collapsible key={group.name} defaultOpen={group.defaultOpen} className="group">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between px-3 py-2 h-auto hover:bg-accent/50"
              >
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {group.name}
                </span>
                <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 mt-1">
              {group.items.map((item, index) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.replace('#', '')
                const sectionId = item.href.replace('#', '')

                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 relative
                      ${isActive
                        ? 'bg-gradient-to-r from-violet-500/20 to-purple-600/20 text-violet-700 dark:text-violet-400 font-medium'
                        : 'hover:bg-accent hover:text-accent-foreground text-muted-foreground'
                      }
                    `}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (groupIndex * 0.1) + (index * 0.05) }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-violet-600 dark:text-violet-400' : ''}`} />
                    <span className="text-sm truncate">{item.name}</span>

                    {item.badge && (
                      <Badge
                        variant={isActive ? 'default' : 'secondary'}
                        className="ml-auto text-xs px-2 py-0.5 h-5"
                      >
                        {item.badge}
                      </Badge>
                    )}

                    {isActive && (
                      <motion.div
                        className="absolute right-2 w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400"
                        layoutId={`activeIndicator-${sectionId}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </nav>

      {/* Footer Actions */}
      <div className="p-4 border-t space-y-4 bg-gradient-to-b from-background to-muted/20">
        {/* Theme Toggle */}
        <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-amber-500" />
            <Moon className="w-4 h-4 text-violet-500" />
            <span className="text-xs font-medium ml-1">Theme</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="h-7 px-2 text-xs"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </Button>
        </div>

        {/* Social Links */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground px-1">Connect</p>
          <div className="grid grid-cols-3 gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Button
                  key={social.name}
                  variant="outline"
                  size="sm"
                  asChild
                  className="h-9 hover:bg-violet-500/10 hover:border-violet-500/50 hover:text-violet-600 transition-all"
                >
                  <Link href={social.href} target="_blank" rel="noopener noreferrer" title={social.name}>
                    <Icon className="w-4 h-4" />
                  </Link>
                </Button>
              )
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <TrendingUp className="w-3 h-3 text-green-500" />
            <span>24.5K Views</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Star className="w-3 h-3 text-yellow-500" />
            <span>4.9 Rating</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PortfolioNav() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState('dashboard')
  const isMobile = useIsMobile()
  const pathname = usePathname()

  // Get all sections from nav groups
  const allSections = navGroups.flatMap(group =>
    group.items.map(item => item.href.replace('#', ''))
  )

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of allSections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [allSections])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) {
    return null
  }

  if (isMobile) {
    return (
      <>
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-violet-500/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                P
              </motion.div>
              <div>
                <h2 className="font-bold text-base">Portfolio</h2>
                <p className="text-xs text-muted-foreground">Creative Developer</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="relative overflow-hidden"
              >
                <Sun className="w-5 h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute w-5 h-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-80">
                  <SheetHeader className="sr-only">
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </SheetHeader>
                  <NavContent
                    activeSection={activeSection}
                    scrollToSection={scrollToSection}
                    theme={theme}
                    setTheme={setTheme}
                  />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
      </>
    )
  }

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-72 bg-background border-r z-50 shadow-xl">
      <NavContent
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        theme={theme}
        setTheme={setTheme}
      />
    </aside>
  )
}
