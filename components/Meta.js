import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta name="google-site-verification" content="ybcVkjX-ZUIGPRp-0lebkZUOco87RMeu3wgGZBsVAN0" />
            {/* <meta name="p:domain_verify" content="8f710b4727a5b626e35e544bc4093fc8" /> */

                //more og:
            }
            <link
                rel="preload"
                href="/fonts/League-Spartan.ttf"
                as="font"
                crossOrigin=""
            />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Coplane - Serverless Appications at edge',
    keywords: 'Cloud Servers, Coplane, Supabase, Firebase Alternative, VPS, Managed Supabase',
    description: 'Coplane provides an Enterprise-class Cloud platform to Developers, which helps them deploy, run and scale applications effortlessly.',
}

export default Meta
