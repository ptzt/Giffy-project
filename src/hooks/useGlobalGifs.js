import { useContext } from "react";
import GifsContext  from "../components/context/GifsContext";

export default function useGlobalGifs () {
    const {gifs} = useContext(GifsContext)

    return gifs
}