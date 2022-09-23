import React from 'react'
import { WorkHistoryEntry } from './components'

export const WorkHistory = () => {
  return (
    <div className="WorkHistory">
      <WorkHistoryEntry
        title="Software Engineer III"
        dates="July 2021 - present"
        company="Availity, LLC, Jacksonville, FL (remote)"
        bullets={[
          'Migration of web applications from Angular to React',
          'Initiated formation of a "Frontend Committee" to help drive frontend standards and guide development of shared resources across 40+ scrum teams',
        ]}
      />
      <WorkHistoryEntry
        title="Mid-level Frontend Developer"
        dates="Feb 2019 - July 2021"
        company="El Toro IP Targeting, Louisville, KY"
        bullets={[
          'Built web applications using React, TypeScript, GraphQL and Apollo',
          'Extrapolated app designs from user flows and wireframes from UX',
          'Built highly decoupled, composable components with thoughtful APIs',
          'Initiated a shift toward monorepo-based development with libraries shared across multiple applications',
        ]}
      />
      <WorkHistoryEntry
        title="Junior Web Developer"
        dates="Jan 2018 - Jan 2019"
        company="SkuVault, Louisville, KY"
        bullets={[
          'Designed and built a high volume marketing website',
          "Assist in design work for the company's web app",
          'Developed branding guidelines and marketing materials',
        ]}
      />
      <WorkHistoryEntry
        title="Digitech / Retoucher"
        dates="2014 - 2017"
        company="Amazon Product Imaging Studios, Louisville, KY"
        bullets={[
          'Ensured consistent style and color accuracy for imagery across numerous photography sets',
          'Executed multiple self-initiated projects totaling over $176,000 in annual cost savings.',
        ]}
      />
      <WorkHistoryEntry
        title="Photographer / Designer (Self-Employed)"
        dates="2006 - 2014"
        company="Daniel Pickett Photography, Bloomington, IN"
        bullets={[
          'Photography, sales, marketing, design, branding, client relations, employee training, intern mentoring, workflow planning, photography workshops, public speaking',
        ]}
      />
    </div>
  )
}
