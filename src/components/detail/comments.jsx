import { useEffect, useState } from "react";
import Spinner from "../loader/spinner";
import api from "../../utils/api";

const Comments = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setLoading(true);
    api
      .get("/comments", { params: { id } })
      .then((res) => setComments(res.data.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner designs="my-20" />;

  return (
    <div className="space-y-4">
      {comments.map((comment, id) => (
        <div key={id} className="flex gap-3 items-start">
          {/* Profile photo */}
          <img
            src={comment.authorThumbnail?.[0]?.url}
            alt={comment.authorText}
            className="w-10 h-10 rounded-full"
          />
          <div>
            {/* User name */}
            <p className="text-gray-400 mb-1">{comment.authorText}</p>
            {/* Comments text */}
            <p className="line-clamp-2">{comment.textDisplay}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
