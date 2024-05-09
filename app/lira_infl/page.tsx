'use client';
import { motion as m } from "framer-motion";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import Link from "next/link";

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
import ArticleHero from "@/components/ArticleHero";

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
        "1971-Q1", "1971-Q2", "1971-Q3", "1971-Q4",
        "1972-Q1", "1972-Q2", "1972-Q3", "1972-Q4",
        "1973-Q1", "1973-Q2", "1973-Q3", "1973-Q4",
        "1974-Q1", "1974-Q2", "1974-Q3", "1974-Q4",
        "1975-Q1", "1975-Q2", "1975-Q3", "1975-Q4",
        "1976-Q1", "1976-Q2", "1976-Q3", "1976-Q4",
        "1977-Q1", "1977-Q2", "1977-Q3", "1977-Q4",
        "1978-Q1", "1978-Q2", "1978-Q3", "1978-Q4",
        "1979-Q1", "1979-Q2", "1979-Q3", "1979-Q4",
        "1980-Q1", "1980-Q2", "1980-Q3", "1980-Q4",
        "1981-Q1", "1981-Q2", "1981-Q3", "1981-Q4",
        "1982-Q1", "1982-Q2", "1982-Q3", "1982-Q4",
        "1983-Q1", "1983-Q2", "1983-Q3", "1983-Q4",
        "1984-Q1", "1984-Q2", "1984-Q3", "1984-Q4",
        "1985-Q1", "1985-Q2", "1985-Q3", "1985-Q4",
        "1986-Q1", "1986-Q2", "1986-Q3", "1986-Q4",
        "1987-Q1", "1987-Q2", "1987-Q3", "1987-Q4",
        "1988-Q1", "1988-Q2", "1988-Q3", "1988-Q4",
        "1989-Q1", "1989-Q2", "1989-Q3", "1989-Q4",
        "1990-Q1", "1990-Q2", "1990-Q3", "1990-Q4",
        "1991-Q1", "1991-Q2", "1991-Q3", "1991-Q4",
        "1992-Q1", "1992-Q2", "1992-Q3", "1992-Q4",
        "1993-Q1", "1993-Q2", "1993-Q3", "1993-Q4",
        "1994-Q1", "1994-Q2", "1994-Q3", "1994-Q4",
        "1995-Q1", "1995-Q2", "1995-Q3", "1995-Q4",
        "1996-Q1", "1996-Q2", "1996-Q3", "1996-Q4",
        "1997-Q1", "1997-Q2", "1997-Q3", "1997-Q4",
        "1998-Q1", "1998-Q2", "1998-Q3", "1998-Q4",
        "1999-Q1", "1999-Q2", "1999-Q3", "1999-Q4"
    ],
    datasets: [
        {
            label: 'Lira italiana',
            data: [
                100.00, 100.49, 101.38, 102.35, 103.16, 102.98, 101.59, 100.77,
                104.09, 112.90, 116.30, 114.03, 116.13, 120.85, 121.63, 125.66,
                128.56, 127.35, 124.87, 124.86, 137.53, 149.07, 144.39, 149.99,
                154.23, 156.04, 157.54, 160.82, 166.50, 166.29, 167.58, 174.20,
                177.36, 176.13, 177.12, 180.11, 181.35, 184.49, 187.27, 189.31,
                192.51, 197.06, 195.77, 203.30, 204.21, 206.48, 206.75, 208.99,
                207.09, 210.28, 211.49, 213.87, 215.63, 215.77, 215.32, 215.76,
                215.75, 223.13, 231.53, 233.13, 230.40, 230.35, 227.00, 225.18,
                229.32, 233.27, 234.37, 236.25, 237.93, 240.88, 240.75, 240.30,
                238.43, 236.21, 233.25, 235.23, 236.07, 235.14, 238.14, 240.79,
                239.80, 238.50, 239.18, 239.81, 239.82, 241.43, 245.07, 269.20,
                287.34, 283.27, 284.56, 294.10, 295.77, 291.20, 300.99, 307.30,
                326.44, 346.02, 329.82, 328.61, 316.14, 304.56, 302.58, 299.79,
                300.69, 301.73, 300.49, 301.68, 304.05, 303.89, 303.30, 302.35,
                302.23, 302.23, 302.23, 302.23
            ],
            borderColor: '#2a9d8f',
            backgroundColor: '#2a9d8f',
        },
        {
            label: 'Macro tedesco',
            data: [
                100.00, 98.62, 96.16, 95.49, 96.39, 96.37, 95.30, 94.85,
                93.01, 89.56, 83.40, 84.79, 83.78, 81.21, 83.28, 81.88,
                80.74, 81.77, 82.15, 81.74, 79.25, 75.78, 74.64, 71.78,
                71.76, 71.30, 70.63, 69.83, 68.74, 68.67, 68.85, 67.35,
                67.22, 67.57, 67.55, 66.46, 66.88, 67.32, 67.59, 68.43,
                68.74, 67.85, 67.17, 65.41, 65.07, 63.78, 63.12, 62.45,
                61.08, 60.65, 60.89, 60.44, 60.08, 59.84, 59.92, 59.74,
                59.57, 59.97, 59.80, 59.01, 58.02, 57.60, 56.53, 55.75,
                55.35, 55.57, 55.53, 55.32, 55.33, 55.60, 55.61, 55.53,
                55.75, 55.61, 55.51, 54.75, 54.56, 54.89, 55.29, 54.94,
                54.86, 55.09, 54.93, 54.66, 54.66, 54.89, 54.26, 52.53,
                52.10, 52.27, 51.60, 51.37, 51.86, 51.68, 51.28, 51.23,
                50.33, 49.76, 50.28, 50.18, 50.58, 51.10, 51.07, 51.67,
                52.21, 52.45, 52.82, 52.78, 52.91, 52.83, 52.70, 52.38,
                52.34, 52.34, 52.34, 52.34
            ],
            borderColor: '#264653',
            backgroundColor: '#264653',
        },
        {
            label: 'Franco francese',
            data: [
                100.00, 100.60, 102.15, 104.19, 101.30, 100.32, 98.77, 98.45,
                97.48, 95.48, 96.07, 96.45, 100.20, 104.12, 100.58, 99.38,
                97.51, 93.43, 92.37, 91.71, 91.76, 91.79, 95.39, 97.91,
                98.21, 98.46, 98.56, 100.02, 103.71, 100.24, 99.08, 101.59,
                101.86, 102.73, 103.71, 102.67, 103.04, 103.13, 103.30, 104.28,
                105.45, 106.34, 105.60, 108.43, 109.52, 110.95, 116.33, 116.29,
                115.08, 120.03, 120.78, 121.37, 121.56, 121.14, 121.11, 120.63,
                119.96, 120.45, 120.06, 118.62, 117.33, 120.67, 121.01, 120.26,
                121.40, 122.12, 121.97, 122.99, 123.27, 123.93, 124.00, 124.86,
                124.85, 123.99, 123.63, 122.70, 121.87, 121.58, 122.09, 121.89,
                122.88, 122.90, 122.93, 122.90, 122.51, 121.83, 121.12, 117.46,
                116.39, 116.11, 117.84, 117.25, 116.16, 116.46, 115.65, 115.83,
                115.79, 115.36, 114.43, 114.45, 114.22, 114.05, 114.40, 115.06,
                116.04, 116.47, 117.18, 116.46, 116.78, 116.64, 116.35, 115.67,
                115.61, 115.61, 115.61, 115.61
            ],
            borderColor: '#e9c46a',
            backgroundColor: '#e9c46a',
        },
    ],
};

