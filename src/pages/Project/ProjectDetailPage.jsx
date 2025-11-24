import { Link, useParams } from "react-router-dom";

export default function ProjectDetailPage() {
    const { id } = useParams();
    return <Link to={`/projects/${id}/overview`} replace />;
}
