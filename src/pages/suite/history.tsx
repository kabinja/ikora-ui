import React from 'react'
import { useParams } from 'react-router-dom'

const SuiteHistory: React.FC = () => {
  const { id } = useParams()
  return <h1>Test History {id}</h1>
}

export default SuiteHistory
