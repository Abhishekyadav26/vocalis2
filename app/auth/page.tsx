"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  LogIn,
  UserPlus,
  Fingerprint,
  Brain,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  CheckCircle,
  Github,
  Chrome,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"

export default function AuthPage() {
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  })
  const router = useRouter()

  const handleAuth = async (type: "signin" | "signup" | "civic" | "google" | "github") => {
    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
        <Navbar isAuthenticated={false} />

        {/* Auth Content */}
        <div className="container mx-auto px-4 py-12 max-w-md">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Auth Card */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30">
                  <Brain className="w-8 h-8 text-emerald-400" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {authMode === "signin" ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-gray-400">
                {authMode === "signin"
                  ? "Sign in to continue to your AI assistant"
                  : "Join thousands of users transforming their workflow"}
              </p>
            </div>

            {/* Auth Mode Toggle */}
            <div className="flex bg-white/5 rounded-2xl p-1 mb-6">
              <Button
                variant={authMode === "signin" ? "default" : "ghost"}
                className={`flex-1 rounded-xl ${
                  authMode === "signin" ? "bg-emerald-500/20 text-emerald-300" : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setAuthMode("signin")}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
              <Button
                variant={authMode === "signup" ? "default" : "ghost"}
                className={`flex-1 rounded-xl ${
                  authMode === "signup" ? "bg-emerald-500/20 text-emerald-300" : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setAuthMode("signup")}
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Sign Up
              </Button>
            </div>

            {/* Social Auth */}
            <div className="space-y-3 mb-6">
              <Button
                onClick={() => handleAuth("civic")}
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white hover:bg-blue-500/30 rounded-xl"
              >
                <Fingerprint className="w-5 h-5 mr-2" />
                Continue with Civic Auth
                <Badge variant="secondary" className="ml-2 bg-blue-500/20 text-blue-300 text-xs">
                  Recommended
                </Badge>
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={() => handleAuth("google")}
                  disabled={isLoading}
                  variant="outline"
                  className="h-12 bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl"
                >
                  <Chrome className="w-5 h-5 mr-2" />
                  Google
                </Button>
                <Button
                  onClick={() => handleAuth("github")}
                  disabled={isLoading}
                  variant="outline"
                  className="h-12 bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-gray-400">or continue with email</span>
              </div>
            </div>

            {/* Email Form */}
            <form className="space-y-4">
              {authMode === "signup" && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border bg-white/5 border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border bg-white/5 border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 rounded-xl border bg-white/5 border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    placeholder="Enter your password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {authMode === "signup" && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border bg-white/5 border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                </div>
              )}

              {authMode === "signin" && (
                <div className="flex justify-end">
                  <Link href="#" className="text-sm text-emerald-400 hover:text-emerald-300">
                    Forgot password?
                  </Link>
                </div>
              )}

              <Button
                type="submit"
                onClick={(e) => {
                  e.preventDefault()
                  handleAuth(authMode)
                }}
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    {authMode === "signin" ? "Signing In..." : "Creating Account..."}
                  </div>
                ) : (
                  <>
                    {authMode === "signin" ? (
                      <>
                        <LogIn className="w-5 h-5 mr-2" />
                        Sign In
                      </>
                    ) : (
                      <>
                        <UserPlus className="w-5 h-5 mr-2" />
                        Create Account
                      </>
                    )}
                  </>
                )}
              </Button>
            </form>

            {/* Features List for Signup */}
            {authMode === "signup" && (
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                <h3 className="text-sm font-semibold text-white mb-3">What you'll get:</h3>
                <ul className="space-y-2">
                  {[
                    "Access to 10+ specialized AI models",
                    "Natural voice interaction",
                    "Real-time processing and responses",
                    "Secure data encryption",
                    "24/7 customer support",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Terms */}
            <p className="text-xs text-gray-500 mt-6 text-center">
              By continuing, you agree to our{" "}
              <Link href="#" className="text-emerald-400 hover:text-emerald-300">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-emerald-400 hover:text-emerald-300">
                Privacy Policy
              </Link>
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
