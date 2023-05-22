import { FC } from "react"
import { blogCardClassNames } from "./blogCardClassNames";
import Image from "next/image";

interface BlogCardProps {
    image: string;
    title: string;
    description: string;
    author: string;
    date: string;
}

const BlogCard: FC<BlogCardProps> = (props) => {
    const { image, title, description, author, date } = props;

    return <>
        <div className={blogCardClassNames.card}>
            <div className={blogCardClassNames.imageContainer}>
                <Image width={100} height={100} className={blogCardClassNames.image} src={image} alt={title} />
            </div>
            <div className={blogCardClassNames.textContainer}>
                <h2 className={blogCardClassNames.title}>{title}</h2>
                <p className={blogCardClassNames.description}>{description.slice(0, 200)}...</p>
                <div className={blogCardClassNames.metaContainer}>
                    <p className={blogCardClassNames.author}>By {author}</p>
                    <p className={blogCardClassNames.date}>{date}</p>
                </div>
            </div>
        </div>
    </>
}

export default BlogCard