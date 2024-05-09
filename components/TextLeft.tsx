import Image from "next/image"

type TextProps = {
    title: string;
    description: string;
    image: string;
}

const TextLeft = ({ title, description, image }: TextProps) => {
    return (
        <div className="outer_container">
            <div className='text-left relative flex flex-1 flex-col xl:w-1/2'>
                <h3 className="lg:bold-40">{title}</h3>
                <p className="description mt-6 pr-5 lg:pr-40">{description}</p>
            </div>

            <Image src={image} alt="" width={500} height={500} />
        </div>
    )
}

export default TextLeft
