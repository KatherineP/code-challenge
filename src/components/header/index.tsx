import React from 'react'

import styles from './header.module.css'

interface HeaderProps {
  onTabClick(tabName: string): void
  tabName: string
}

const Header: React.FC<HeaderProps> = ({ onTabClick, tabName }) => {
  const tabs = [
    {
      id: 'recentlyAdded',
      title: 'Recently Added',
    },
    {
      id: 'favorited',
      title: 'Favorited',
    },
  ]
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Photos</h1>
      <nav className={styles.tabs}>
        {tabs.map((tab) => (
          <React.Fragment key={tab.id}>
            <input
              type='radio'
              className={styles.tab}
              name={tab.id}
              id={tab.id}
              onChange={() => onTabClick(tab.id)}
              checked={tabName === tab.id}
            />
            <label htmlFor={tab.id} className={styles.tabLabel}>
              {tab.title}
            </label>
          </React.Fragment>
        ))}
      </nav>
    </header>
  )
}

export default Header
