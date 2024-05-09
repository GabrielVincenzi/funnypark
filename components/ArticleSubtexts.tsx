type TextProps = {
    title: string;
    description: string;
    subtitle1: string;
    subtitle2: string;
    description1: string;
    description2: string;
}

const ArticleSubtexts = ({ title, description, description1, description2, subtitle1, subtitle2 }: TextProps) => {
    return (
        <div className="lg:px-10 max-container padding-container flex flex-col gap-20 pt-10 pb-10 md:gap-28 lg:pt-20 xl:flex-row">
            <div className='text-left relative flex flex-1 flex-col xl:w-1/2 gap-4'>
                <h2 className="lg:bold-52">{title}</h2>
                <p className="description mt-6 lg:pr-40">
                    {description}
                </p>
                <div className="lg:px-10 max-container padding-container flex flex-col lg:flex-row gap-10 pb-10">
                    <div className="flex-grow-1">
                        <h3 className="text-gray-30">{subtitle1}</h3>
                        <p className="description">
                            {description1}
                        </p>

                    </div>
                    <div className="flex-grow-1">
                        <h3 className="text-gray-30">{subtitle2}</h3>
                        <p className="description">
                            {description2}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleSubtexts