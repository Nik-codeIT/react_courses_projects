import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import queryString from 'query-string'
import courses from '../data/courses'

const SORT_KEYS = ['slug', 'title', 'id']

function sortCourses(courses, key) {
  const sortedCourses = [...courses]
  if (!key || !SORT_KEYS.includes(key)) return sortedCourses
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedCourses
}

const Courses = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const query = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  )
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      setSortKey()
      setSortedCourses([...courses])
      navigate('.')
    }
  }, [sortKey, navigate])
  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link className="courseLink" to={course.slug}>
            <h1>{course.title}</h1>
          </Link>
        </div>
      ))}
    </>
  )
}

export default Courses
