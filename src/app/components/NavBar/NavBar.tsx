import style from "@/app/components/NavBar/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import CircleImage from '../../../../public/image/CircleImage.svg';


function NavBar() {
    return (<><div className={style.navbar}>
        <div className={style.conteinerOne}>
            <Image src={CircleImage} className={style.imgCircle} alt="Circle" />
            <h1 className={style.NameTitle}> <h1 className={style.pedro}>Pedro</h1> Cardoso</h1>


            <div className={style.options}>
                <h3 className={style.word}>Home</h3>
                <h3 className={style.word}>Front-end</h3>
                <h3 className={style.word}>Back-end</h3>
                <h3 className={style.word}>Portfolio</h3>
                <h3 className={style.word}>Contact</h3>
            </div>
        </div>
    </div></>);
}

export default NavBar;