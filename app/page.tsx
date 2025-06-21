"use client"

import { useMemo } from "react"
import Link from "next/link"
import {
  Brain,
  ArrowRight,
  PlayCircle,
  CheckCircle,
  Shield,
  Users,
  Star,
  Mic,
  Twitter,
  Sparkles,
  Rocket,
  MessageCircle,
  Code,
  Monitor,
  GitBranch,
  GitPullRequest,
  BookOpen,
  Slack,
  Github,
  Workflow,
  Bot,
  Command,
  Link2,
  Layers,
  Activity,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"

// Generate particle positions outside of render to avoid hydration issues
const generateParticles = (count: number) => {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${3 + Math.random() * 2}s`,
  }))
}

const workflowSteps = [
  {
    step: "01",
    title: "Voice Command",
    description: '"Create a PR for the login feature and update the team"',
    icon: Mic,
    color: "from-violet-600 to-purple-600",
  },
  {
    step: "02",
    title: "Git Operations",
    description: "Creates branch, commits changes, pushes to GitHub, opens PR",
    icon: GitBranch,
    color: "from-blue-600 to-cyan-600",
  },
  {
    step: "03",
    title: "Team Communication",
    description: "Posts update to Slack with PR link and context",
    icon: Slack,
    color: "from-emerald-600 to-teal-600",
  },
  {
    step: "04",
    title: "Documentation",
    description: "Automatically saves all details to Notion workspace",
    icon: BookOpen,
    color: "from-orange-600 to-red-600",
  },
]

const featureCategories = [
  {
    id: "git-workflow",
    name: "Git Workflow Automation",
    version: "v4.5",
    model: "DevOps AI",
    icon: GitPullRequest,
    color: "from-violet-600 to-purple-600",
    description: "Complete Git operations from branch creation to PR merge",
    popularity: 98,
    status: "online",
    features: ["Auto PR Creation", "Branch Management", "Merge Automation", "Conflict Resolution"],
  },
  {
    id: "team-communication",
    name: "Smart Team Updates",
    version: "v3.8",
    model: "Comm Pro",
    icon: Slack,
    color: "from-blue-600 to-cyan-600",
    description: "Intelligent team communication across all platforms",
    popularity: 95,
    status: "online",
    features: ["Slack Integration", "Discord Updates", "Teams Messages", "Context-Aware Posts"],
  },
  {
    id: "documentation",
    name: "Auto Documentation",
    version: "v2.9",
    model: "Doc Suite",
    icon: BookOpen,
    color: "from-emerald-600 to-teal-600",
    description: "Seamless documentation in Notion, Confluence, and more",
    popularity: 92,
    status: "online",
    features: ["Notion Integration", "Auto-Sync", "Template Generation", "Version Tracking"],
  },
  {
    id: "code-review",
    name: "AI Code Review",
    version: "v1.7",
    model: "Review AI",
    icon: Code,
    color: "from-pink-600 to-rose-600",
    description: "Intelligent code analysis and review suggestions",
    popularity: 89,
    status: "beta",
    features: ["Security Scan", "Performance Check", "Best Practices", "Auto-Fix Suggestions"],
  },
  {
    id: "project-management",
    name: "Project Sync",
    version: "v2.3",
    model: "PM Suite",
    icon: Workflow,
    color: "from-indigo-600 to-purple-600",
    description: "Sync with Jira, Linear, and project management tools",
    popularity: 85,
    status: "online",
    features: ["Ticket Creation", "Status Updates", "Sprint Planning", "Burndown Charts"],
  },
  {
    id: "deployment",
    name: "Deploy Assistant",
    version: "v3.2",
    model: "Deploy AI",
    icon: Rocket,
    color: "from-orange-600 to-red-600",
    description: "Automated deployment and infrastructure management",
    popularity: 87,
    status: "online",
    features: ["CI/CD Pipeline", "Environment Setup", "Rollback Support", "Health Monitoring"],
  },
]

const integrations = [
  { name: "GitHub", icon: Github, description: "Complete Git workflow automation" },
  { name: "Slack", icon: Slack, description: "Team communication and updates" },
  { name: "Notion", icon: BookOpen, description: "Documentation and knowledge base" },
  { name: "Discord", icon: MessageCircle, description: "Community and team chat" },
  { name: "Jira", icon: Workflow, description: "Project management and tracking" },
  { name: "Linear", icon: Layers, description: "Issue tracking and planning" },
]

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case "online":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20"
    case "beta":
      return "bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/20"
    case "premium":
      return "bg-violet-500/10 text-violet-400 border-violet-500/20 hover:bg-violet-500/20"
    default:
      return "bg-slate-500/10 text-slate-400 border-slate-500/20 hover:bg-slate-500/20"
  }
}

export default function LandingPage() {
  // Generate particles once with useMemo to avoid hydration issues
  const particles = useMemo(() => generateParticles(50), [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-x-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-900/40 to-slate-950/80"></div>

        {/* Secondary gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Floating Particles */}
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-violet-400/20 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}

        {/* Animated orbs */}
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-4 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <Navbar isAuthenticated={false} />

        {/* Hero Section */}
        <section className="relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32">
            <div className="text-center max-w-5xl mx-auto">
              {/* Logo/Icon */}
              <div className="flex items-center justify-center mb-8 sm:mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-emerald-600 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
                  <div className="relative p-4 sm:p-6 rounded-3xl bg-gradient-to-r from-violet-600/20 to-emerald-600/20 backdrop-blur-sm border border-violet-500/20 shadow-2xl">
                    <Brain className="w-12 h-12 sm:w-16 sm:h-16 text-violet-400" />
                  </div>
                </div>
              </div>

              {/* Main heading */}
              <div className="space-y-6 mb-8 sm:mb-12">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight bg-gradient-to-r from-violet-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  Vocalis
                </h1>
                <div className="space-y-2 sm:space-y-4">
                  <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-semibold">
                    Complete DevOps Workflow Automation
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                    One voice command to handle Git PR, team updates, and documentation • From code to deployment
                  </p>
                </div>
              </div>

              {/* Demo Command */}
              <div className="mb-8 sm:mb-12">
                <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-xl p-6 rounded-2xl max-w-3xl mx-auto">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-violet-600/20 to-emerald-600/20">
                      <Command className="w-5 h-5 text-violet-400" />
                    </div>
                    <span className="text-slate-300 font-medium">Try saying:</span>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-600/30">
                    <p className="text-lg sm:text-xl text-slate-200 italic">
                      "Create a PR for the authentication feature, notify the team in Slack, and document it in Notion"
                    </p>
                  </div>
                  <div className="flex items-center justify-center mt-4 space-x-2">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-slate-400">AI Processing</span>
                    </div>
                    <div className="w-px h-4 bg-slate-600"></div>
                    <span className="text-xs text-slate-400">~3 seconds execution</span>
                  </div>
                </Card>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
                <Link href="/auth" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-emerald-600 hover:from-violet-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-violet-500/25 border-0"
                  >
                    Start Automating Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-slate-800/50 border-slate-700/50 text-slate-200 hover:bg-slate-700/50 hover:border-slate-600/50 px-8 py-4 text-base sm:text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  See It In Action
                </Button>
              </div>

              {/* Stats Grid - Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
                {[
                  { value: "15+", label: "Tool Integrations", color: "text-violet-400" },
                  { value: "3sec", label: "Avg. Execution", color: "text-emerald-400" },
                  { value: "95%", label: "Time Saved", color: "text-cyan-400" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
                  >
                    <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-sm sm:text-base text-slate-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-slate-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/10 to-emerald-600/10 border border-violet-500/20 mb-6">
                <Workflow className="w-4 h-4 text-violet-400 mr-2" />
                <span className="text-sm font-medium text-violet-300">Complete Workflow Automation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-6 leading-tight">
                From Code to Deployment in{" "}
                <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
                  One Command
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-4xl mx-auto">
                Watch how Vocalis orchestrates your entire development workflow with a single voice command. No more
                switching between tools, no more manual processes.
              </p>
            </div>

            {/* Workflow Steps */}
            <div className="grid lg:grid-cols-4 gap-8 mb-16">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-xl p-6 rounded-2xl hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${step.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-violet-500/10 text-violet-400 border-violet-500/20 text-xs"
                      >
                        {step.step}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 mb-3">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </Card>

                  {/* Connector Arrow */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-slate-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/10 to-emerald-600/10 border border-violet-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-violet-400 mr-2" />
                <span className="text-sm font-medium text-violet-300">AI-Powered DevOps</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-6 leading-tight">
                Every Development Tool{" "}
                <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
                  In Your Voice
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-4xl mx-auto">
                Connect all your development tools with intelligent voice commands. From Git operations to team
                communication, from documentation to deployment - everything automated and synchronized.
              </p>
            </div>

            {/* Core Features Grid */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
              {[
                {
                  icon: GitPullRequest,
                  title: "Complete Git Automation",
                  description: "Branch creation, commits, PRs, merges, and conflict resolution with context-aware AI",
                  features: [
                    "Auto PR Creation",
                    "Smart Commit Messages",
                    "Merge Conflict Resolution",
                    "Branch Strategy",
                  ],
                  gradient: "from-violet-600/30 to-purple-600/30",
                  iconColor: "text-violet-300",
                  borderColor: "border-violet-400/40",
                  bgColor: "bg-slate-800/70",
                },
                {
                  icon: Link2,
                  title: "Universal Team Sync",
                  description: "Intelligent updates across Slack, Discord, Teams with context and rich formatting",
                  features: [
                    "Smart Notifications",
                    "Context-Aware Messages",
                    "Rich Link Previews",
                    "Thread Management",
                  ],
                  gradient: "from-emerald-600/30 to-teal-600/30",
                  iconColor: "text-emerald-300",
                  borderColor: "border-emerald-400/40",
                  bgColor: "bg-slate-800/70",
                },
                {
                  icon: Bot,
                  title: "Auto Documentation",
                  description:
                    "Real-time documentation sync with Notion, Confluence, and wikis with AI-generated content",
                  features: ["Notion Integration", "Auto-Generated Docs", "Version Control", "Template System"],
                  gradient: "from-cyan-600/30 to-blue-600/30",
                  iconColor: "text-cyan-300",
                  borderColor: "border-cyan-400/40",
                  bgColor: "bg-slate-800/70",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className={`${feature.bgColor} border-2 ${feature.borderColor} backdrop-blur-xl p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-500 group shadow-2xl hover:shadow-violet-500/25 relative overflow-hidden`}
                >
                  {/* Enhanced Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl border border-white/10`}
                    >
                      <feature.icon className={`w-8 h-8 text-white drop-shadow-lg`} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 drop-shadow-sm">{feature.title}</h3>
                    <p className="text-slate-200 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm sm:text-base text-slate-100">
                          <CheckCircle className="w-4 h-4 text-emerald-300 mr-3 flex-shrink-0 drop-shadow-sm" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>

            {/* Integrations Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">Seamless Integrations</h3>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                  Connect with all your favorite development and productivity tools
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {integrations.map((integration, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/30 border-slate-700/30 backdrop-blur-xl p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group text-center"
                  >
                    <integration.icon className="w-8 h-8 text-slate-400 group-hover:text-slate-200 mx-auto mb-3 transition-colors" />
                    <h4 className="font-medium text-slate-200 text-sm mb-1">{integration.name}</h4>
                    <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                      {integration.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-slate-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600/10 to-teal-600/10 border border-emerald-500/20 mb-6">
                  <Shield className="w-4 h-4 text-emerald-400 mr-2" />
                  <span className="text-sm font-medium text-emerald-300">Enterprise Ready</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-8 leading-tight">
                  Why DevOps Teams Choose{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
                    Vocalis?
                  </span>
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      icon: Activity,
                      title: "95% Faster Workflows",
                      description: "Reduce manual DevOps tasks from hours to seconds with intelligent automation",
                      color: "from-emerald-600/20 to-teal-600/20",
                      iconColor: "text-emerald-400",
                    },
                    {
                      icon: Shield,
                      title: "Enterprise Security",
                      description: "SOC 2 compliance, encrypted communications, and secure API integrations",
                      color: "from-blue-600/20 to-cyan-600/20",
                      iconColor: "text-blue-400",
                    },
                    {
                      icon: Users,
                      title: "Team Synchronization",
                      description: "Keep everyone in sync with intelligent updates across all communication channels",
                      color: "from-violet-600/20 to-purple-600/20",
                      iconColor: "text-violet-400",
                    },
                    {
                      icon: Star,
                      title: "24/7 DevOps Support",
                      description: "Expert support team with deep DevOps and automation expertise",
                      color: "from-amber-600/20 to-orange-600/20",
                      iconColor: "text-amber-400",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${benefit.color} group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}
                      >
                        <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-100 mb-2 text-lg sm:text-xl">{benefit.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                {/* Workflow Demo */}
                <div className="relative">
                  <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <Monitor className="w-6 h-6 text-slate-400" />
                        <span className="text-slate-300 font-medium">Live Workflow Demo</span>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                      </div>
                    </div>

                    {/* Demo Steps */}
                    <div className="space-y-4 mb-6">
                      {[
                        { icon: Mic, text: "Voice command received", status: "complete" },
                        { icon: GitBranch, text: "Creating PR...", status: "active" },
                        { icon: Slack, text: "Updating team channels", status: "pending" },
                        { icon: BookOpen, text: "Syncing to Notion", status: "pending" },
                      ].map((step, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-lg ${
                              step.status === "complete"
                                ? "bg-emerald-600/20 text-emerald-400"
                                : step.status === "active"
                                  ? "bg-violet-600/20 text-violet-400"
                                  : "bg-slate-600/20 text-slate-500"
                            }`}
                          >
                            <step.icon className="w-4 h-4" />
                          </div>
                          <span
                            className={`text-sm ${
                              step.status === "complete"
                                ? "text-emerald-300"
                                : step.status === "active"
                                  ? "text-violet-300"
                                  : "text-slate-400"
                            }`}
                          >
                            {step.text}
                          </span>
                          {step.status === "complete" && <CheckCircle className="w-4 h-4 text-emerald-400 ml-auto" />}
                          {step.status === "active" && (
                            <div className="w-4 h-4 border-2 border-violet-400 border-t-transparent rounded-full animate-spin ml-auto"></div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <Link href="/auth">
                        <Button className="w-full bg-gradient-to-r from-violet-600 to-emerald-600 hover:from-violet-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-xl">
                          Try It Now
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <Card className="relative overflow-hidden bg-slate-800/90 border-2 border-violet-400/50 backdrop-blur-xl p-8 sm:p-12 lg:p-16 rounded-3xl text-center shadow-2xl shadow-violet-500/30">
              {/* Enhanced Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-slate-800/60 to-emerald-900/40"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-emerald-600/10"></div>

              {/* Animated background elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-violet-400/40 to-transparent"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/5 via-transparent to-transparent"></div>

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500/20 via-emerald-500/20 to-violet-500/20 blur-sm"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-600/30 to-emerald-600/30 border-2 border-violet-400/40 mb-8 shadow-lg backdrop-blur-sm">
                  <Rocket className="w-5 h-5 text-violet-300 mr-2" />
                  <span className="text-sm font-semibold text-violet-200">Transform Your Development Workflow</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-violet-300 to-emerald-300 bg-clip-text text-transparent">
                    Automate Everything?
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of developers who have revolutionized their workflow with Vocalis. From Git to
                  deployment, one voice command handles it all.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-lg mx-auto">
                  <Link href="/auth" className="flex-1">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-violet-600 to-emerald-600 hover:from-violet-500 hover:to-emerald-500 text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 shadow-2xl shadow-violet-500/40 border-2 border-violet-400/20 hover:border-violet-400/40 transform hover:scale-105"
                    >
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 bg-slate-700/80 border-2 border-slate-500/60 text-slate-100 hover:bg-slate-600/80 hover:border-slate-400/80 px-8 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 shadow-xl hover:shadow-slate-500/20"
                  >
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>
              </div>

              {/* Corner accent elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-violet-400/50 rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-emerald-400/50 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-emerald-400/50 rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-violet-400/50 rounded-br-lg"></div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer id="about" className="border-t border-slate-800/50 bg-slate-900/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 max-w-7xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
              <div className="sm:col-span-2 lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-violet-600/20 to-emerald-600/20 border border-violet-500/20">
                    <Brain className="w-6 h-6 text-violet-400" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Vocalis
                  </span>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
                  The complete DevOps automation platform. Transform your development workflow with intelligent voice
                  commands that connect all your tools and processes.
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 p-2"
                  >
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 p-2"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-200 mb-4 text-lg">DevOps Tools</h3>
                <ul className="space-y-3 text-slate-400">
                  <li>
                    <Link href="#features" className="hover:text-slate-200 transition-colors duration-200">
                      Git Automation
                    </Link>
                  </li>
                  <li>
                    <Link href="/auth" className="hover:text-slate-200 transition-colors duration-200">
                      Team Integration
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-slate-200 transition-colors duration-200">
                      API Reference
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-slate-200 transition-colors duration-200">
                      Workflow Templates
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-200 mb-4 text-lg">Company</h3>
                <ul className="space-y-3 text-slate-400">
                  <li>
                    <Link href="#about" className="hover:text-slate-200 transition-colors duration-200">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-slate-200 transition-colors duration-200">
                      DevOps Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-slate-200 transition-colors duration-200">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-slate-200 transition-colors duration-200">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800/50 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <p className="text-slate-500 text-sm text-center sm:text-left">
                  © 2025 Vocalis AI. All rights reserved. • Automate your DevOps workflow.
                </p>
                <div className="flex items-center space-x-6 text-sm text-slate-500">
                  <Link href="#" className="hover:text-slate-400 transition-colors">
                    Privacy
                  </Link>
                  <Link href="#" className="hover:text-slate-400 transition-colors">
                    Terms
                  </Link>
                  <Link href="#" className="hover:text-slate-400 transition-colors">
                    Security
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
