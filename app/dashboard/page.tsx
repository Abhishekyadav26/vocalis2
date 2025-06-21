"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import {
  Mic,
  Play,
  Github,
  Calendar,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Twitter,
  MessageCircle,
  Plane,
  ShoppingBag,
  DollarSign,
  Music,
  FileText,
  Briefcase,
  Share2,
  Filter,
  Search,
  Settings,
  Zap,
  TrendingUp,
  Bell,
  Star,
  Heart,
  Sparkles,
  Brain,
  Target,
  Palette,
  Volume2,
  VolumeX,
  Shield,
  Award,
  Rocket,
  Languages,
  Mic2,
  Eye,
  Headphones,
  X,
  Check,
  HelpCircle,
  Power,
  Activity,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Navbar } from "@/components/navbar"

interface Response {
  id: string
  command: string
  type:
    | "social"
    | "communication"
    | "calendar"
    | "travel"
    | "productivity"
    | "entertainment"
    | "shopping"
    | "finance"
    | "ai"
    | "creative"
  category: string
  result: string
  link?: string
  details?: any
  timestamp: string
  confidence?: number
  priority?: "low" | "medium" | "high"
}

interface FeatureCategory {
  id: string
  name: string
  version: string
  model: string
  icon: any
  color: string
  gradient: string
  features: string[]
  description: string
  popularity: number
  status: "online" | "beta" | "premium"
}

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

const featureCategories: FeatureCategory[] = [
  {
    id: "ai",
    name: "AI Assistant",
    version: "v4.2",
    model: "GPT-4 Turbo",
    icon: Brain,
    color: "from-emerald-500 to-teal-500",
    gradient: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
    features: ["Code Generation", "Content Writing", "Data Analysis", "Problem Solving", "Research"],
    description: "Advanced AI-powered assistance for complex tasks",
    popularity: 95,
    status: "online",
  },
  {
    id: "social",
    name: "Social Media",
    version: "v3.1",
    model: "Social Pro",
    icon: Twitter,
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    features: ["Twitter Post", "LinkedIn Update", "Instagram Caption", "Facebook Status", "TikTok Description"],
    description: "Manage your social presence effortlessly",
    popularity: 88,
    status: "online",
  },
  {
    id: "communication",
    name: "Communication",
    version: "v2.8",
    model: "Comm Suite",
    icon: MessageCircle,
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    features: ["Telegram Message", "WhatsApp Message", "Email Draft", "Slack Message", "Discord Message"],
    description: "Streamline your conversations and messaging",
    popularity: 92,
    status: "online",
  },
  {
    id: "creative",
    name: "Creative Studio",
    version: "v1.9",
    model: "DALL-E 3",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    gradient: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
    features: ["Image Generation", "Video Scripts", "Music Composition", "Story Writing", "Design Ideas"],
    description: "Unleash your creativity with AI assistance",
    popularity: 78,
    status: "beta",
  },
  {
    id: "calendar",
    name: "Calendar & Meetings",
    version: "v2.3",
    model: "Schedule AI",
    icon: Calendar,
    color: "from-purple-500 to-violet-500",
    gradient: "bg-gradient-to-br from-purple-500/20 to-violet-500/20",
    features: ["Calendar Event", "Meeting Schedule", "Reminder", "Appointment", "Conference Call"],
    description: "Organize your time and schedule efficiently",
    popularity: 85,
    status: "online",
  },
  {
    id: "travel",
    name: "Travel & Booking",
    version: "v1.5",
    model: "Travel Pro",
    icon: Plane,
    color: "from-orange-500 to-red-500",
    gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    features: ["Flight Booking", "Hotel Reservation", "Restaurant Booking", "Car Rental", "Event Tickets"],
    description: "Plan and book your journeys seamlessly",
    popularity: 72,
    status: "premium",
  },
  {
    id: "productivity",
    name: "Productivity",
    version: "v3.4",
    model: "Work Suite",
    icon: Briefcase,
    color: "from-indigo-500 to-blue-500",
    gradient: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
    features: ["Task Creation", "Note Taking", "Document Draft", "Project Setup", "Code Repository"],
    description: "Boost your productivity and workflow",
    popularity: 90,
    status: "online",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    version: "v2.1",
    model: "Media AI",
    icon: Music,
    color: "from-pink-500 to-rose-500",
    gradient: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
    features: [
      "Playlist Creation",
      "Movie Recommendation",
      "Podcast Subscription",
      "Game Suggestion",
      "Book Recommendation",
    ],
    description: "Discover and enjoy personalized entertainment",
    popularity: 68,
    status: "online",
  },
  {
    id: "shopping",
    name: "Smart Shopping",
    version: "v1.7",
    model: "Shop AI",
    icon: ShoppingBag,
    color: "from-yellow-500 to-orange-500",
    gradient: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
    features: ["Price Comparison", "Deal Finder", "Wishlist Manager", "Product Reviews", "Smart Recommendations"],
    description: "Shop smarter with AI-powered insights",
    popularity: 75,
    status: "beta",
  },
  {
    id: "finance",
    name: "Finance Manager",
    version: "v2.6",
    model: "FinTech AI",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-500",
    gradient: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
    features: ["Expense Tracking", "Investment Analysis", "Budget Planning", "Bill Reminders", "Financial Insights"],
    description: "Manage your finances intelligently",
    popularity: 82,
    status: "premium",
  },
]

