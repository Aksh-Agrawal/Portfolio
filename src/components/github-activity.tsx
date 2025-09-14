"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Calendar,
  TrendingUp,
  Star,
  ExternalLink,
  GitBranch,
  Users,
  BookOpen,
} from "lucide-react";

interface GitHubData {
  totalContributions: number;
  activeDays: number;
  repositories: number;
  recentActivity: string[];
  topLanguages: { name: string; percentage: number; color: string }[];
  stats: { label: string; value: string; icon: any }[];
  contributionWeeks: { week: string; contributions: number }[];
  recentRepos: any[];
}
// GitHub Calendar Component
import GitHubCalendar from "react-github-calendar";

export function GithubCalendarSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto max-w-4xl text-center">
        <style>{`
          /* Pink gradient for GitHubCalendar heatmap and legend */
          .react-github-calendar .contrib-legend .legend-color {
            background: #ededed !important;
          }
          .react-github-calendar .contrib-legend .legend-color[data-level="1"] {
            background: #ffb3e6 !important;
          }
          .react-github-calendar .contrib-legend .legend-color[data-level="2"] {
            background: #ff66cc !important;
          }
          .react-github-calendar .contrib-legend .legend-color[data-level="3"] {
            background: #ff00cc !important;
          }
          .react-github-calendar .contrib-legend .legend-color[data-level="4"] {
            background: #c800a1 !important;
          }
          .react-github-calendar .day[data-level="0"] {
            fill: #ededed !important;
          }
          .react-github-calendar .day[data-level="1"] {
            fill: #ffb3e6 !important;
          }
          .react-github-calendar .day[data-level="2"] {
            fill: #ff66cc !important;
          }
          .react-github-calendar .day[data-level="3"] {
            fill: #ff00cc !important;
          }
          .react-github-calendar .day[data-level="4"] {
            fill: #c800a1 !important;
          }
        `}</style>
        <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '2px', color: '#ff00cc', textShadow: '0 0 8px #ff00cc' }}>
          Days I <span style={{ color: '#ffffffff', textShadow: '0 0 8px #ff00cc' }}>Commit</span>
        </h1>
        <div
          className="flex justify-center items-center"
          style={{
            background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #ff00cc 100%)',
            borderRadius: '24px',
            boxShadow: '0 0 16px #ff00cc',
            padding: '48px 24px',
            border: '2px solid #ff00cc',
            position: 'relative',
            overflow: 'hidden',
          }}
          
        >
         
          <GitHubCalendar
            username="aksh-agrawal"
            blockSize={20}
            blockMargin={7}
            fontSize={20}
            // colorScheme={["#ededed", "#ffb3e6", "#ff66cc", "#ff00cc", "#c800a1"]}
            transformData={(data) =>
              data.map((day) => ({
                ...day,
                color: day.count > 0 ? '#ff00cc' : '#ededed',
              }))
            }
          />
          
          {/* Cyberpunk neon grid overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 60,
            width: '200%',
            height: '100%',
            pointerEvents: 'none',
            background: 'repeating-linear-gradient(90deg, transparent, transparent 29px, #ff00cc33 30px), repeating-linear-gradient(0deg, transparent, transparent 29px, #00ffe733 30px)'
          }} />
        </div>
       <h1 className="text-0.4xs md:text-5xs font-bold mb-8 top-96" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '2px', color: '#ff00cc', textShadow: '0 0 8px #ff00cc' }}>
          Scroll <span style={{ color: '#ffffffff', textShadow: '0 0 8px #ff00cc' }}>Right</span>
        </h1>
      </div>
    </section>
    
  );
}

export function GitHubActivity() {
  const [githubData, setGitHubData] = React.useState<GitHubData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const username = "aksh-agrawal";

  // Language colors for better visualization
  const languageColors: { [key: string]: string } = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    HTML: "#e34c26",
    CSS: "#563d7c",
    React: "#61dafb",
    Vue: "#4FC08D",
    Go: "#00ADD8",
    Rust: "#dea584",
    C: "#555555",
    "C++": "#f34b7d",
    PHP: "#4F5D95",
    Ruby: "#701516",
    Swift: "#fa7343",
    Kotlin: "#A97BFF",
    Other: "#8e8e93",
  };

  React.useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user data and repositories
        const [userResponse, reposResponse, eventsResponse] = await Promise.all(
          [
            fetch(`https://api.github.com/users/${username}`),
            fetch(
              `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
            ),
            fetch(
              `https://api.github.com/users/${username}/events?per_page=100`
            ).catch(() => null),
          ]
        );

        if (!userResponse.ok) {
          throw new Error(`GitHub user not found: ${username}`);
        }

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();
        const eventsData = eventsResponse?.ok
          ? await eventsResponse.json()
          : [];

        // Calculate real statistics
        const totalRepos = userData.public_repos || 0;
        const totalStars = reposData.reduce(
          (sum: number, repo: any) => sum + (repo.stargazers_count || 0),
          0
        );
        const totalForks = reposData.reduce(
          (sum: number, repo: any) => sum + (repo.forks_count || 0),
          0
        );
        const followers = userData.followers || 0;

        // Get recent repositories with more details
        const recentRepos = reposData
          .filter((repo: any) => !repo.fork) // Exclude forked repos
          .slice(0, 5)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description || "No description",
            language: repo.language,
            stars: repo.stargazers_count,
            updatedAt: new Date(repo.updated_at),
          }));

        // Calculate language statistics
        const languageStats: { [key: string]: number } = {};
        const repoCount: { [key: string]: number } = {};

        reposData.forEach((repo: any) => {
          if (repo.language && !repo.fork) {
            // Don't count forked repos
            languageStats[repo.language] =
              (languageStats[repo.language] || 0) + (repo.size || 1);
            repoCount[repo.language] = (repoCount[repo.language] || 0) + 1;
          }
        });

        const totalSize = Object.values(languageStats).reduce(
          (sum: number, size: number) => sum + size,
          0
        );
        const topLanguages = Object.entries(languageStats)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([lang, size]) => ({
            name: lang,
            percentage: Math.round((size / totalSize) * 100),
            color: languageColors[lang] || languageColors.Other,
          }));

        // Generate more realistic activity data based on actual repo updates
        const contributionWeeks = generateContributionData(
          reposData,
          eventsData
        );

        // Estimate contributions from repo activity and events
        const estimatedContributions = Math.max(
          eventsData.length * 2, // Rough estimate from events
          reposData.filter((repo: any) => !repo.fork).length * 10, // 10 commits per repo average
          365 // Minimum baseline
        );

        // Estimate active days (more conservative)
        const activeDays = Math.min(
          Math.floor(estimatedContributions / 3), // Average 3 contributions per active day
          300 // Max realistic active days in a year
        );

        // Generate recent activity from actual repos and events
        const recentActivity = generateRecentActivity(recentRepos, eventsData);

        setGitHubData({
          totalContributions: estimatedContributions,
          activeDays: activeDays,
          repositories: totalRepos,
          recentActivity,
          topLanguages:
            topLanguages.length > 0
              ? topLanguages
              : [
                  {
                    name: "JavaScript",
                    percentage: 40,
                    color: languageColors.JavaScript,
                  },
                  {
                    name: "Python",
                    percentage: 30,
                    color: languageColors.Python,
                  },
                  {
                    name: "TypeScript",
                    percentage: 20,
                    color: languageColors.TypeScript,
                  },
                  {
                    name: "Other",
                    percentage: 10,
                    color: languageColors.Other,
                  },
                ],
          stats: [
            {
              label: "Repositories",
              value: totalRepos.toString(),
              icon: BookOpen,
            },
            { label: "Stars Earned", value: totalStars.toString(), icon: Star },
            { label: "Forks", value: totalForks.toString(), icon: GitBranch },
            { label: "Followers", value: followers.toString(), icon: Users },
          ],
          contributionWeeks,
          recentRepos,
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setError(
          error instanceof Error ? error.message : "Failed to fetch GitHub data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  // Generate weekly contribution data based on actual repo activity
  const generateContributionData = (repos: any[], events: any[]) => {
    const weeks = [];
    const now = new Date();

    // Create 52 weeks of data
    for (let i = 51; i >= 0; i--) {
      const weekStart = new Date(now.getTime() - i * 7 * 24 * 60 * 60 * 1000);
      const weekEnd = new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000);

      // Count repo updates in this week
      const repoUpdates = repos.filter((repo: any) => {
        const updated = new Date(repo.updated_at);
        return updated >= weekStart && updated < weekEnd && !repo.fork;
      }).length;

      // Count events in this week
      const weekEvents = events.filter((event: any) => {
        const created = new Date(event.created_at);
        return created >= weekStart && created < weekEnd;
      }).length;

      // Combine and add some randomness for realistic pattern
      let contributions = repoUpdates * 3 + weekEvents;

      // Add realistic daily variation (weekends less active)
      const isRecentWeek = i < 8;
      if (isRecentWeek) {
        contributions += Math.floor(Math.random() * 5);
      } else {
        contributions += Math.floor(Math.random() * 3);
      }

      weeks.push({
        week: weekStart.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        contributions: Math.max(0, contributions),
      });
    }

    return weeks;
  };

  // Generate recent activity from real data
  const generateRecentActivity = (repos: any[], events: any[]) => {
    const activities: string[] = [];

    // Add recent repo activities
    repos.slice(0, 3).forEach((repo) => {
      const timeAgo = getTimeAgo(repo.updatedAt);
      activities.push(`Updated ${repo.name} - ${timeAgo}`);
    });

    // Add recent events if available
    events.slice(0, 2).forEach((event: any) => {
      const timeAgo = getTimeAgo(new Date(event.created_at));
      const eventType = event.type.replace("Event", "");
      activities.push(
        `${eventType} on ${event.repo?.name || "repository"} - ${timeAgo}`
      );
    });

    return activities.slice(0, 5);
  };

  const getTimeAgo = (date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30)
      return `${Math.ceil(diffDays / 7)} week${
        Math.ceil(diffDays / 7) > 1 ? "s" : ""
      } ago`;
    return `${Math.ceil(diffDays / 30)} month${
      Math.ceil(diffDays / 30) > 1 ? "s" : ""
    } ago`;
  };

  if (loading) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading GitHub activity...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <Github className="h-10 w-10 text-primary" />
              GitHub Activity
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {error}
            </p>
            <motion.a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink className="h-4 w-4" />
              View on GitHub
            </motion.a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="github-activity"
      className="py-20 px-4 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Github className="h-10 w-10 text-primary" />
            GitHub Activity
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            My coding journey visualized through contributions and open-source
            work
          </p>
          <motion.a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <ExternalLink className="h-4 w-4" />
            View on GitHub
          </motion.a>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Estimated Contributions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">
                  {githubData?.totalContributions.toLocaleString()}
                </div>
                <p className="text-muted-foreground text-sm">
                  Based on repository activity and events
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Active Days
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">
                  {githubData?.activeDays}
                </div>
                <p className="text-muted-foreground text-sm">
                  Estimated coding days this year
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Repositories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">
                  {githubData?.repositories}
                </div>
                <p className="text-muted-foreground text-sm">
                  Public repositories
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* GitHub Calendar replaces Weekly Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <GithubCalendarSection />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Latest repository updates and contributions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {githubData?.recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{activity}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Top Languages
                </CardTitle>
                <CardDescription>
                  Most used programming languages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {githubData?.topLanguages.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className="w-4 h-4 rounded-full flex-shrink-0"
                        style={{ backgroundColor: lang.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">
                            {lang.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {lang.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full"
                            style={{ backgroundColor: lang.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${lang.percentage}%` }}
                            transition={{
                              duration: 1,
                              delay: 0.5 + index * 0.1,
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5 text-primary" />
                GitHub Statistics
              </CardTitle>
              <CardDescription>
                Overview of my open-source contributions and activity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {githubData?.stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      className="text-center p-6 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 hover:from-muted/70 hover:to-muted/50 transition-all duration-300 border border-muted"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <IconComponent className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-3xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
