import { Link } from 'react-router-dom'

const TagList = ({ tags }) => {
  return tags.map((tag) => (
    <li key={tag.id} className="inline-block mx-1">
      <Link
        to={`/tags/${tag.name}`}
        className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-800 px-2 py-1 mb-1 rounded"
      >
        {tag.name}
      </Link>
    </li>
  ))
}

export default TagList