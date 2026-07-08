'use client';

import Link from 'next/link';
import {
  BookOpen,
  Lightbulb,
  FileText,
  Briefcase,
  Users,
  BookMarked,
  ArrowRight,
} from 'lucide-react';

const resourceCategories = [
  {
    id: 1,
    title: 'Study Tips',
    description: 'Effective learning strategies and study techniques',
    icon: Lightbulb,
    href: '/resources/study-tips',
    color: 'bg-green-50',
  },
  {
    id: 2,
    title: 'Guides',
    description: 'Comprehensive guides for academic success',
    icon: BookOpen,
    href: '/resources/guides',
    color: 'bg-green-100',
  },
  {
    id: 3,
    title: 'Templates',
    description: 'Ready-to-use templates for projects and assignments',
    icon: FileText,
    href: '/resources/templates',
    color: 'bg-green-50',
  },
  {
    id: 4,
    title: 'Career Development',
    description: 'Resources for professional growth and career planning',
    icon: Briefcase,
    href: '/resources/career-development',
    color: 'bg-green-100',
  },
  {
    id: 5,
    title: 'Campus Life',
    description: 'Information about campus activities and student life',
    icon: Users,
    href: '/resources/campus-life',
    color: 'bg-green-50',
  },
  {
    id: 6,
    title: 'E-books & Articles',
    description: 'Digital books and articles for further reading',
    icon: BookMarked,
    href: '/resources/ebooks-articles',
    color: 'bg-green-100',
  },
];

const featuredResources = [
  {
    id: 1,
    title: 'How to Master Time Management',
    category: 'Study Tips',
    description: 'Learn proven techniques to organize your time effectively',
    date: 'March 15, 2024',
    href: '/resources/study-tips/time-management',
  },
  {
    id: 2,
    title: 'Resume Writing Guide 2024',
    category: 'Career Development',
    description: 'Step-by-step guide to creating an impressive resume',
    date: 'March 10, 2024',
    href: '/resources/career-development/resume-guide',
  },
  {
    id: 3,
    title: 'Research Paper Template',
    category: 'Templates',
    description: 'Professional template for academic research papers',
    date: 'March 8, 2024',
    href: '/resources/templates/research-paper',
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-neutral-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 px-6 py-12 text-neutral-0 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold md:text-5xl">Resource Centre</h1>
          <p className="mt-4 max-w-2xl text-base text-green-100 md:text-lg">
            Access useful resources to support your academic and personal development. From study tips to career
            guides, find everything you need to succeed.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-ink md:text-3xl">Browse by Category</h2>
            <div className="mt-2 h-1 w-16 bg-green-600"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.id}
                  href={category.href}
                  className="group flex flex-col rounded-lg border border-neutral-200 p-6 transition-all duration-300 hover:border-green-600 hover:shadow-lg"
                >
                  <div className={`mb-4 inline-flex w-12 items-center justify-center rounded-lg ${category.color}`}>
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink group-hover:text-green-600">{category.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{category.description}</p>
                  <div className="mt-4 flex items-center text-green-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="bg-neutral-50 px-6 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-ink md:text-3xl">Featured Resources</h2>
            <div className="mt-2 h-1 w-16 bg-green-600"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((resource) => (
              <Link
                key={resource.id}
                href={resource.href}
                className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-neutral-0 transition-all duration-300 hover:border-green-600 hover:shadow-lg"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 inline-block">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-ink group-hover:text-green-600">{resource.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink-muted">{resource.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-ink-muted">{resource.date}</span>
                    <ArrowRight className="h-4 w-4 text-green-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-ink md:text-3xl">Looking for more resources?</h2>
          <p className="mt-4 text-ink-muted">Explore our complete library of resources</p>
          <Link
            href="/resources/all"
            className="mt-8 inline-flex items-center rounded-lg bg-green-600 px-8 py-3 font-semibold text-neutral-0 transition-all duration-300 hover:bg-green-700 active:bg-green-800"
          >
            View All Resources
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
