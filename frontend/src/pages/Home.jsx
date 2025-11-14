import React from 'react'
import { Link } from 'react-router-dom'
import SubscriptionCTA from '../components/SubscriptionCTA'

const features = [
  {
    title: 'Unified Market View',
    description:
      'Monitor tokens, NFTs, and DeFi pools with live prices, curated watchlists, and personalized alerts.',
    accent: 'bg-blue-100',
  },
  {
    title: 'Institutional-Grade Insights',
    description:
      'Access on-chain analytics, liquidity depth, and volume shifts powered by real-time intelligence.',
    accent: 'bg-indigo-100',
  },
  {
    title: 'Automated Risk Signals',
    description:
      'Know when to enter or exit positions with sentiment tracking and exchange inflow analysis.',
    accent: 'bg-sky-100',
  },
]

const highlights = [
  'Coverage across 25+ chains and major exchanges',
  'Built-in compliance dashboards for safer trading',
  'Collaborative watchlists for your entire team',
]

const valuePillars = [
  {
    label: 'Real-Time Speed',
    body: 'Low-latency feeds keep you ahead of market swings with second-level updates.',
  },
  {
    label: 'Actionable Intelligence',
    body: 'Blend technical indicators with curated research to validate every move.',
  },
  {
    label: 'Secure & Private',
    body: 'Enterprise-grade encryption and granular roles secure your data and workflows.',
  },
]

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      <main className="relative overflow-hidden">
        <div className="absolute -top-24 -right-10 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-80" aria-hidden />
        <div className="absolute -bottom-40 -left-10 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" aria-hidden />

        <section className="relative mx-auto flex max-w-6xl flex-col px-6 pb-20 pt-16 sm:px-8 sm:pt-20 lg:flex-row lg:items-center">
          <div className="max-w-4xl flex-1">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              Built for crypto teams that move fast
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              See the market through the <span className="text-blue-600">CoinLens</span> perspective
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:text-xl">
              CoinLens aggregates live blockchain data, sentiment signals, and trading workflows into a single command center so you never miss an opportunity.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
              >
                Start for free
              </Link>
              <Link
                to="/tokens"
                className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 text-base font-semibold text-blue-600 transition-colors duration-200 hover:border-blue-300 hover:text-blue-700"
              >
                Explore tokens
              </Link>
            </div>
            <ul className="mt-10 grid gap-4 text-sm text-gray-600 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-600">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block relative w-[45%]">
            <img src="/crypto.png" alt="" />
          </div>
        </section>

        <section className="relative bg-white/80 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">Everything you need</span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">All-in-one workflow for digital asset intelligence</h2>
              <p className="mt-4 text-base text-gray-600">
                Replace fragmented spreadsheets and dashboards with a shared workspace designed for analysts, traders, and research teams.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ title, description, accent }) => (
                <article
                  key={title}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
                >
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-blue-600 ${accent}`}>
                    ★
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                  <div className="mt-auto pt-2 text-sm font-semibold text-blue-600">Learn more →</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Confidence to act when the market moves</h2>
              <p className="mt-4 text-base text-gray-600">
                Build conviction with real-time risk signals, sentiment analytics, and automated workflows that notify your desks instantly across every channel.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {valuePillars.map(({ label, body }) => (
                  <div key={label} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                    <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">{label}</span>
                    <p className="mt-3 text-sm text-gray-600">{body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-blue-100 bg-white/90 p-8 shadow-lg backdrop-blur">
              <h3 className="text-xl font-semibold text-gray-900">Live community sentiment</h3>
              <p className="mt-3 text-sm text-gray-600">
                We aggregate Telegram, X, Discord, and on-chain chatter into a single sentiment index so you can document and share conviction in minutes.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    title: 'Emerging Narratives',
                    detail: 'Surfacing DeFi, NFT, and Layer 2 stories with traction before they trend.',
                  },
                  {
                    title: 'Alpha Channels',
                    detail: 'Pick up validated insights from curated analysts and trading desks.',
                  },
                  {
                    title: 'Alert Automations',
                    detail: 'Trigger Slack, email, and in-app workflows the moment thresholds are met.',
                  },
                ].map(({ title, detail }) => (
                  <div key={title} className="rounded-xl border border-blue-100 bg-blue-50/50 p-4">
                    <p className="text-sm font-semibold text-blue-700">{title}</p>
                    <p className="mt-1 text-xs text-gray-600">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-white py-16 sm:py-20">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center sm:px-8">
            <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">Ready to explore?</span>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Start your 14-day free trial and uncover the next market-moving signal
            </h2>
            <p className="max-w-3xl text-base text-gray-600">
              Empower your research, trading, and compliance teams with a shared source of truth. Join thousands of professionals already using CoinLens to build confident strategies.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
              >
                Create account
              </Link>
              <Link
                to="/watchlist"
                className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 text-base font-semibold text-blue-600 transition-colors duration-200 hover:border-blue-300 hover:text-blue-700"
              >
                View demo workspace
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home