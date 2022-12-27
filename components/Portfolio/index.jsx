import { Project } from '../Project'
import { PortfolioContainer } from './style'

export function Portfolio({ respositories }) {
  return (
    <PortfolioContainer id="portfolio">
      <ul>
        {respositories.map((repo, index) => {
          return (
            repo.description && (
              <li key={index}>
                <Project
                  title={repo.name}
                  subtitle={repo.description}
                  url={repo.homepage || repo.html_url}
                  thumb="https://imgur.com/uBIom5J"
                />
              </li>
            )
          )
        })}
      </ul>
    </PortfolioContainer>
  )
}
