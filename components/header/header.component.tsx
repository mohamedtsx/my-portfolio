import Image from "next/image";
import Link from "next/link";
import Logo from "@/static/my-logo-transparentbg.webp"
import { useState } from "react";
import Drop from "../drop/drop.component";
import Button from "../button/button.component";


const Header = () => {
    const [scrollToDown, setScrollToDown] = useState(false);


    if (typeof window !== "undefined" && window.innerWidth > 640) {
        let scroll1 = window.pageYOffset;
        window.onscroll = () => {
            let scroll2 = window.pageYOffset;
            if(scroll1 < scroll2) {
                setScrollToDown(true);
            } else {
                setScrollToDown(false);
            }
            scroll1 = scroll2
        }
    }

    return(
        <header className={`${scrollToDown ? 'sm:-translate-y-16': ''} transition bg-darkblue-0 select-none sm:fixed h-16 w-full z-50`}>
            <div className="container h-full max-w-7xl px-4 flex justify-between items-center  text-white">
                <Link href="/" className="text-xl tracking-wider flex justify-center items-center gap-1 pr-4 capitalize whitespace-nowrap">
                    <Image
                        src={Logo}
                        width={36}
                        height={36}
                        alt="mohamed-logo"
                        className="sm:block hidden"
                    />
                    <strong>mohamed khalid</strong>
                </Link>
                <nav className="sm:flex gap-4 items-center uppercase hidden">
                    <Link href="/#about" replace={true} scroll={false}>about</Link>
                    <Link href="/#projects" replace={true} scroll={false}>projects</Link>
                    <Link href="/#blog" replace={true} scroll={false}>blog</Link>
                    <Link href="/#contact" replace={true} scroll={false}>contact</Link>
                    <a href="../../static/resume/frontend-resume_mohamed-khalid.pdf" download className="hover:text-white focus:text-white">
                        <Button className="scale-90">
                            resume
                        </Button>
                    </a>
                </nav>
                <Drop />
            </div>
        </header>
    )
}

export default Header;