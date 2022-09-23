import React from 'react'
import {
  Skills,
  Avatar,
  Spacer,
  NameAndTitle,
  ResourceLink,
  EducationEntry,
  List,
  WorkHistory,
} from './components'

export const Resume = () => (
  <div className="Resume">
    <main className="Resume__main-content">
      <header className="Resume__header">
        <Avatar />
        <NameAndTitle />
      </header>
      {/* <h2>Skills</h2> */}
      <Spacer size="2rem" />
      <Skills
        skills={[
          'React',
          'TypeScript',
          'Component Libraries',
          'Design Systems',
          'Developer Experience',
          'Monorepos',
          'Design',
        ]}
      />

      <Spacer size="1.5rem" />
      <WorkHistory />

      <Spacer size="1.5rem" />
      <div className="Resume__divider" />
      <ResourceLink
        resource="Core Beliefs"
        link="https://github.com/danielpickett/core-beliefs"
      />
      <ResourceLink
        resource="Book List"
        link="https://github.com/danielpickett/book-list"
      />
    </main>
    <aside className="Resume__sidebar">
      <Spacer />
      <section className="Resume__contact-links">
        <a href="https://github.com/danielpickett">github.com/danielpickett</a>
        <a href="mailto:daniel@danielpickett.me">daniel@danielpickett.me</a>
        <a href="tel:18123366000">(812) 336-6000</a>
      </section>

      <Spacer />

      <h2>How my wife describes me</h2>
      <List
        items={[
          'Self-motivated',
          'Unrelenting determination to learn',
          'Easy-going',
          'Committed to quality',
          'A good team player',
          'No-drama',
          'A natural mentor',
          'An uncompromising advocate for the user',
          'Repetitive wardrobe',
        ]}
      />
      <Spacer size="1rem" />
      <h2>Education</h2>
      <EducationEntry
        name="Code Louisville"
        subjects={[
          'Frontend Web Development',
          'Advanced JavaScript',
          'React',
          'Python for Data Science',
        ]}
        dates="2018 - 2019"
      />
      <EducationEntry
        name="Andrews University"
        subjects={['J.N. Andrews Honors Scholar']}
        dates="2004 - 2007"
      />
    </aside>
  </div>
)