const dataB = {
    labels: [1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965,
        1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976,
        1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987,
        1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
        1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
        2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
        2021, 2022, 2023],
    datasets: [
        {
            label: 'Inflazione',
            data: [2.3, 3.4, 1.3, 2.8, -0.4, 2.3, 2.1, 4.7, 7.5, 5.9, 4.6, 2.3, 3.7, 1.4,
                2.6, 5, 4.8, 5.7, 10.8, 19.1, 17, 16.8, 17, 12.1, 14.8, 21.2, 17.8, 16.5,
                14.7, 10.8, 9.2, 5.8, 4.8, 5, 6.3, 6.5, 6.2, 5.3, 4.7, 4.1, 5.3, 4, 2, 2,
                1.7, 2.5, 2.7, 2.5, 2.7, 2.2, 1.9, 2.1, 1.8, 3.3, 0.8, 1.5, 2.7, 3, 1.2,
                0.2, 0.1, -0.1, 1.2, 1.2, 0.6, -0.2, 1.9, 8.1, 5.7, 0.9],
            borderColor: '#2a9d8f',
            backgroundColor: '#2a9d8f',
        },
    ],
};


export default function page() {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}>
            <ArticleHero title="Passaggio da Lira a Euro: tra fantasia e realtà" description="Ogni giorno sentiamo discutere di come spendere le risorse del Paese, dove c'è carenza e dove c'è spreco, in quali aree o settori sarebbe melio spendere.
                        Ma se non sappiamo come funzione il Bilancio dello Stato facciamo fatica a stare al passo con il discorso e nella maggior parte dei casi
                        non diamo il giusto peso alle parole. Oggi cercheremo di dare un quadro generale e allo stesso tempo specifico, del sistema Stato e
                        di come questo raccolga e sfrutti le risorse."/>

            <div className="lg:px-10 max-container padding-container flex flex-col gap-4 py-10 pb-10 lg:py-20">
                <h2 className="lg:bold-52">Cambio tra Valuta Nazionale ed ECU.</h2>
                <p className="description lg:pr-40">
                    Il Consiglio Europeo ha stabilito il tasso di cambio tra tutte le valute nazionali della futura Eurozona
                    e l'Euro utilizzando il tasso di cambio con una unità di conto, non una vera moneta circolante,
                    composta da una media ponderata delle varie valute europee: l'<b>European Currency Unit</b> o ECU. Successivamente
                    a questa unità di conto venne corrisposto un tasso di <b>cambio 1:1 con l'Euro</b>. In sostanza per avere un cambio
                    che rispecchiasse la realtà del tessuto economico europeo si utilizzò un passaggio intermedio per raggiungere
                    il cambio tra valuta nazionale ed Euro che, nel caso della lira italiana venne fissato nel 31 dicembre 1998 ad
                    un valore di 1936,27 lire.
                    Il grafico sottostante indica il cambio tra lira italiana, franco francese e marco tedesco con questa unità di
                    riferimento, l'ECU. Da qui possiamo notare come il cambio non sia stato sfavorevole all'Italia ed invece
                    favorevole ad altri Paesi come Germania o Francia per qualche diritto divino. Vediamo come la lira italinana si
                    sia svalutata di molto negli <b>anni 70'</b> e successivamente alla <b>crisi del 1992</b> con l'aumento dei prezzi del petrolio,
                    di conseguenza all'entrata nell'Euro siamo arrivati con un bagaglio di problemi non indifferenti.
                </p>
                <Line options={options} data={dataA} />

            </div>
            <div className="lg:px-10 max-container padding-container flex flex-col gap-4 py-10 pb-10  lg:py-20">
                <h2 className="lg:bold-52">Svalutare di più ci avrebbe salvati?</h2>
                <p className="description">
                    I manuali di macroeconomia insegnano che la svalutazione della moneta nazionale porta ad un aumento delle
                    esportazioni, che diventano relativamente meno costose. Pensiamo ad un fiorista tedesco che vuole comprare
                    dei vasi italiani e legge sul giornale che la lira si è svalutata dall'ultimo ordine che ha fatto. Con questo
                    i soldi in tasca del fiorista tedesco hanno acquistato relativamente più valore perchè adesso il cambio non è
                    più 1 marco : 1000 lire ma 1 marco : 1200 lire. Perciò al fiorista non cambia niente comprare i vasi in Germania,
                    ma se va a comprarli in Italia pagando in lire è come se costassero meno, perciò il vasaio italiano venderà
                    più vasi all'estero rispetto a prima. Per questo <b>svalutazione implica più esportazioni</b>.
                    Ma la realtà è più complessa di un semplice esempio e la teoria economica applicata ad un contesto come quello
                    presente, di produzione globalizzata pone delle sfide non indifferenti, per questo <b>altri fattori</b> entrano in gioco, oltre
                    alla svalutazione, per rendere un Paese più competitivo, tra questi vorrei ricordare, come citato nell'articolo a piè di pagina:
                </p>

                <div className="lg:px-10 max-container padding-container flex flex-col lg:flex-row gap-10 pb-10">
                    <div className="flex-grow-1">
                        <h3 className="text-gray-30">Produzione Globalizzata</h3>
                        <p className="description">
                            Al giorno d'oggi per <b>esportare</b> di più bisogna <b>importare</b> di più. Non tutto ciò che produciamo in Italia
                            proviene da filiera 100% italiana, quindi dobbiamo cercare ciò che ci manca all'estero. Ma con la
                            svalutazione della lira se i beni nazionali diventano relativamente meno costosi, quelli esteri diventano
                            relativamente più costosi e di conseguenza non è sicuro che questo movimento porti a maggiori profitti
                            dalle esportazioni, visto che <b>aumenterebbero anche i costi delle imprese</b>.
                        </p>

                    </div>
                    <div className="flex-grow-1">
                        <h3 className="text-gray-30">Non basta costare meno</h3>
                        <p className="description">
                            Anche se i costi sono una variabile cruciale nella decisione di produzione non sono l'unica. Esportare di più
                            significa anche entrare in <b>nuove catene del valore</b>, ovvero in nuovi mercati prima sotto controllo di altre,
                            realtà produttive, in cui difficilmente la concorrenza se ne andrà senza fiatare. Infatti serve, oltre che un costo
                            inferiore, una <b>struttura estremamente efficente</b> che sbaragli le altre aziende per riuscire veramente ad aumentare
                            le esportazioni. Il nostro Paese parla poco di produttività perchè l'efficenza è un lontano ricordo quindi non siamo
                            sulla giusta strada per entrare in nuovi mercati così velocemente.
                        </p>
                    </div>
                </div>
            </div>

            <div className="outer_container">
                <div className='text-left relative flex flex-1 flex-col xl:w-1/2 gap-4'>
                    <h2 className="lg:bold-52">I prezzi sono veramente raddoppiati?</h2>
                    <p className="description mt-6 lg:pr-40">
                        I dati ufficiali ISTAT mostrano che l'inflazione media negli anni successivi all'introduzione della moneta
                        unica si aggirava intorno al <b>2.5%</b>, ben lontana dal raddoppio. Allo stesso tempo però la percezione dell'inflazione
                        è aumentata notevolmente, creando un forte divario con la realtà, il che successivamente ha alimentato il
                        luogo comune per cui il cambio verso l'Euro sia stato una sciagura per il popolo italiano, ma i <b>dati smentiscono</b> o per
                        lo meno smentiscono in parte. Notiamo infatti che per alcuni particolari beni c'è stato sí un forte rialzo dei prezzi,
                        tra questi prodotti alimentari, tabacco, prodotti di uso casalingo, giornali, trasporti, servizi postali, gelati, pizza,
                        tramezzini, e altri beni e/o servizi forniti da bar o ristoranti.

                    </p>
                    <div className="lg:px-10 max-container padding-container flex flex-col lg:flex-row gap-10 pb-10">
                        <div className="flex-grow-1">
                            <h3 className="text-gray-30">Beni frequenti</h3>
                            <p className="description">
                                I rincari hanno colpito in maniera massiccia beni di uso comune che vengono <b>frequentemente scambiati</b>,
                                di conseguenza la percezione di inflazione si è distaccata dal movimento generale che invece è rimasto
                                stabile senza enormi fluttuazioni. Importante sottolineare che questi aumenti di prezzo erano presenti
                                soprattutto nelle aree geografiche con <b>meno concorrenza</b>.
                            </p>
                            <h3 className="text-gray-30">Non solo Rincari</h3>
                            <p className="description">
                                Inoltre ci si ricorda solo dei rincari, ma allo stesso tempo altri beni hanno goduto di <b>diminuzioni</b> di prezzo dovute all'entrata
                                nell'Eurozona tra cui energia e gas. Le perdite colpiscono sempre più dei guadagni e nelle menti dei cittadini sono rimaste impresse
                                quelle, rispetto alle diminuzioni, in economia comportamentale è detta <b>"Avversione alle Perdite"</b>.</p>

                        </div>
                        <div className="flex-grow-1">
                            <Line options={options} data={dataB} width='600px' height='400px' />
                        </div>
                    </div>

                </div>
            </div>
            <div className="outer_container">
                <h3>Fonti:</h3>
                <ul className="description">
                    <li className="mb-4">
                        <Link href='https://lavoce.info/archives/19695/uscita-dall-euro-svalutazione-esportazioni-importazioni-global-value-chain/'>
                            <b>Svalutare in un mondo globalizzato:</b> lavoce.info</Link>
                    </li>
                    <li className="mb-4">
                        <Link href='https://osservatoriocpi.unicatt.it/ocpi-pachidermi-e-pappagalli-l-introduzione-dell-euro-ha-raddoppiato-i-prezzi'>
                            <b>L'introduzione dell'euro ha raddoppiato i prezzi?</b> Osservatorio CPI UniCatt</Link>
                    </li>
                    <li className="mb-4">
                        <Link href='https://lavoce.info/archives/24535/qualche-verita-sul-cambio-lira-euro/'>
                            <b>Qualche verità sul cambio lira-euro:</b> lavoce.info</Link>
                    </li>
                </ul>
            </div>

        </m.div>
    );
}
