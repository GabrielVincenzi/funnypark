type TextProps = {
    title: string;
    description: string;
}

const ArticleText = ({ title, description }: TextProps) => {
    return (
        <div className="outer_container">
            <div className='text-left relative flex flex-1 flex-col xl:w-1/2 gap-4'>
                <h2 className="lg:bold-52">{title}</h2>
                <p className="description mt-6 lg:pr-40">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ArticleText