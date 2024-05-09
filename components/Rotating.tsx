import { useScroll, useTransform } from 'framer-motion';
import { motion as m } from 'framer-motion';
import Image from 'next/image';

function Rotating() {
    const { scrollYProgress } = useScroll();
    const rotate = useTransform(scrollYProgress, [0, 1], [40, 0]);

    return (
        <m.div className='absolute m-auto -top-[400px] md:-top-[600px] lg:-top-[800px]' style={{ rotate: rotate }}>
            <Image className='' src='/wheel.png' alt="stamp" width={5000} height={5000} />
        </m.div>
    )
}

export default Rotating
