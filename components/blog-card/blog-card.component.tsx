type BlogCardProps = {
    blog: {
        staticImageName: string;
        title: string;
        topic: string;
        link: string;
        date: string;
        description: string;
    }
}


const BlogCard = ({ blog }: BlogCardProps) => {

    const {
        staticImageName,
        title, 
        topic,
        link,
        date,
        description
    } = blog;





    return(
        <a href={link} target="_blank" className="relative blog-card border flex flex-col h-96 w-80 min-w-[240px]">
            <div className="relative transition duration-500 h-full flex justify-start overflow-hidden">
                <div className={`transition duration-500 h-full w-full  blog-image bg-${staticImageName || 'graybg'} bg-cover object-top`}/>
                <span className="absolute left-0 bottom-0 uppercase py-2 px-3 bg-darkblue-0 text-sm font-medium text-white">{topic}</span>
            </div>
            <div className=" increase-height transition-[height] duration-500  h-36 pb-12 p-7 bg-white w-full overflow-hidden">
                <h4 className="mb-4 text-xl font-semibold text-gray-title">{title}</h4>
                <p className="transition duration-500 text-gray-text">{description}</p>
                <div className="absolute bottom-0 left-0 w-full h-16 flex items-center px-7 z-10 bg-white text-gray-text">
                    <span>{date}</span>
                </div>
            </div>
        </a>
    )
}

export default BlogCard;