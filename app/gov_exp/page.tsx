'use client';
import { motion as m } from "framer-motion";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import ArticleHero from "@/components/ArticleHero";
import ArticleText from "@/components/ArticleText";

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

export const options = {
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

export const dataA = {
    labels: [
        2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
        2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021
    ],
    datasets: [
        {
            label: 'Transazioni sul Debito',
            data: [
                12.98, 11.83, 10.65, 10.32, 10.03, 9.65, 10.39, 10.46, 9.00, 8.97,
                9.76, 10.54, 9.85, 9.38, 8.56, 8.39, 8.14, 7.93, 7.33, 6.43, 6.80
            ],
            borderColor: '#2a9d8f',
            backgroundColor: '#2a9d8f',
        },
        {
            label: 'Difesa',
            data: [
                2.47, 2.45, 2.65, 2.72, 2.68, 2.53, 2.55, 2.74, 2.92, 2.74,
                2.78, 2.54, 2.40, 2.34, 2.37, 2.64, 2.63, 2.59, 2.60, 2.39, 2.51
            ],
            borderColor: '#264653',
            backgroundColor: '#264653',
        },
        {
            label: 'Salute',
            data: [
                12.95, 13.38, 13.25, 14.04, 14.44, 14.44, 14.28, 14.65, 14.52, 14.79,
                14.46, 14.06, 13.97, 14.01, 13.97, 14.08, 13.98, 14.08, 14.04, 13.85, 13.74
            ],
            borderColor: '#e9c46a',
            backgroundColor: '#e9c46a',
        },
        {
            label: 'Educazione',
            data: [
                9.33, 9.50, 9.63, 9.22, 9.41, 9.15, 9.45, 8.96, 8.86, 8.71,
                8.26, 8.02, 8.02, 7.94, 7.95, 7.86, 7.92, 8.11, 8.05, 7.49, 7.44
            ],
            borderColor: '#f4a261',
            backgroundColor: '#f4a261',
        },
        {
            label: 'Pensioni',
            data: [
                23.98, 23.61, 24.52, 24.77, 24.76, 24.62, 25.42, 25.63, 25.74, 26.61,
                26.94, 26.79, 27.21, 26.98, 27.27, 27.31, 27.27, 27.48, 27.95, 26.58, 25.89
            ],
            borderColor: '#e76f51',
            backgroundColor: '#e76f51',
        },
        {
            label: 'Protezione Sociale',
            data: [
                35.03, 34.78, 36.16, 36.51, 36.36, 36.10, 37.19, 37.58, 38.59, 39.43,
                39.74, 40.04, 41.04, 41.53, 42.29, 42.54, 42.43, 42.69, 43.43, 44.16, 42.24
            ],
            borderColor: '#780000',
            backgroundColor: '#780000',
        }
    ],
};

export const dataB = {
    labels: ['Transazioni sul Debito', 'Difesa', 'Salute', 'Educazione', 'Protezione Sociale', 'Affari Economici', 'Ricerca Base', 'Giustizia', 'Pubblica Amm.', 'Ambiente'],
    datasets: [
        {
            label: '% sul Totale',
            data: [6.80, 2.51, 13.74, 7.44, 42.24, 11.84, 0.92, 4.69, 14.65, 1.72],
            backgroundColor: [
                '#2a9d8f',
                '#264653',
                '#e9c46a',
                '#f4a261',
                '#780000',
                '#d4a373',
                '#cdb4db',
                '#ffc8dd',
                '#b8c0ff',
                '#b5e48c',

            ],
            borderWidth: 1,
        },
    ],
};

export const dataC = {
    labels: ['Transazioni sul Debito', 'Ambiente', 'Salute', 'Istruzione', 'Protezione Sociale', 'Pensioni', 'Disoccupazione', 'Ricerca Base'],
    datasets: [
        {
            label: 'Italia',
            data: [3.68, 0.93, 7.43, 4.02, 22.86, 14.01, 1.51, 0.50],
            backgroundColor: '#2a9d8f',
        },
        {
            label: 'Germania',
            data: [0.62, 0.57, 8.6, 4.51, 20.81, 9.96, 1.96, 1.05],
            backgroundColor: '#264653',
        },
        {
            label: 'Francia',
            data: [1.51, 1.04, 9.21, 5.24, 24.74, 13.21, 2.33, 0.29],
            backgroundColor: '#e9c46a',
        },
        {
            label: 'Spagna',
            data: [2.20, 1.0, 7.25, 4.55, 20.33, 10.59, 2.62, 0.51],
            backgroundColor: '#e76f51',
        },
    ],
};

export const dataD = {
    labels: [
        1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004,
        2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
    ],
    datasets: [
        {
            label: 'Entrate',
            data: [
                44.4, 44.9, 46.5, 45.2, 45.4, 44.1, 44.1, 43.8, 44.0, 43.4, 43.2, 44.2, 45.4, 45.3, 46.0,
                45.7, 45.6, 47.6, 48.1, 47.9, 47.8, 46.7, 46.3, 46.2, 47.0, 47.4, 47.5, 47.7, 47.8
            ],
            fill: false,
            borderColor: '#2a9d8f',
            backgroundColor: '#2a9d8f',
        },
        {
            label: 'Uscite',
            data: [
                51.6, 51.5, 49.5, 48.2, 47.2, 46.5, 47.3, 46.7, 47.2, 46.9, 47.2, 47.8, 46.8, 47.8, 51.1,
                49.9, 49.2, 50.6, 51.0, 50.9, 50.3, 49.1, 48.8, 48.4, 48.5, 56.8, 56.3, 56.3, 55.2
            ],
            fill: {
                target: '-1',
                above: 'rgba(233, 196, 106, 0.5)',
            },
            borderColor: '#e76f51',
            backgroundColor: '#e76f51',
        }
    ],
}


export default function GovExpenditure() {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}>
            <ArticleHero title="Bilancio dello Stato" description="Ogni giorno sentiamo discutere di come spendere le risorse del Paese, dove c'è carenza e dove c'è spreco, in quali aree o settori sarebbe melio spendere.
                        Ma se non sappiamo come funzione il Bilancio dello Stato facciamo fatica a stare al passo con il discorso e nella maggior parte dei casi
                        non diamo il giusto peso alle parole. Oggi cercheremo di dare un quadro generale e allo stesso tempo specifico, del sistema Stato e
                        di come questo raccolga e sfrutti le risorse."/>

            <div className="lg:px-10 max-container padding-container flex flex-col gap-4 py-10 pb-10  lg:py-20">
                <h2>Entrate e Uscite.</h2>
                <p className="description">
                    Lo Stato non è una scatola chiusa incomprensibile, per questo possiamo cercare di capire come funzione. Pensiamo per esempio
                    alla nostra quotidianità: se vogliamo mangiare un gelato dobbiamo avere qualcosa in tasca, uno stipendio o qualche
                    soldo da sotto il letto. In caso contrario si va a chiedere a qualcuno di prestarci dei soldi. Allo stesso modo funziona
                    uno Stato, ha entrate, uscite e se le entrate non bastano si indebita. Se le entrate superano le uscite, si verifica un avanzo di bilancio.
                    Questo può essere utilizzato per ridurre il debito pubblico, investire in progetti a lungo termine o creare riserve di emergenza.
                    Se invece le uscite superano le entrate lo Stato deve sopperire ai bisogni di risorse attraverso l'indebitamento.</p>
                <div className="lg:px-10 max-container padding-container flex flex-col lg:flex-row gap-10 pb-10">
                    <div className="flex-grow-1">
                        <ul className="description">
                            <li><h3>Entrate</h3></li>
                            <li className="mb-4"><b>Tasse:</b> le principali fonti di entrate per lo Stato provengono dalle tasse, che possono includere imposte sul reddito individuale
                                e sulle società, imposte sulle vendite, tasse sulla proprietà e tasse sulle transazioni finanziarie.</li>
                            <li className="mb-8"><b>Entrate non fiscali:</b> oltre alle tasse, lo Stato può raccogliere entrate da altre fonti non fiscali, come i
                                profitti delle imprese di proprietà statale, i dividendi da partecipazioni in società private, le royalty da risorse naturali e le entrate da concessioni e licenze.</li>
                            <li><h3 className="text-theme-30">Debito</h3></li>
                            <li><b>Debito pubblico:</b> se le uscite superano le entrate, si verifica un disavanzo di bilancio. In questo caso, lo Stato può dover
                                prendere in prestito denaro attraverso l'emissione di obbligazioni o altri mezzi di finanziamento per coprire la differenza.</li>
                        </ul>
                    </div>
                    <div className="flex-grow-1">
                        <ul className="description">
                            <li><h3>Uscite</h3></li>
                            <li className="mb-4"> <b>Spese correnti:</b> queste sono spese necessarie per il funzionamento quotidiano del governo, come gli stipendi dei dipendenti pubblici,
                                i costi operativi degli edifici governativi e gli acquisti di forniture e servizi.</li>
                            <li className="mb-4"><b>Spese per investimenti:</b> queste sono spese per infrastrutture e progetti a lungo
                                termine, come la costruzione di strade, ponti, scuole, ospedali e altri beni pubblici.</li>
                            <li className="mb-4"><b>Spese per servizi pubblici:</b> queste includono spese per programmi e servizi pubblici come
                                istruzione, sanità, sicurezza sociale, assistenza sociale, difesa nazionale e trasporti.</li>
                            <li className="mb-4"><b>Pagamento degli interessi sul debito pubblico:</b> lo Stato potrebbe dover pagare interessi sui
                                prestiti presi in passato per finanziare deficit precedenti o per investimenti pubblici.</li>
                        </ul>
                    </div>
                </div>
                <Line options={options} data={dataD} />

            </div>
            <div className="outer_container">
                <div className='text-left relative flex flex-1 flex-col xl:w-1/2'>
                    <h2 className="lg:bold-52">Quali sono le principali voci di spesa?</h2>
                    <p className="description mt-6 lg:pr-40">
                        Nel bilancio pubblico italiano le voci di spesa più corpose sono in primis le spese per la protezione sociale che
                        comprendono malattia, disoccupazione, pensioni e disabilità, in cui più della metà dipendenono dalla spesa pensionistica,
                        poi troviamo le spese per il funzionamento della macchina statale (spese per pubblica amministrazione) e quelle
                        per la salute, seguiti dagli affari economici che comprendono trasporti, comunicazione, energia e altri investimenti statali.</p>
                    <p className="description mt-6 lg:pr-40">
                        È utile considerare che in linea di massima, a parte casi estremi, non ci sono governi che spendono troppo o poco,
                        ci sono <b>governi che spendono bene o male</b>. Il mix di spesa deciso dal governo italiano non è molto diverso da quello
                        dei vicini stati europei, eppure il Bel Paese ha evidentemente qualche problema nella gestione delle risorse.
                    </p>
                </div>
                <div>
                    <Doughnut options={options} data={dataB} width='600px' />
                </div>
            </div>

            <ArticleText title="Comparazione con l'estero." description="Se vogliamo fare un'analisi solida dobbiamo guardare anche oltre confine, come se la passano gli altri governi? Vediamo che
                    più o meno il mix di spesa è sempre lo stesso: uno Stato solitamente ha il compito, a meno che questo non sia lasciato al
                    settore privato, di strutturare un sistema pensionistico e di previdenza, per cui la spesa sociale copre buona parte del budget.
                    Poi vediamo che però, all'interno di ogni categoria, l'Italia spende meno per istruzione, ricerca, sanità e disoccupazione, mentre
                    <b>spende</b> di più degli altri Paesi in analisi per quanto riguarda le <b>pensioni</b> e soprattutto le transazioni sul debito. Ora, dato che
                    non brilliamo in efficenza, avere in aggiunta meno risorse da usare per migliorare la situazione attuale è un male non proprio necessario,
                    se poi vediamo che le spese per cui eccelliamo sono proprio quelle atte a mantenere le generazioni che furono, il quadro diventa
                    leggermente più chiaro: c'è qualche problema con il patto intergenerazionale tra chi ha lavorato ieri, chi lavora oggi e chi vivrà domani."/>

            <div className="graph_container">
                <Bar options={options} data={dataC} />
            </div>

            <ArticleText title="Generazioni tra Debito ed Istruzione." description="Dal grafico poi possiamo notare subito un fatto abbastanza allarmante: la spesa per istruzione, che comprende scuola primaria, secondaria,
                    e terziaria è allo stesso livello della spesa per transazioni sul debito, ovvero la spesa per interessi sul debito pubblico.
                    Questo fa notare come, seguendo le politiche economiche precedenti, il Paese ha raggiunto il punto in cui i debiti dei governi
                    che furono creano un costo sulle spalle dei cittadini che equivale all'investimento in educazione per le generazioni che saranno."/>

            <div className="graph_container">
                <Line options={options} data={dataA} />
            </div>
        </m.div>
    );
}