const sampleResponses: Response[] = [
  {
    id: "1",
    command: "Generate a React component for user authentication",
    type: "ai",
    category: "Code Generation",
    result: "React Auth Component Generated",
    link: "https://github.com/user/auth-component",
    details: {
      language: "TypeScript",
      framework: "React",
      features: "Login, Signup, Password Reset",
      lines: "156 lines of code",
      tests: "12 test cases included",
    },
    timestamp: "2 minutes ago",
    confidence: 98,
    priority: "high",
  },
  {
    id: "2",
    command: "Create an engaging LinkedIn post about AI trends",
    type: "social",
    category: "LinkedIn Update",
    result: "LinkedIn Post Created",
    link: "https://linkedin.com/post/123",
    details: {
      content:
        "🚀 The future of AI is here! Exploring the latest trends in machine learning and their impact on business innovation. #AI #Innovation #TechTrends",
      hashtags: "#AI #Innovation #TechTrends #MachineLearning",
      engagement: "Predicted: 150+ likes, 25+ comments",
      bestTime: "Tuesday 9:00 AM",
    },
    timestamp: "5 minutes ago",
    confidence: 94,
    priority: "medium",
  },
  {
    id: "3",
    command: "Book a premium flight to Tokyo with specific preferences",
    type: "travel",
    category: "Flight Booking",
    result: "Premium Flight Options Found",
    link: "https://booking.com/flights/tokyo-premium",
    details: {
      route: "NYC → NRT (Tokyo)",
      class: "Business Class",
      price: "$2,850",
      airline: "ANA",
      duration: "14h 25m",
      amenities: "Lie-flat seats, Premium dining",
    },
    timestamp: "8 minutes ago",
    confidence: 91,
    priority: "high",
  },
]

