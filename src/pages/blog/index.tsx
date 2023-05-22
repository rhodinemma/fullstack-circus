const Blog = () => {
    return <>
        <section className={blogSectionClasses.container}>
            <h2 className={blogSectionClasses.heading}>Blog</h2>
            <p className={blogSectionClasses.subheading}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

            <div className={blogSectionClasses.categoriesContainer}>
                { }
            </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
            { }
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