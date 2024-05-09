'use client';
import ArticleHero from "@/components/ArticleHero"
import { motion as m } from "framer-motion";


const Contact = () => {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}>
            <ArticleHero title="Contattaci" description="" />
        </m.div>

    )
}

export default Contact