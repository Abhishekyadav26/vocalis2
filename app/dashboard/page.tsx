"use client"

import { useState } from "react"
import {
  Mic,
  Power,
  GitPullRequest,
  Slack,
  BookOpen,
  Rocket,
  Activity,
  CheckCircle,
  Clock,
  TrendingUp,
  Zap,
  Target,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Navbar } from "@/components/navbar"

interface UserProfile {
  name: string
  avatar: string
  level: number
  tasksCompleted: number
  streak: number
  preferences: {
    theme: "dark" | "light" | "auto"
    voiceEnabled: boolean
    notifications: boolean
    language: string
    voiceSpeed: number
    autoExecute: boolean
    soundEffects: boolean
    highContrast: boolean
  }
}

interface RecentTask {
  id: string
  title: string
  type: "git" | "communication" | "documentation" | "deployment"
  status: "completed" | "in-progress" | "failed"
  timestamp: string
  duration: string
}

interface SystemStatus {
  service: string
  status: "online" | "degraded" | "offline"
  uptime: string
  responseTime: string
}

interface TodayProgress {
  tasksCompleted: number
  totalTasks: number
  timesSaved: string
  successRate: number
}

// Simplified Quick Actions - Clean, icon-based
const quickActions = [
  {
    icon: GitPullRequest,
    label: "Create PR",
    description: "Git workflow",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
  },
  {
    icon: Slack,
    label: "Team Update",
    description: "Notify channels",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: BookOpen,
    label: "Document",
    description: "Auto-sync docs",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    icon: Rocket,
    label: "Deploy",
    description: "CI/CD pipeline",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
]

// Streamlined AI Categories - Only 4 essential
const aiCategories = [
  {
    id: "git-workflow",
    name: "Git Automation",
    icon: GitPullRequest,
    color: "from-violet-500 to-purple-500",
    description: "Complete Git operations",
    status: "online" as const,
    usage: 95,
  },
  {
    id: "team-communication",
    name: "Team Sync",
    icon: Slack,
    color: "from-blue-500 to-cyan-500",
    description: "Smart team updates",
    status: "online" as const,
    usage: 88,
  },
  {
    id: "documentation",
    name: "Auto Docs",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-500",
    description: "Documentation sync",
    status: "online" as const,
    usage: 92,
  },
  {
    id: "deployment",
    name: "Deploy AI",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
    description: "Automated deployment",
    status: "online" as const,
    usage: 87,
  },
]

// Recent Tasks - Show completed work for motivation
const recentTasks: RecentTask[] = [
  {
    id: "1",
    title: "Created PR for authentication feature",
    type: "git",
    status: "completed",
    timestamp: "2 minutes ago",
    duration: "3.2s",
  },
  {
    id: "2",
    title: "Updated team in #dev-updates channel",
    type: "communication",
    status: "completed",
    timestamp: "5 minutes ago",
    duration: "1.8s",
  },
  {
    id: "3",
    title: "Synced documentation to Notion",
    type: "documentation",
    status: "completed",
    timestamp: "8 minutes ago",
    duration: "2.1s",
  },
  {
    id: "4",
    title: "Deployed to staging environment",
    type: "deployment",
    status: "completed",
    timestamp: "12 minutes ago",
    duration: "45s",
  },
  {
    id: "5",
    title: "Merged feature branch to main",
    type: "git",
    status: "completed",
    timestamp: "15 minutes ago",
    duration: "2.8s",
  },
]

// System Status - Professional monitoring
const systemStatus: SystemStatus[] = [
  {
    service: "Git Integration",
    status: "online",
    uptime: "99.9%",
    responseTime: "120ms",
  },
  {
    service: "Team Communication",
    status: "online",
    uptime: "99.8%",
    responseTime: "85ms",
  },
  {
    service: "Documentation Sync",
    status: "online",
    uptime: "99.7%",
    responseTime: "200ms",
  },
  {
    service: "Deployment Pipeline",
    status: "degraded",
    uptime: "98.5%",
    responseTime: "350ms",
  },
]

export default function DashboardPage() {
  const [isActive, setIsActive] = useState(true)
  const [status, setStatus] = useState<"idle" | "listening" | "processing" | "ready">("idle")
  const [isListening, setIsListening] = useState(false)

  const [userProfile] = useState<UserProfile>({
    name: "Alex Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    level: 12,
    tasksCompleted: 247,
    streak: 15,
    preferences: {
      theme: "dark",
      voiceEnabled: true,
      notifications: true,
      language: "en",
      voiceSpeed: 1,
      autoExecute: false,
      soundEffects: true,
      highContrast: false,
    },
  })

  // Today's Progress - Focus on daily productivity metrics
  const [todayProgress] = useState<TodayProgress>({
    tasksCompleted: 12,
    totalTasks: 15,
    timesSaved: "2.5h",
    successRate: 94,
  })

  const handlePowerToggle = () => {
    setIsActive(!isActive)
    if (!isActive) {
      setStatus("idle")
    } else {
      setStatus("idle")
    }
  }

  const handleVoiceToggle = () => {
    setIsListening(!isListening)
    if (!isListening) {
      setStatus("listening")
    } else {
      setStatus("idle")
    }
  }

  const getStatusText = () => {
    if (!isActive) return "Assistant is offline - Activate to begin"

    switch (status) {
      case "listening":
        return "I'm listening... speak naturally"
      case "processing":
        return "Processing your request with AI..."
      case "ready":
        return "Task completed successfully!"
      default:
        return "Ready to assist with DevOps workflows"
    }
  }

  const getStatusColor = () => {
    if (!isActive) return "text-gray-500"

    switch (status) {
      case "listening":
        return "text-emerald-400"
      case "processing":
        return "text-yellow-400"
      case "ready":
        return "text-green-400"
      default:
        return "text-emerald-400"
    }
  }

  const getTaskIcon = (type: string) => {
    switch (type) {
      case "git":
        return GitPullRequest
      case "communication":
        return Slack
      case "documentation":
        return BookOpen
      case "deployment":
        return Rocket
      default:
        return Activity
    }
  }

  const getTaskColor = (type: string) => {
    switch (type) {
      case "git":
        return "text-violet-400"
      case "communication":
        return "text-blue-400"
      case "documentation":
        return "text-emerald-400"
      case "deployment":
        return "text-orange-400"
      default:
        return "text-gray-400"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "online":
        return <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
      case "degraded":
        return <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
      case "offline":
        return <div className="w-2 h-2 bg-red-400 rounded-full"></div>
      default:
        return <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
      case "degraded":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "offline":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-black/40 to-black/80"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>        
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <Navbar isAuthenticated={true} userProfile={userProfile} showSystemStatus={true} />

        <div className="container mx-auto px-4 py-6 max-w-7xl">
          {/* Power Control & Voice Interface - Clean and Professional */}
          <div className="flex justify-center mb-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-3xl shadow-2xl">
              <div className="flex items-center space-x-8">
                {/* Power Button */}
                <div className="text-center">
                  <Button
                    onClick={handlePowerToggle}
                    className={`w-20 h-20 rounded-full border-4 transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 border-emerald-400 shadow-2xl shadow-emerald-500/50 scale-105"
                        : "bg-gradient-to-r from-gray-500 to-gray-600 border-gray-400 shadow-lg hover:scale-105"
                    } backdrop-blur-sm`}
                  >
                    <Power className="w-8 h-8" />
                  </Button>
                  <p className={`text-sm mt-2 font-medium ${isActive ? "text-emerald-400" : "text-gray-400"}`}>
                    {isActive ? "Assistant Active" : "Activate Assistant"}
                  </p>
                </div>

                <div className="border-l border-white/20 h-16"></div>

                {/* Voice Interface */}
                <div className="text-center">
                  <Button
                    onClick={handleVoiceToggle}
                    disabled={!isActive}
                    className={`w-16 h-16 rounded-full transition-all duration-300 ${
                      isListening
                        ? "bg-red-500 hover:bg-red-600 shadow-2xl shadow-red-500/50 scale-110"
                        : "bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 shadow-xl"
                    } ${!isActive ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <Mic className="w-6 h-6" />
                  </Button>
                  <p className="text-sm mt-2 font-medium text-violet-400">
                    {isListening ? "Listening..." : "Voice Command"}
                  </p>
                </div>

                <div className="border-l border-white/20 h-16"></div>

                {/* Status Display */}
                <div className="text-center space-y-2">
                  <p className={`text-xl font-medium ${getStatusColor()} transition-colors duration-300`}>
                    {getStatusText()}
                  </p>
                  <div className="flex items-center space-x-2 justify-center">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs">
                      GPT-4 Turbo
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">
                      DevOps AI
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Better Mobile Grid - Responsive layout with proper breakpoints */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Today's Progress - Focus on daily productivity metrics */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    <Target className="w-5 h-5 mr-2 text-emerald-400" />
                    Today's Progress
                  </h3>
                  <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-300 text-xs">
                    {new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">
                      {todayProgress.tasksCompleted}/{todayProgress.totalTasks}
                    </div>
                    <div className="text-sm text-gray-400">Tasks Completed</div>
                    <Progress
                      value={(todayProgress.tasksCompleted / todayProgress.totalTasks) * 100}
                      className="h-2 mt-2"
                    />
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{todayProgress.timesSaved}</div>
                    <div className="text-sm text-gray-400">Time Saved</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20">
                    <div className="text-2xl font-bold text-violet-400 mb-1">{todayProgress.successRate}%</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
                    <div className="text-2xl font-bold text-orange-400 mb-1">{userProfile.streak}</div>
                    <div className="text-sm text-gray-400">Day Streak</div>
                  </div>
                </div>
              </Card>

              {/* Simplified Quick Actions - Clean, icon-based quick access buttons */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-violet-400" />
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      disabled={!isActive}
                      className={`h-20 flex-col space-y-2 ${action.bgColor} ${action.borderColor} text-white hover:bg-white/10 group transition-all duration-300 ${
                        !isActive ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${action.color} group-hover:scale-110 transition-transform`}
                      >
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium">{action.label}</div>
                        <div className="text-xs text-gray-400">{action.description}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </Card>

              {/* Streamlined AI Categories - Only 4 essential categories */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
                  AI Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {aiCategories.map((category) => {
                    const Icon = category.icon
                    return (
                      <Card
                        key={category.id}
                        className="bg-white/5 border-white/10 backdrop-blur-md p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white">{category.name}</h4>
                            <p className="text-sm text-gray-400">{category.description}</p>
                          </div>
                          <Badge
                            variant="outline"
                            className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs"
                          >
                            {category.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">Usage</span>
                          <span className="text-xs font-medium text-white">{category.usage}%</span>
                        </div>
                        <Progress value={category.usage} className="h-1.5 mt-1" />
                      </Card>
                    )
                  })}
                </div>
              </Card>
            </div>

            {/* Sidebar - User-Centric Design */}
            <div className="space-y-6">
              {/* Recent Tasks - Show completed work for motivation */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-emerald-400" />
                  Recent Tasks
                </h3>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {recentTasks.map((task) => {
                    const Icon = getTaskIcon(task.type)
                    return (
                      <div
                        key={task.id}
                        className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-r ${
                            task.type === "git"
                              ? "from-violet-500/20 to-purple-500/20"
                              : task.type === "communication"
                                ? "from-blue-500/20 to-cyan-500/20"
                                : task.type === "documentation"
                                  ? "from-emerald-500/20 to-teal-500/20"
                                  : "from-orange-500/20 to-red-500/20"
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${getTaskColor(task.type)}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">{task.title}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-gray-400">{task.timestamp}</span>
                            <span className="text-xs text-emerald-400">• {task.duration}</span>
                            {task.status === "completed" && <CheckCircle className="w-3 h-3 text-emerald-400" />}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>

              {/* System Status - Professional system monitoring display */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-blue-400" />
                  System Status
                </h3>
                <div className="space-y-3">
                  {systemStatus.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(service.status)}
                        <div>
                          <p className="text-sm font-medium text-white">{service.service}</p>
                          <p className="text-xs text-gray-400">Uptime: {service.uptime}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className={`text-xs ${getStatusBadgeColor(service.status)}`}>
                          {service.status}
                        </Badge>
                        <p className="text-xs text-gray-400 mt-1">{service.responseTime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* User Progress Summary */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-violet-400" />
                  Your Progress
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Tasks Completed</span>
                      <span className="font-semibold text-white">{userProfile.tasksCompleted}</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Current Streak</span>
                      <span className="font-semibold text-white">{userProfile.streak} days</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 text-xs">
                      Level {userProfile.level}
                    </Badge>
                    <span className="text-xs text-gray-400">Next: Level {userProfile.level + 1}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Professional Focus - Clean tagline */}
          <div className="text-center mt-12">
            <p className="text-sm text-gray-500 italic mb-2">"Your personal DevOps automation system."</p>
            <p className="text-xs text-gray-600">Powered by GPT-4 Turbo • Multi-Modal AI • Available 24/7</p>
          </div>
        </div>
      </div>
    </div>
  )
}
