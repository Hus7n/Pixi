import { useEffect , useRef } from "react";
import "../game";

export default function GameCanvas(){
    const ref = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(!ref.current) return;

        ref.current.id = "game-container";
        
        

        const currentRef = ref.current;
        return() =>{
            const canvas = currentRef?.querySelector("canvas");
            if (canvas) canvas.remove();
        }
    },[]);

    return <div ref={ref} style={{width:"100vw",height:"100vh"}}/>;
}