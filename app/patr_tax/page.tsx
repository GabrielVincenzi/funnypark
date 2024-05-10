'use client';
import { motion as m } from "framer-motion";
import ArticleHero from "@/components/ArticleHero"
import Link from "next/link";
import Image from "next/image";

const page = () => {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}>
            <ArticleHero title="Patrimoniale e Catasto: tutti o nessuno."
                description="La vera imposta patrimoniale da manuale è un’imposta che colpisce ad aliquota
             unica tutto il patrimonio, quindi denaro, azioni, obbligazioni, immobili e mobili. 
             Ora preferirei soffermarmi su una fattispecie della stessa: la tassa sugli immobili. 
             Semplificazione obbligatoria considerato che il dialogo sulla quota più “liquida” del 
             patrimonio è molto spinosa e porterebbe sul terreno dell’equità e del compito dello Stato 
             sulle preferenze di investimento del cittadino." />


            <div className="textarticle_container">
                <h2>La Tassazione sugli Immobili.</h2>
                <p className="description">
                    Una più ingente tassazione sugli immobili darebbe la <b>possibilità di respirare ai lavoratori</b> nella forma
                    di una diminuzione del carico contributivo e fiscale sulle spalle dei percettori di reddito in quanto tali.
                    Un’imposta sul patrimonio in aggiunta <b>redistribuisce</b> in maniera più equa <b>la ricchezza tra generazioni</b>: aumenta
                    il contributo della popolazione più anziana e lo distribuisce alla fetta giovane che tendenzialmente non
                    possiede una casa e che può godere di minore tassazione sul reddito. In assenza di questa redistribuzione
                    un sistema predatorio nei confronti del lavoratore, assieme ad una diseguale ed ingente tassazione sugli
                    investimenti rischiosi, non solo <b>reprime la crescita</b> ma squilibra e <b>mina il patto intergenerazionale</b>.
                    Pensate ad un anziano che possiede una casa da un lato e una giovane laureata che lavora full-time e una
                    parte del salario lo investe in azioni green per la crescita sostenibile. Ecco, il primo la cui ricchezza
                    rimane ferma ed improduttiva, paga una miseria di tasse, mentre la seconda paga tasse per una scelta più
                    innovativa e attiva. Non dobbiamo poi dimenticare uno dei motivi per cui lo Stato di diritto esiste, quello
                    di redistribuzione della ricchezza e non solo dell’amministrazione.
                </p>
            </div>
            <div className="textarticle_container">
                <h2>Il Calcolo del Valore degli Immobili.</h2>
                <p className="description">
                    Esistono diversi metodi di calcolo del valore di un immobile, e quindi della <b>base imponibile</b> di un’imposta sugli immobili,
                    che si possono dividere principalmente in due macro-categorie: di mercato e del decisore. Da un lato, come accade negli
                    Stati Uniti, il valore dell’immobile viene calcolato in base al <b>valore di mercato</b> dello stesso, secondo l’osservazione
                    periodica dei prezzi di vendita di case simili in contesti assimilabili. Dall’altro invece, come succede in Italia, il
                    valore risulta da <b>tabelle</b> delle pubbliche amministrazioni aggiornate alla bisogna su <b>coefficienti arbitrari</b> decisi
                    dall’ente centrale. Per trasportarla al mondo del lavoro, è come se un dipendente avesse uno stipendio netto di 1500
                    euro e venisse tassato per 1200 o per 1700 dato che secondo le tabelle del 2015 il valore del suo lavoro per la PA è
                    quello. La prospettiva del valore da libero mercato inoltre comporterebbe una maggior <b>trasparenza</b> nei confronti del
                    pubblico su costi e tasse effettivi degli immobili senza dover ricorrere a costose spese di notaio o agenti immobiliari
                    e difficilmente comprensibili coefficienti. Una più veritiera rappresentazione del valore immobiliare periodicamente
                    rivista può fornire un buon <b>meccanismo automatico </b>di adattamento al valore reale degli immobili.

                </p>
            </div>
            <div className="textarticle_container">
                <h2>Toccare il Catasto: revisione della struttura Federale.</h2>
                <p className="description">
                    Tassare gli immobili necessariamente impone una <b>revisione della struttura federale</b> italiana, considerato che una migliore
                    tassazione sugli immobili che confluisca nell’infrastruttura locale che quegli immobili supporta è funzionale solo se la
                    maggior se non totalità del gettito rimane in quella zona. Soprattutto, oltre alle dinamiche redistributive e di crescita,
                    una manovra di questo tipo obbliga ogni zona ad una <b>vigilanza</b> più stringente sugli immobili e sull’effetto del nuovo gettito
                    da una parte e sulle stesse aree economiche dall’altra, considerato che chi attua un’azione più efficiente non ha intenzione
                    di spendere risorse pubbliche per far sfruttare il gettito ad altri. Oltre alla visione decentralizzata del potere per cui
                    una ben congegnata tassa sugli immobili è un tassello imprescindibile, c’è anche un lato più pragmatico, quello
                    dell’<b>evasione fiscale</b>. Risulta infatti palese che, se da un lato il lavoro è relativamente semplice da sommergere,
                    <b>un immobile non si nasconde dietro ad una palma di cocco</b>, tantomeno lo si può passare sottobanco. I dati dell’osservatorio
                    CPI sul 2019 possono aiutare a capire il contesto. Il livello di tassazione patrimoniale in Italia è poco più alto
                    della media dell’Unione Europea (5,5 per cento contro 5,47 per cento) e lo stesso vale in termini di Pil. Questi
                    però sono dati di percentuali sul gettito erariale complessivo, quindi è bene dire che, in uno Stato dove
                    l’evasione fiscale da redditi da lavoro è alta (il <b>70 per cento dell’IRPEF</b> da lavoro autonomo e d’impresa
                    non arriva a destinazione), spostare la tassazione su una parte della ricchezza difficile da occultare
                    potrebbe essere un’idea. Ovviamente, in conclusione, l’aumento dell’imposta sugli immobili deve essere
                    costruita in modo da creare un’<b>efficiente redistribuzione</b> motivata alla crescita lavorativa e di dimensione
                    d’impresa, non deve sfociare soltanto in un aumento della pressione fiscale.

                </p>
            </div>
            <div className="outer_container">
                <h3>Fonti:</h3>
                <ul className="description">
                    <li className="mb-4">
                        <Link href='https://www.youtube.com/watch?v=vAjHuSC2FwQ&t=3146s'>
                            <b>Tassare le prime case?</b> LiberiOLtre le Illusioni, Riccardo Puglisi e Michele Boldrin.</Link>
                    </li>
                    <li className="mb-4">
                        <Link href='https://www.finanze.gov.it/it/fiscalita-regionale-e-locale/Imposta-municipale-propria-IMU/disciplina-del-tributo/aliquote/'>
                            <b>Dipartimento delle Finanze:</b> aliquote sulla tassazione degli immobili.</Link>
                    </li>
                </ul>
            </div>

        </m.div>
    )
}

export default page
