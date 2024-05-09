'use client';
import ArticleHero from "@/components/ArticleHero"
import { motion as m } from "framer-motion";


const page = () => {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}>
            <ArticleHero title="Contattaci" description="" />
        </m.div>

    )
}

export default page
