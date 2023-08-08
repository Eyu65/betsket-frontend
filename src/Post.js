import {formatISO9075} from 'date-fns';
import { Link } from 'react-router-dom';

function Post({title, _id, summary, cover, content, author, createdAt}) {
    return(
        <div className='post'>
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={'http://localhost:4000/'+cover}/>
          </Link>
        </div>
        <div className="texts">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p className="info">
            <a className="author">{author? author.username: ""}</a>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    )
}

export default Post;