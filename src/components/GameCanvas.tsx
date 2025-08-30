import { useEffect , useRef } from "react";
import initGame from "../game";

export default function GameCanvas(){
    const ref = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(!ref.current) return;

        ref.current.id = "game-container";

        return() =>{
            const canvas = ref.current?.querySelector("canvas");
            if (canvas) canvas.remove();
        }
    },[]);

    return <div ref={ref} style={{width:"100vw",height:"100vh"}}/>;
}