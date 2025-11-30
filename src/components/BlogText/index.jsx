import { BlogWrapper } from "./styledBlogText";

export default function BlogText({ content }) {
    return (
        <BlogWrapper>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </BlogWrapper>
    );
}
