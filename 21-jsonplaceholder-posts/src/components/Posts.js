import React from 'react'
import Post from './Post'
import { useEffect, useState } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => setError(error.message))
      .finally(setIsLoading(false))
  }, [])

  if (error) return <h1> {error} </h1>

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((el) => <Post key={el.id} {...el} />)
      )}
    </>
  )
}

export default Posts
