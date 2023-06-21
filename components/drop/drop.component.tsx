import Link from "next/link";
import { useState } from "react";


const Drop = () => {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const closeMenu = () => setOpen(false);

    

    if(typeof window !== "undefined") {
        window.addEventListener('scroll',  () => {
            let scrolledTop = window.pageYOffset;
            if(scrolledTop <= 64) {
                setActive(false);
            } else {
                setActive(true);
            }
        });
    }


    return(
        <>
            <div onClick={() => setOpen(!open)} className={`sm:hidden rounded-full ${active? ' animate-drop rounded-tl-full ': 'rounded-tl-none'} drop-shadow-md filter-none transition-[border-radius] duration-500 ease-in-out rotate-45 fixed right-4 bg-darkblue-0 cursor-pointer z-10`}>
                <div className={`relative drop ${open? 'open': ''} -rotate-45 flex flex-col justify-center items-center w-12 h-12  p-1  overflow-hidden`}>
                    <span className="absolute top-4 w-8 h-[3px] bg-gold"/>
                    <span className="absolute top-6 w-8 h-[3px] bg-gold"/>
                    <span className="absolute top-8 w-8 h-[3px] bg-gold"/>
                </div>
            </div>
            <div onClick={() => setOpen(false)} className={`transition-all delay-150 ${open?'animate-darkbg': 'hidden'} fixed top-0 left-0 bg-black/30 h-screen w-full`} />
            <menu className={`sm:hidden fixed flex justify-center items-center transition ${open? 'translate-x-0': 'translate-x-full'} top-0 right-0 bg-darkblue-0 w-min-75vw-400 h-screen flex flex-col justify-center items-center uppercase gap-4`}>
                <Link onClick={closeMenu} href="/">home</Link>
                <Link onClick={closeMenu} href="#about">about</Link>
                <Link onClick={closeMenu} href="#projects">projects</Link>
                <Link onClick={closeMenu} href="#contact">contact</Link>
                <Link onClick={closeMenu} href="#" className="transition px-4 py-2 border border-green rounded-lg text-sm hover:bg-green hover:text-white focus:text-white hover:bg-opacity-20">resume</Link>
            </menu>
        </>
    )
}

export default Drop;