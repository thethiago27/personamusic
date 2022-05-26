import styles from "./styles.module.scss";
import Link from "next/link";
import {useEffect, useState} from "react";
import Script from "next/script";
import {motion} from "framer-motion";
import {GetServerSideProps} from "next";
import {useRouter} from "next/router";
import axios from "axios";
import {api} from "../../services/api";
import {Loading} from "../../components/Loading";
import {Result} from "../../components/Result";

interface CalcInterface {
    accessToken: string;
    user: any;
}

export default function Calc({accessToken, user}: CalcInterface) {

    const [player, setPlayer] = useState("");
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    const [showResult, setShowResult] = useState(false);

    useEffect(() => {

        async function playback() {

            if (!player) return

            try {
                await api.get(`/playback/${player}/?access_token=${accessToken}`)
            } catch (e) {
                console.log(e)
                router.reload()
            }
        }

        playback();

    }, [player]);
    let current = 1

    function showResultFunc() {
        setShowResult(true)
    }


    return (
        <>
            <Script
                src="https://sdk.scdn.co/spotify-player.js"
                strategy="afterInteractive"
                onLoad={() => {
                    // @ts-ignore
                    window.onSpotifyWebPlaybackSDKReady = () => {
                        // @ts-ignore
                        const player = new window.Spotify.Player({
                            name: "The Spotify Quiz",
                            getOAuthToken: (cb: any) => {
                                cb(accessToken);
                            }
                        });

                        // Ready
                        player.addListener("ready", ({device_id}: any) => {
                            console.log("Ready with Device ID", device_id);
                            setPlayer(device_id)
                        });

                        player.addListener("player_state_changed", ({
                                                                        position,
                                                                        duration,
                                                                        track_window: {current_track}
                                                                    }: any) => {

                            console.log('Currently Playing', current_track);

                            current++

                            console.log(current)
                            setLoading(current === 4 && false)
                        })

                        // Connect to the player!
                        player.connect();
                    }
                }}
            />
            {showResult ? (<Result user={user}/>) : <Loading onClick={showResultFunc} loading={loading}/>}

        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req, params}: any) => {

    const response = await api.get("/user", {
        headers: {
            "Authorization": `Bearer ${req.cookies.token}`
        }
    });

    return {
        props: {
            accessToken: req.cookies.access_token,
            user: response.data.user
        }
    }


}