const smartSuggestions = [
  { icon: Zap, text: "Schedule your weekly team standup", category: "calendar" },
  { icon: TrendingUp, text: "Analyze your social media performance", category: "social" },
  { icon: Brain, text: "Generate code for your new project", category: "ai" },
  { icon: Target, text: "Create a marketing campaign strategy", category: "creative" },
]

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
]

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const [isActive, setIsActive] = useState(true)
  const [status, setStatus] = useState<"idle" | "listening" | "processing" | "ready">("idle")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentResponse, setCurrentResponse] = useState<Response | null>(null)
  const [history, setHistory] = useState<Response[]>(sampleResponses)
  const [expandedHistory, setExpandedHistory] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState("interact")
  const [audioLevel, setAudioLevel] = useState(0)
  const [processingProgress, setProcessingProgress] = useState(0)
  const [showSettings, setShowSettings] = useState(false)
  const [chatMessages, setChatMessages] = useState<
    Array<{ id: string; type: "user" | "assistant"; content: string; timestamp: string }>
  >([])
  const [chatInput, setChatInput] = useState("")
  const [isChatListening, setIsChatListening] = useState(false)

  const [userProfile, setUserProfile] = useState<UserProfile>({
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

  // Set active tab from URL params
  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab && ["interact", "features", "history", "insights"].includes(tab)) {
      setActiveTab(tab)
    }
  }, [searchParams])

  // Simulate audio level animation
  useEffect(() => {
    if (isChatListening) {
      const interval = setInterval(() => {
        setAudioLevel(Math.random() * 100)
      }, 100)
      return () => clearInterval(interval)
    } else {
      setAudioLevel(0)
    }
  }, [isChatListening])

  // Simulate processing progress
  useEffect(() => {
    if (status === "processing") {
      setProcessingProgress(0)
      const interval = setInterval(() => {
        setProcessingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + Math.random() * 15
        })
      }, 200)
      return () => clearInterval(interval)
    }
  }, [status])

  const handlePowerToggle = () => {
    setIsActive(!isActive)
    if (!isActive) {
      setStatus("idle")
    } else {
      setStatus("idle")
      setCurrentResponse(null)
      setSelectedCategory(null)
    }
  }

  const handleCategorySelect = (categoryId: string) => {
    if (!isActive) return
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId)
  }

  const toggleHistoryItem = (id: string) => {
    setExpandedHistory((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const resetSession = () => {
    setStatus("idle")
    setCurrentResponse(null)
    setSelectedCategory(null)
    setProcessingProgress(0)
  }

  const updatePreference = (key: keyof UserProfile["preferences"], value: any) => {
    setUserProfile((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: value,
      },
    }))
  }

  const getStatusText = () => {
    if (!isActive) return "Assistant is offline - Activate to begin"

    switch (status) {
      case "listening":
        return selectedCategory
          ? `Listening for ${featureCategories.find((c) => c.id === selectedCategory)?.name}...`
          : "I'm listening... speak naturally"
      case "processing":
        return "Processing your request with AI..."
      case "ready":
        return "Task completed successfully!"
      default:
        return "Ready to assist with any task"
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

  const getCategoryIcon = (type: string) => {
    const category = featureCategories.find((c) => c.id === type)
    return category ? category.icon : FileText
  }

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      case "medium":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "low":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "beta":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "premium":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  const getSmartSuggestions = () => {
    // Get most used categories from history
    const categoryUsage = history.reduce(
      (acc, item) => {
        acc[item.type] = (acc[item.type] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    const mostUsedCategories = Object.entries(categoryUsage)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 4)
      .map(([category]) => category)

    // Generate suggestions based on usage
    const suggestions = [
      { icon: Brain, text: "Continue your AI coding project", category: "ai", recent: true },
      { icon: Twitter, text: "Create your daily social update", category: "social", recent: true },
      { icon: Calendar, text: "Schedule tomorrow's meetings", category: "calendar", recent: false },
      { icon: MessageCircle, text: "Draft team communication", category: "communication", recent: true },
    ]

    return suggestions.filter((s) => mostUsedCategories.includes(s.category) || s.recent)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-black/40 to-black/80"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <Navbar isAuthenticated={true} userProfile={userProfile} showSystemStatus={true} />

        {/* Settings Overlay */}
        {showSettings && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="bg-gray-900/95 border-white/10 backdrop-blur-md w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-2xl bg-emerald-500/20 backdrop-blur-sm">
                      <Settings className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Settings</h2>
                      <p className="text-sm text-gray-400">Customize your Vocalis experience</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowSettings(false)}
                    className="text-gray-400 hover:text-white rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-8">
                  {/* Appearance Settings */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Appearance</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-white/10">
                        <div className="flex items-center space-x-3">
                          <Eye className="w-5 h-5 text-emerald-400" />
                          <div>
                            <p className="font-medium text-white">High Contrast</p>
                            <p className="text-sm text-gray-400">Enhanced visibility for better accessibility</p>
                          </div>
                        </div>
                        <Switch
                          checked={userProfile.preferences.highContrast}
                          onCheckedChange={(checked) => updatePreference("highContrast", checked)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Voice & Audio Settings */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Voice & Audio</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10">
                        <div className="flex items-center space-x-3">
                          {userProfile.preferences.voiceEnabled ? (
                            <Volume2 className="w-5 h-5 text-emerald-400" />
                          ) : (
                            <VolumeX className="w-5 h-5 text-emerald-400" />
                          )}
                          <div>
                            <p className="font-medium text-white">Voice Feedback</p>
                            <p className="text-sm text-gray-400">Enable voice responses and audio feedback</p>
                          </div>
                        </div>
                        <Switch
                          checked={userProfile.preferences.voiceEnabled}
                          onCheckedChange={(checked) => updatePreference("voiceEnabled", checked)}
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-white/10">
                        <div className="flex items-center space-x-3">
                          <Headphones className="w-5 h-5 text-emerald-400" />
                          <div>
                            <p className="font-medium text-white">Sound Effects</p>
                            <p className="text-sm text-gray-400">Play sounds for interactions and notifications</p>
                          </div>
                        </div>
                        <Switch
                          checked={userProfile.preferences.soundEffects}
                          onCheckedChange={(checked) => updatePreference("soundEffects", checked)}
                        />
                      </div>

                      <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-white/10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <Mic2 className="w-5 h-5 text-emerald-400" />
                            <div>
                              <p className="font-medium text-white">Voice Speed</p>
                              <p className="text-sm text-gray-400">Adjust voice response speed</p>
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-300">
                            {userProfile.preferences.voiceSpeed}x
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-400">0.5x</span>
                          <div className="flex-1">
                            <input
                              type="range"
                              min="0.5"
                              max="2"
                              step="0.1"
                              value={userProfile.preferences.voiceSpeed}
                              onChange={(e) => updatePreference("voiceSpeed", Number.parseFloat(e.target.value))}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            />
                          </div>
                          <span className="text-sm text-gray-400">2x</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Behavior Settings */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Behavior</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-white/10">
                        <div className="flex items-center space-x-3">
                          <Zap className="w-5 h-5 text-emerald-400" />
                          <div>
                            <p className="font-medium text-white">Auto Execute</p>
                            <p className="text-sm text-gray-400">
                              Automatically execute simple tasks without confirmation
                            </p>
                          </div>
                        </div>
                        <Switch
                          checked={userProfile.preferences.autoExecute}
                          onCheckedChange={(checked) => updatePreference("autoExecute", checked)}
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-white/10">
                        <div className="flex items-center space-x-3">
                          <Bell className="w-5 h-5 text-emerald-400" />
                          <div>
                            <p className="font-medium text-white">Notifications</p>
                            <p className="text-sm text-gray-400">
                              Receive notifications for task completions and updates
                            </p>
                          </div>
                        </div>
                        <Switch
                          checked={userProfile.preferences.notifications}
                          onCheckedChange={(checked) => updatePreference("notifications", checked)}
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-white/10">
                        <div className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-emerald-400" />
                          <div>
                            <p className="font-medium text-white">Privacy Mode</p>
                            <p className="text-sm text-gray-400">
                              Enhanced privacy with local processing when possible
                            </p>
                          </div>
                        </div>
                        <Switch checked={false} />
                      </div>
                    </div>
                  </div>

                  {/* Language Settings */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Language & Region</h3>
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-white/10">
                      <div className="flex items-center space-x-3 mb-3">
                        <Languages className="w-5 h-5 text-emerald-400" />
                        <div>
                          <p className="font-medium text-white">Language</p>
                          <p className="text-sm text-gray-400">Choose your preferred language</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {languages.map((lang) => (
                          <Button
                            key={lang.code}
                            variant={userProfile.preferences.language === lang.code ? "default" : "outline"}
                            size="sm"
                            onClick={() => updatePreference("language", lang.code)}
                            className={`justify-start ${
                              userProfile.preferences.language === lang.code
                                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                                : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                            }`}
                          >
                            <span className="mr-2">{lang.flag}</span>
                            {lang.name}
                            {userProfile.preferences.language === lang.code && <Check className="w-4 h-4 ml-auto" />}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4 border-t border-white/10">
                    <Button
                      onClick={() => setShowSettings(false)}
                      className="flex-1 bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/30"
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Save Settings
                    </Button>
                    <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                      <HelpCircle className="w-4 h-4 mr-2" />
                      Help
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        <div className="container mx-auto px-4 py-6 max-w-7xl">
          {/* Power Control - First and Prominent */}
          <div className="flex justify-center mb-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-3xl shadow-2xl">
              <div className="flex items-center space-x-6">
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
                  <p className={`text-sm mt-2 font-medium ${isActive ? "text-emerald-400 #00000000" : "text-gray-400"}`}>
                    {isActive ? "Assistant Active" : "Activate Assistant"}
                  </p>
                </div>

                <div className="border-l border-white/20 h-16"></div>

                <div className="text-center space-y-2">
                  <p className={`text-xl font-medium ${getStatusColor()} transition-colors duration-300`}>
                    {getStatusText()}
                  </p>
                  <div className="flex items-center space-x-2 justify-center">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs">
                      GPT-4 Turbo
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">
                      Multi-Modal
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Chat Interface */}
          {isActive && (
            <Card className="bg-white/5 border-white/10 backdrop-blur-md rounded-3xl shadow-2xl mb-8 max-w-4xl mx-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Chat with Assistant</h3>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                    <Activity className="w-3 h-3 mr-1" />
                    Active
                  </Badge>
                </div>

                {/* Chat Messages */}
                <div className="h-64 overflow-y-auto mb-4 space-y-3 p-4 rounded-2xl bg-black/20">
                  {chatMessages.length === 0 ? (
                    <div className="text-center py-8">
                      <Brain className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                      <p className="text-gray-400">Start a conversation with your AI assistant</p>
                    </div>
                  ) : (
                    chatMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                            message.type === "user" ? "bg-emerald-500/20 text-emerald-100" : "bg-white/10 text-white"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs mt-1 text-gray-400">{message.timestamp}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Chat Input */}
                <div className="relative">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-full"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        placeholder="Ask anything..."
                        className="w-full px-4 py-3 pr-12 rounded-2xl border bg-white/5 border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                        onKeyPress={(e) => {
                          if (e.key === "Enter" && chatInput.trim()) {
                            // Handle send message
                            const newMessage = {
                              id: Date.now().toString(),
                              type: "user" as const,
                              content: chatInput,
                              timestamp: "Just now",
                            }
                            setChatMessages((prev) => [...prev, newMessage])
                            setChatInput("")

                            // Simulate assistant response
                            setTimeout(() => {
                              const assistantMessage = {
                                id: (Date.now() + 1).toString(),
                                type: "assistant" as const,
                                content: "I understand your request. Let me help you with that.",
                                timestamp: "Just now",
                              }
                              setChatMessages((prev) => [...prev, assistantMessage])
                            }, 1000)
                          }
                        }}
                      />
                      <Button
                        onClick={() => setIsChatListening(!isChatListening)}
                        className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full p-0 ${
                          isChatListening
                            ? "bg-red-500 hover:bg-red-600 text-white"
                            : "bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400"
                        }`}
                      >
                        <Mic className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white/5 border-white/10 backdrop-blur-md border rounded-2xl">
              <TabsTrigger value="interact" className="data-[state=active]:bg-emerald-500/20 rounded-xl">
                <Zap className="w-4 h-4 mr-2" />
                Interact
              </TabsTrigger>
              <TabsTrigger value="features" className="data-[state=active]:bg-emerald-500/20 rounded-xl">
                <Sparkles className="w-4 h-4 mr-2" />
                AI Models
              </TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-emerald-500/20 rounded-xl">
                <TrendingUp className="w-4 h-4 mr-2" />
                History
              </TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:bg-emerald-500/20 rounded-xl">
                <Award className="w-4 h-4 mr-2" />
                Insights
              </TabsTrigger>
            </TabsList>

            <TabsContent value="interact" className="space-y-8 mt-8">
              {/* Smart Suggestions */}
              <Card
                className={`bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl ${!isActive ? "opacity-50" : ""}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Smart Suggestions</h3>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                      AI Powered
                    </Badge>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300 text-xs">
                      Personalized
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {getSmartSuggestions().map((suggestion, index) => {
                    const Icon = suggestion.icon
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        disabled={!isActive}
                        className={`justify-start h-auto p-4 bg-white/5 border-white/10 text-white hover:bg-white/10 ${!isActive ? "opacity-50 cursor-not-allowed" : ""} relative`}
                        onClick={() => handleCategorySelect(suggestion.category)}
                      >
                        <Icon className="w-5 h-5 mr-3 text-emerald-400" />
                        <span className="text-left flex-1">{suggestion.text}</span>
                        {suggestion.recent && (
                          <Badge variant="secondary" className="ml-2 text-xs bg-orange-500/20 text-orange-300">
                            Recent
                          </Badge>
                        )}
                      </Button>
                    )
                  })}
                </div>
              </Card>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Interaction Area */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Enhanced Feature Categories with Versions */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {featureCategories.map((category) => {
                      const Icon = category.icon
                      return (
                        <Card
                          key={category.id}
                          className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                            selectedCategory === category.id
                              ? `bg-gradient-to-r ${category.color} border-transparent text-white shadow-lg shadow-emerald-500/25`
                              : "bg-white/5 backdrop-blur-md border-white/10 text-white hover:bg-white/10"
                          } ${!isActive ? "opacity-50 cursor-not-allowed" : ""}`}
                          onClick={() => handleCategorySelect(category.id)}
                        >
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-3">
                              <Icon className="w-6 h-6" />
                              <Badge variant="outline" className={`text-xs ${getStatusBadgeColor(category.status)}`}>
                                {category.status}
                              </Badge>
                            </div>
                            <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {category.version}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {category.model}
                              </Badge>
                            </div>
                            <p
                              className={`text-xs ${selectedCategory === category.id ? "text-white/80" : "text-gray-400"}`}
                            >
                              {category.description}
                            </p>
                          </div>
                        </Card>
                      )
                    })}
                  </div>

                  {/* Selected Category Features */}
                  {selectedCategory && (
                    <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-emerald-300">
                          {featureCategories.find((c) => c.id === selectedCategory)?.name} Features
                        </h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-300">
                            {featureCategories.find((c) => c.id === selectedCategory)?.features.length} Available
                          </Badge>
                          <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                            {featureCategories.find((c) => c.id === selectedCategory)?.model}
                          </Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {featureCategories
                          .find((c) => c.id === selectedCategory)
                          ?.features.map((feature, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-white/10 text-white hover:bg-white/20 cursor-pointer transition-colors p-2 justify-center"
                            >
                              {feature}
                            </Badge>
                          ))}
                      </div>
                    </Card>
                  )}

                  {/* Enhanced Response Display */}
                  {currentResponse && (
                    <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          {(() => {
                            const Icon = getCategoryIcon(currentResponse.type)
                            return <Icon className="w-8 h-8 text-gray-300" />
                          })()}
                          <div>
                            <h3 className="font-bold text-lg text-white">{currentResponse.result}</h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-300">
                                {currentResponse.category}
                              </Badge>
                              {currentResponse.priority && (
                                <Badge variant="outline" className={getPriorityColor(currentResponse.priority)}>
                                  {currentResponse.priority} priority
                                </Badge>
                              )}
                              {currentResponse.confidence && (
                                <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                                  {currentResponse.confidence}% confident
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-400 mt-1">{currentResponse.timestamp}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {userProfile.preferences.voiceEnabled && (
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              <Play className="w-4 h-4" />
                            </Button>
                          )}
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="bg-black/20 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-300 italic">"{currentResponse.command}"</p>
                      </div>

                      {/* Enhanced Response Details */}
                      {currentResponse.details && (
                        <div className="bg-white/5 rounded-lg p-4 mb-4 space-y-3">
                          <h4 className="font-semibold text-sm text-white">Details</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {Object.entries(currentResponse.details).map(([key, value]) => (
                              <div key={key} className="space-y-1">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">
                                  {key.replace(/([A-Z])/g, " $1")}
                                </span>
                                <p className="text-sm font-medium text-white">{String(value)}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex space-x-3">
                        {currentResponse.link && (
                          <Button
                            className="flex-1 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border-emerald-500/30 text-emerald-300 hover:bg-emerald-600/30"
                            onClick={() => window.open(currentResponse.link, "_blank")}
                          >
                            <Share2 className="w-4 h-4 mr-2" />
                            Open Result
                          </Button>
                        )}
                        <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                          <Rocket className="w-4 h-4 mr-2" />
                          Enhance
                        </Button>
                      </div>
                    </Card>
                  )}
                </div>

                {/* Enhanced Sidebar */}
                <div className="space-y-6">
                  <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      {[
                        { icon: Twitter, label: "Quick Tweet", color: "from-blue-500 to-cyan-500" },
                        { icon: Calendar, label: "Schedule Meeting", color: "from-purple-500 to-violet-500" },
                        { icon: MessageCircle, label: "Send Message", color: "from-green-500 to-emerald-500" },
                        { icon: Brain, label: "AI Assistant", color: "from-emerald-500 to-teal-500" },
                        { icon: Github, label: "Create Repo", color: "from-gray-500 to-slate-500" },
                      ].map((action, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          disabled={!isActive}
                          className={`w-full justify-start h-12 bg-white/5 border-white/10 text-white hover:bg-white/10 group ${!isActive ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-r ${action.color} mr-3 group-hover:scale-110 transition-transform`}
                          >
                            <action.icon className="w-4 h-4 text-white" />
                          </div>
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  </Card>

                  {/* Stats Card */}
                  <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold text-white mb-4">Your Progress</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Tasks Completed</span>
                          <span className="font-semibold text-white">{userProfile.tasksCompleted}</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Current Streak</span>
                          <span className="font-semibold text-white">{userProfile.streak} days</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          Level {userProfile.level}
                        </Badge>
                        <span className="text-xs text-gray-400">Next: Level {userProfile.level + 1}</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featureCategories.map((category) => {
                  const Icon = category.icon
                  return (
                    <Card
                      key={category.id}
                      className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{category.name}</h3>
                          <div className="flex items-center space-x-2 mb-1">
                            <Badge variant="secondary" className="text-xs">
                              {category.version}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {category.model}
                            </Badge>
                            <Badge variant="outline" className={`text-xs ${getStatusBadgeColor(category.status)}`}>
                              {category.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-400">{category.description}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-400">Popularity</span>
                          <span className="font-semibold text-white">{category.popularity}%</span>
                        </div>
                        <Progress value={category.popularity} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        {category.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                        {category.features.length > 3 && (
                          <p className="text-xs text-gray-400 mt-2">+{category.features.length - 3} more features</p>
                        )}
                      </div>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="history" className="mt-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Activity History</h2>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4">
                  {history.map((item) => {
                    const Icon = getCategoryIcon(item.type)
                    return (
                      <Card
                        key={item.id}
                        className="bg-white/5 border-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
                      >
                        <div
                          className="p-6 cursor-pointer hover:bg-white/5 transition-colors"
                          onClick={() => toggleHistoryItem(item.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div
                                className={`p-3 rounded-xl bg-gradient-to-r ${featureCategories.find((c) => c.id === item.type)?.color || "from-gray-500 to-gray-600"}`}
                              >
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <p className="font-semibold text-white">{item.result}</p>
                                <div className="flex items-center space-x-2 mt-1">
                                  <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-300 text-xs">
                                    {item.category}
                                  </Badge>
                                  {item.confidence && (
                                    <Badge variant="secondary" className="bg-green-500/20 text-green-300 text-xs">
                                      {item.confidence}%
                                    </Badge>
                                  )}
                                  <p className="text-xs text-gray-400">{item.timestamp}</p>
                                </div>
                              </div>
                            </div>
                            {expandedHistory.includes(item.id) ? (
                              <ChevronUp className="w-5 h-5 text-gray-400" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </div>

                        {expandedHistory.includes(item.id) && (
                          <div className="px-6 pb-6 border-t border-white/10">
                            <div className="bg-black/20 rounded-lg p-4 mt-4 mb-4">
                              <p className="text-sm text-gray-300 italic">"{item.command}"</p>
                            </div>

                            {item.details && (
                              <div className="bg-white/5 rounded-lg p-4 mb-4 space-y-2">
                                <h4 className="font-semibold text-sm text-white">Details</h4>
                                <div className="grid grid-cols-2 gap-3">
                                  {Object.entries(item.details).map(([key, value]) => (
                                    <div key={key} className="space-y-1">
                                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                                        {key.replace(/([A-Z])/g, " $1")}
                                      </span>
                                      <p className="text-sm font-medium text-white">{String(value)}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div className="flex space-x-3">
                              {item.link && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="flex-1 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border-emerald-500/30 text-emerald-300 hover:bg-emerald-600/30"
                                  onClick={() => window.open(item.link, "_blank")}
                                >
                                  <Share2 className="w-3 h-3 mr-2" />
                                  Open
                                </Button>
                              )}
                              <Button
                                variant="outline"
                                size="sm"
                                className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                              >
                                <RotateCcw className="w-3 h-3 mr-2" />
                                Repeat
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                              >
                                <Heart className="w-3 h-3 mr-2" />
                                Save
                              </Button>
                            </div>
                          </div>
                        )}
                      </Card>
                    )
                  })}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="insights" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Usage Stats */}
                <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Usage Stats</h3>
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Daily Tasks</span>
                        <span className="font-semibold text-white">12</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Success Rate</span>
                        <span className="font-semibold text-white">94%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Time Saved</span>
                        <span className="font-semibold text-white">2.5h</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                  </div>
                </Card>

                {/* Achievements */}
                <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Achievements</h3>
                    <Award className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Voice Master", desc: "100 voice commands", earned: true },
                      { name: "Productivity Pro", desc: "50 tasks completed", earned: true },
                      { name: "Social Butterfly", desc: "25 social posts", earned: false },
                      { name: "Code Wizard", desc: "10 repositories created", earned: true },
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${achievement.earned ? "bg-yellow-500" : "bg-gray-600"}`}
                        >
                          <Award className={`w-4 h-4 ${achievement.earned ? "text-white" : "text-gray-400"}`} />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-white">{achievement.name}</p>
                          <p className="text-xs text-gray-400">{achievement.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Recent Activity */}
                <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
                    <Activity className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="space-y-3">
                    {[
                      { action: "Created React component", time: "2 hours ago", type: "code" },
                      { action: "Posted LinkedIn update", time: "4 hours ago", type: "social" },
                      { action: "Scheduled meeting", time: "6 hours ago", type: "calendar" },
                      { action: "Sent team message", time: "8 hours ago", type: "communication" },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                          <div>
                            <span className="text-sm text-white">{activity.action}</span>
                            <p className="text-xs text-gray-400">{activity.time}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs">
                          {activity.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Enhanced Tech Tagline */}
          <div className="text-center mt-12">
            <p className="text-sm text-gray-500 italic mb-2">"Your personal AI operating system."</p>
            <p className="text-xs text-gray-600">Powered by GPT-4 Turbo • Multi-Modal AI • Available 24/7</p>
          </div>
        </div>
      </div>
    </div>
  )
}
