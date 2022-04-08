
import Head from 'next/head';
import Layout from '../../components/layout';
import Section from '../../components/section';

import styles from './about.module.css';


export default function About() {
    return (
    <Layout>
    <Head>
        <title>Sztudio \ About</title>
    </Head>
    
    <Section>
    <h1>+ Artist Statement</h1>
    </Section>
    <h2 className={styles.longText}>
    Szabinas ceramic journey started in Hawaii while apprenticing in a wood workshop. 
    After finishing her education as a furniture maker she gradually transitioned from wood to clay. 
    <br /> 
    Today she runs a small, personal studio in the heart of Copenhagen, Denmark. 
    In the creative practice she focuses on form, function and process on a multisensory level. 
    With her objects she explores simplicity and playfulness. 
    <br /> 
    Her work reflects the intersection of curiosity and familiarity. 
    <br />
    <div className={styles.quote}>
    “In my world fabrication and craft goes hand in hand with design. 
    I see myself flourishing the most when I have the opportunity to learn new skills and explore new possibilities. 
    While teaching I would like to pass on this energy and motivate others to dive into a tactile language while playing with clay.”
    </div>

    </h2>
    
    </Layout>
    )
  }