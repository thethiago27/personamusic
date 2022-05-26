import {NextApiRequest, NextApiResponse} from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {

    const {code, access_token} = req.query;

    res.setHeader('Set-Cookie', [
        `token=${code}; Max-Age=${60 * 60 * 24 * 7}; ; path=/`,
        `access_token=${access_token}; Max-Age=${60 * 60 * 24 * 7}; ; path=/`,
    ])

    return res.redirect('/calc')
}
