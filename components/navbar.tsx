"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  Brain,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Cpu,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface NavbarProps {
  isAuthenticated?: boolean
  userProfile?: {
    name: string
    avatar: string
    level: number
    streak: number
  }
  showSystemStatus?: boolean
}

export function Navbar({ isAuthenticated = false, userProfile, showSystemStatus = false }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    // Handle logout logic here
    router.push("/")
  }

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30">
              <Brain className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Vocalis
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {!isAuthenticated ? (
              <>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/auth" className="text-gray-300 hover:text-white transition-colors">
                  Sign In
                </Link>
                <Link href="/auth">
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                    Get Started
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  Dashboard
                </Link>
                <Link href="/dashboard?tab=history" className="text-gray-300 hover:text-white transition-colors">
                  History
                </Link>

                {/* System Status */}
                {showSystemStatus && (
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Cpu className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Database className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                )}

                {/* Notifications */}
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-full w-10 h-10 p-0 relative"
                >
                  <Bell className="w-4 h-4" />
                </Button>

                {/* User Profile */}
                {userProfile && (
                  <Card className="bg-white/5 border-white/10 backdrop-blur-md p-3 rounded-xl">
                    {/* User profile content */}
                  </Card>
                )}

                {/* Settings */}
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-full w-10 h-10 p-0"
                >
                  <Settings className="w-4 h-4" />
                </Button>

                {/* Logout */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="bg-red-500/10 border-red-500/20 text-red-300 hover:bg-red-500/20"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden bg-white/5 border-white/10 text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {!isAuthenticated ? (
                <>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                    Home
                  </Link>
                  <Link href="#features" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                    Features
                  </Link>
                  <Link href="#about" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                    About
                  </Link>
                  <Link href="/auth" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                    Sign In
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                    Dashboard
                  </Link>
                  <Link href="/dashboard?tab=history" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                    History
                  </Link>
                  <Button
                    onClick={handleLogout}
                    className="bg-red-500/10 border-red-500/20 text-red-300 hover:bg-red-500/20 mx-4"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
