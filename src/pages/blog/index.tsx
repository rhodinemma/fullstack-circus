import BlogCard from "@/components/BlogCard/BlogCard";
import { useEffect, useState } from "react";

const Blog = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        async function fetchBlogData() {
            const res = await fetch("/api/blog");
            const data = await res.json();
            setBlogData(data);
            console.log(data)
        }

        fetchBlogData();
    }, [])

    return <>
        <section className={blogSectionClasses.container}>
            <h2 className={blogSectionClasses.heading}>Blog</h2>
            <p className={blogSectionClasses.subheading}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

            <div className={blogSectionClasses.categoriesContainer}>
                { }
            </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
            {blogData?.map((blog: any) => (
                <BlogCard key={blog.title} author={blog.author} date={blog.date} description={blog.description} image={blog.image} title={blog.title} />
            ))}
        </div>
    </>
}

export default Blog

const blogSectionClasses = {
    container: "pb-8 pt-40 text-primary-dark px-4 lg:px-36",
    heading: "text-4xl font-bold mb-6",
    subheading: "text-gray-200 text-lg mb-12",
    categoriesContainer:
        "flex flex-col lg:flex-row gap-8 justify-between items-center",
};