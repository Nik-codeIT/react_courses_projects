import React from 'react'
import Post from './Post'
import { useEffect, useState } from 'react'

const Posts = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/posts'
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL)
        const posts = await res.json()
        setPosts(posts)
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((json) => setPosts(json))
  //     .catch((error) => setError(error.message))
  //     .finally(setIsLoading(false))
  //UseEffect должен возвращать либо колбек либо undefined и не может возвращать promise, async - всегда возвращает promise, ниже пример колбека, сверху пример undefined, колбек - например(при unmount)
  // return () => {
  //   console.log(123)
  // }
  // }, [])

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
