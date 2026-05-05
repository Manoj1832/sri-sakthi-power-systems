import './sections.css'

export type ProjectFilter = 'All' | 'On-Grid' | 'Hybrid' | 'Solar Pump' | 'Street Light'

interface ProjectFiltersProps {
  activeFilter: ProjectFilter
  onFilterChange: (filter: ProjectFilter) => void
}

const filters: ProjectFilter[] = ['All', 'On-Grid', 'Hybrid', 'Solar Pump', 'Street Light']

export default function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    <div className="project-filters">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`project-filter-pill${activeFilter === filter ? ' active' : ''}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}