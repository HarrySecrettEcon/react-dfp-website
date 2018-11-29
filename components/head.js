import Head from 'next/head'

export default function(props) {
    return (
        <Head>
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                crossorigin="anonymous"
            />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.5.0/modern-normalize.min.css"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Karla"
                rel="stylesheet"
            />
            <style global jsx>{`
                html {
                    display: flex;
                    justify-content: center;
                }
                body {
                    background: blank;
                    width: 1280px;
                    font-family: 'Karla', sans-serif;
                }
                .page-body {
                    display: flex;
                    flex-direction: row;
                }
                    .page-body__example {
                        flex: 2;
                        margin-left: 1rem;
                    }
                        .page-body__example__ad {
                            background: #f7ecf1;
                        }
                            .page-body__example__ad__content {
                                display: flex;
                                justify-content: center;
                            }
                        .page-body__example > ol {
                            list-style-type: square;
                        }
            `}</style>
            <title> React-dfp documentation: {props.title} </title>
        </Head>
    );
}
