import BlogCard from "@/components/BlogCard/BlogCard";
import { NextPageContext } from "next";
import { useEffect, useState } from "react";

const Blog = (props: any) => {
    const { blogContent } = props;
    // const [blogData, setBlogData] = useState([]);

    // useEffect(() => {
    //     async function fetchBlogData() {
    //         const res = await fetch("/api/blog");
    //         const data = await res.json();
    //         setBlogData(data);
    //         console.log(data)
    //     }

    //     fetchBlogData();
    // }, [])

    return <>
        <section className={blogSectionClasses.container}>
            <h2 className={blogSectionClasses.heading}>Blog</h2>
            <p className={blogSectionClasses.subheading}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

            <div className={blogSectionClasses.categoriesContainer}>
                { }
            </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
            {blogContent.map((blog: any) => (
                <BlogCard key={blog.title} author={blog.author} date={blog.date} description={blog.description} image={blog.image} title={blog.title} />
            ))}
        </div>
    </>
}

export default Blog

export async function getStaticProps(context: NextPageContext) {
    const blogContent = [
        {
            image:
                "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "Lorem ipsum dolor sit amet",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada velit eu enim facilisis, at varius nulla congue. Vestibulum pharetra urna euismod, hendrerit dolor eget, bibendum purus.",
            author: "John Doe",
            date: "April 25, 2023",
        },
        {
            image:
                "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "Praesent id velit nec felis congue suscipit eu et ipsum",
            description:
                "Praesent id velit nec felis congue suscipit eu et ipsum. Aliquam congue mi eu urna efficitur vestibulum. Donec euismod, ex ut suscipit tristique, nibh nibh venenatis nulla, quis aliquam neque ex a nunc.",
            author: "Jane Smith",
            date: "April 23, 2023",
        },
        {
            image:
                "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "Etiam cursus dui a neque vulputate consectetur",
            description:
                "Etiam cursus dui a neque vulputate consectetur. In ultrices eros quis enim consectetur, vitae gravida tellus hendrerit. Ut vel efficitur sapien. Sed rhoncus hendrerit sapien vitae venenatis.",
            author: "Mike Johnson",
            date: "April 20, 2023",
        },
        {
            image:
                "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title:
                "Suspendisse potenti. Fusce fermentum lorem et est elementum, a pharetra turpis tincidunt.",
            description:
                "Suspendisse potenti. Fusce fermentum lorem et est elementum, a pharetra turpis tincidunt. Nam porttitor nisi nec leo molestie, eu ullamcorper velit malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce vel velit eget elit lobortis elementum non eget elit.",
            author: "Sarah Lee",
            date: "April 18, 2023",
        },
    ];

    return {
        props: {
            blogContent,
        }
    }
}

const blogSectionClasses = {
    container: "pb-8 pt-40 text-primary-dark px-4 lg:px-36",
    heading: "text-4xl font-bold mb-6",
    subheading: "text-gray-200 text-lg mb-12",
    categoriesContainer:
        "flex flex-col lg:flex-row gap-8 justify-between items-center",
};