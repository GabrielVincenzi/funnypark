type TextProps = {
    title: string;
    description: string;
}

const Hero = ({ title, description }: TextProps) => {
    return (
        <section className='outer_container lg:pb-96'>
            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2 text-center'>
                <h1 className="lg:bold-200 text-gray-10">{title}</h1>
                <p className="regular-20 text-gray-20 pb-6 mt-6">
                    {description}
                </p>

            </div>
        </section>
    )
}

export default Hero