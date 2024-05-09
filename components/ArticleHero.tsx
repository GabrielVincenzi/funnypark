type TextProps = {
    title: string;
    description: string;
}

const ArticleHero = ({ title, description }: TextProps) => {
    return (
        <section className='outer_container text-center'>
            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <h1 className=" lg:bold-100">{title}</h1>
                <p className="description mt-6 lg:px-40 px-10">
                    {description}
                </p>

            </div>
        </section>
    )
}

export default ArticleHero