'use client';
import { motion as m } from "framer-motion";
import ArticleHero from "@/components/ArticleHero"
import ArticleText from "@/components/ArticleText"
import { Bar } from "react-chartjs-2";
import Image from "next/image";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler,
} from 'chart.js';
import TextLeft from "@/components/TextLeft";
import TextRight from "@/components/TextRight";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
        },
    },
};

const dataA = {
    labels: [
        "L'Avvenire", "Il Corriere Della Sera", "Il Fatto Quotidiano", "La Gazzetta Sport", "Il Giornale",
        "Libero", "Il Manifesto", "Il Mattino", "Il Messaggero", "La Repubblica", "Il Sole 24 Ore", "La Stampa", "Tempo", "Verità"
    ],
    datasets: [
        {
            label: 'Diff. Cartacea',
            data: [71929, 242944, 49873, 103257, 31678, 21266, 13210, 23474, 61481, 132896, 117062, 85878, 7743, 36067],
            backgroundColor: '#2a9d8f',
        },
        {
            label: 'DIff. Virtuale',
            data: [6152, 14312, 0, 1539, 0, 0, 0, 43, 69, 0, 14379, 9890, 0, 0],
            backgroundColor: '#e76f51',
        },
    ],
};


const page = () => {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}>
            <ArticleHero title="Chi possiede l'Informazione in Italia?" description="" />
            <ArticleText title="" description="" />
            <div className="graph_container">
                <Bar options={options} data={dataA} />
            </div>

            <div className="lg:px-10 max-container padding-container flex flex-col gap-4 py-10 pb-10  lg:py-20">
                <h2>Big Players della Comunicazione.</h2>
                <p className="description">
                    L'informazione è un tema spigoloso, specialmente in questo periodo in cui giornali e giornalisti vedono alcune
                    libertà venire meno in virtù di fantomatici diritti acquisiti di non intrusione. I mezzi con cui questa acqua
                    limpida chiamata informazione arriva ai nostri schermi e giornali sono le testate giornalistiche, gli editori e
                    i quotidiani, aziende più o meno private che per definizione avranno una proprietà definita. Penso sia
                    interessante analizzare chi siano i grandi giocatori e giocatrici del mondo della comunicazione e televisione
                    italiana per comprendere meglio cosa vuol dire "libera informazione".</p>

                <TextLeft title="GEDI Editore (Exor)" description="GEDI Gruppo Editoriale S.p.a. controlla direttamente La Repubblica e La Stampa, due dei maggiori giornali
                            italiani per vendite, allo stesso tempo gestisce alcune radio tra cui Radio Deejay e Radio Capital. Questa
                            società è a sua volta controllata da Exor e di conseguenza da John Elkann essendone azionista di maggioranza.
                            Tra le altre, Exor controlla anche il The Economist e la Juventus." image="/ReSt.png" />

                <TextRight title="Cairo Communication" description="La Cairo Communication, di proprietà di Cairo Urbano Roberto e fondata
                dallo stesso dopo aver lasciato la società Fininvest, controlla direttamente alcuni settimanali tra cui Di Più e la 
                rete televisiva La 7. Mentre gestisce attraverso la controllata RCS Mediagroup, prima di proprietà della famiglia Agnelli, 
                sia Il Corriere della Sera che La Gazzetta dello Sport." image="/CoGa.png" />

                <TextLeft title="Caltagirone Editore" description="La Caltagirone Editore è di proprietà di Francesco Gaetano Caltagirone
                e controlla Il Messaggero, Il Mattino e Leggo." image="/Me.png" />

                <TextRight title="Tosinvest" description="La società Finanziaria Tosinvest è di proprietà di Antonio Angelucci, deputato
                della Repubblica italiana per la Lega nella coalizione di Centro Destra, ed in 
                generale della famiglia Angelucci, che tra le altre, controlla direttamente Libero e il Tempo, mentre controlla 
                in maniera indiretta attraverso la Fondazione San Raffaele il Giornale. Quest'ultimo è stato acquistato dalla famiglia 
                Berlusconi, in particolare da Paolo Berlusconi, che rimane presidente onorario." image="/GeTeLi.png" />

                <TextLeft title="Monrif" description="La Monrif S.p.a è detenuta per la maggioranza dalla famiglia Monti Riffeser e controlla, 
                oltre ad alcuni giornali locali, il Resto del Carlino. È presente anche nei settori pubblicitari, di stampa industriale e di 
                internet e multimediali." image="/Rc.png" />

                <TextRight title="Confindustria" description="La Confindustria, principale organizzazione sindacale rappresentativa delle imprese manifatturiere e di servizi italiane, 
                raggruppa su base volontaria oltre 150 000 imprese tra cui anche banche e aziende pubbliche. Controlla il giornale
                 il Sole 24 Ore ed anche l'Ateneo romano LUISS Guido Carli." image="/So.png" />

                <TextLeft title="Conferenza Episcopale" description="L'Avvenire è il quarto giornale italiano per diffusione ed è nato dalla fusione 
                di due quotidiani cattolici, si muove nel rispetto della dottrina della Chiesa cattolica ma con una qualche autonomia. È 
                controllat dalla Conferenza Episcopale Italiana, l'assemblea permanente dei vescovi italiani." image="/Avv.png" />





            </div>


        </m.div>
    )
}

export default page