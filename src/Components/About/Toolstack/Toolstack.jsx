import { SiFirebase, SiVisualstudiocode, SiPostman, SiHeroku, SiVercel, SiIntellijidea } from "react-icons/si";
import style from './ToolStack.module.css';

function ToolStack() {
    return (
        <>
            <h2>Tools I use</h2>
            <div className={style.container}>
                <div className={`${style.toolbox} ${style.animation1}`}>
                    <SiVisualstudiocode />
                    <span>VS Code</span>
                </div>
                <div className={`${style.toolbox} ${style.animation2}`}>
                    <SiIntellijidea />
                    <span>IntelliJ</span>
                </div>
                <div className={`${style.toolbox} ${style.animation3}`}>
                    <SiVercel />
                    <span>Vercel</span>
                </div>
                <div className={`${style.toolbox} ${style.animation4}`}>
                    <SiHeroku />
                    <span>Heroku</span>
                </div>
                <div className={`${style.toolbox} ${style.animation5}`}>
                    <SiPostman />
                    <span>Postman</span>
                </div>
                <div className={`${style.toolbox} ${style.animation6}`}>
                    <SiFirebase />
                    <span>Firebase</span>
                </div>

            </div>
        </>
    );
}

export default ToolStack;
