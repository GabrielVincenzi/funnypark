import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

type TextProps = {
    data: any;
    title: string;
}

export default function Carousel({ data, title }: TextProps) {
    const settings = {
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <section className="max-container padding-container py-10 pb-10 md:gap-28 lg:pb-20">
            <h2 className="lg:px-10 lg:bold-52 pb-8">{title}</h2>
            <Slider {...settings}>
                {data.map((d: any) => (
                    <div className="h-80 bg-white-10 rounded p-6 shadow-md" key={d.title}>
                        <h3>{d.title}</h3>
                        <p className="description">{d.description}</p>
                        <Link href={d.link} className="absolute bottom-0 rounded-full p-4 bg-theme-40 text-white hover:bg-theme-50">
                            <Image src='/arrow.svg' alt="arrow" width={50} height={50} />
                        </Link>
                    </div>
                ))}
            </Slider>
        </section>
    );
}