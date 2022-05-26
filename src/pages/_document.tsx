import Document, {Head, Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;900&display=swap"
                          rel="stylesheet"/>
                    <link ref="shortcut" href="favicon.png" type="image/png"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
