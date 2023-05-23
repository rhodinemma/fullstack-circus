import Image from "next/image";

const BlogItem = () => {
    return (
        <>
            <div className={classNames.hero}>
                <div className={classNames.heroOverlay}>
                    <div className={classNames.heroContent}>
                        <div className="lg:w-3/4">
                            <h1 className={classNames.title}>Blog Post Title</h1>
                            <p className={classNames.subtitle}>A short subtitlee that provides more context about the blog post.</p>
                            <div className={classNames.author}>
                                <Image src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="author" width={200} height={200} className={classNames.authorAvatar} />
                                <p className={classNames.authorName}>John Doe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classNames.blogContentWrapper}>
                <div className={classNames.blogImageWrapper}>
                    <Image src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" width={200} height={200} alt="Blog image" className={classNames.blogImage} />
                </div>
                <div className={classNames.blogMainContent}>
                    <h2 className={classNames.blogTitle}>
                        Blog Title
                    </h2>
                    <p className={classNames.blogDate}>June 1, 2023</p>
                    <p className={classNames.blogText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas saepe fuga explicabo obcaecati corrupti recusandae voluptatem voluptates ullam voluptatum, dolorum qui, illo cum minima sint. Possimus distinctio delectus ab?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat iste illum esse ratione! Odio sapiente voluptas nemo rem saepe at sequi quisquam, temporibus minima, magni error voluptatum quidem veniam fuga!
                        dolor sit amet consectetur adipisicing elit. Fugiat iste illum esse ratione! Odio sapiente voluptas nemo rem saepe at sequi quisquam, temporibus minima, magni error voluptatum quidem veniam fuga!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quaerat quae, dignissimos ratione voluptatibus quibusdam numquam et ipsum totam incidunt deleniti quia facere mollitia deserunt quasi omnis nisi. Non, nisi.
                    </p>
                </div>
            </div>
        </>
    )
}

export default BlogItem

const classNames = {
    hero: "relative py-10 md:py-20 bg-[url('/image/trending.png')]",
    heroOverlay:
        "absolute inset-0 bg-gradient-to-b from-primary-dark to-transparent opacity-80",
    heroContent:
        "relative max-w-screen-xl mx-auto px-4 py-8 md:py-12 lg:px-8 lg:py-20",
    title:
        "text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white",
    subtitle: "mt-2 md:mt-4 max-w-3xl text-sm md:text-xl text-gray-300",
    author: "mt-4 md:mt-6 flex items-center",
    authorAvatar:
        "flex-shrink-0 object-cover h-8 md:h-10 w-8 md:w-10 rounded-full",
    authorName: "ml-2 md:ml-3 text-sm md:text-xl font-medium text-white",
    blogContentWrapper:
        "flex flex-col justify-between max-w-7xl mx-auto mt-12 py-12 px-4 sm:px-6 lg:flex-row lg:px-8",
    blogImageWrapper: "w-full lg:w-1/3",
    blogImage:
        "w-full h-full object-cover rounded-lg hover:translate-y-2 transition-all duration-500",
    blogMainContent: "w-full lg:w-2/3 mt-6 lg:mt-0 lg:pl-8",
    blogTitle: "text-3xl font-bold text-gray-300",
    blogDate: "mt-2 text-gray-200 text-sm",
    blogText: "mt-4 text-gray-200 leading-7",
};

const blogCategories = [
    {
        name: "Technology",
        image:
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description:
            "Explore the latest advancements in technology and discover how they impact our lives.",
    },
    {
        name: "Travel",
        image:
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description:
            "Experience new cultures, discover hidden gems, and plan your next adventure with our travel guides.",
    },
    {
        name: "Food",
        image:
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description:
            "Find inspiration for your next meal, learn new recipes, and explore different cuisines from around the world.",
    },
];