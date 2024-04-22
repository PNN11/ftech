import React from 'react'
import MouseParallaxWrapper from '../ui/wrappers/mouseParallaxWrapper'
import FtechLogo from '../svg/ftechLogo'
import Image from 'next/image'
import Ellipses from '../svg/ellipses'
import Switch from '../svg/switch'
import EllipseOnSwitch from '../svg/ellipseOnSwitch'

const Mock = () => {
    return (
        <main className="flex flex-col px-11 py-[2.625rem]">
            <div className="mb-10 flex justify-center">
                <FtechLogo />
            </div>
            <div className="relative mb-11 flex grow flex-col items-center justify-center gap-9 overflow-hidden rounded-2xl bg-gradient">
                <MouseParallaxWrapper isAbsolutelyPositioned strength={0.1} enableOnTouchDevice={false}>
                    <Image src="/left_bg.png" width={344} height={271} alt="" className="absolute bottom-10 left-14" />
                </MouseParallaxWrapper>
                <MouseParallaxWrapper isAbsolutelyPositioned strength={0.1} enableOnTouchDevice={false}>
                    <Image src="/right_bg.png" width={302} height={247} alt="" className="absolute right-3 top-9" />
                </MouseParallaxWrapper>
                <MouseParallaxWrapper isAbsolutelyPositioned strength={0.05} enableOnTouchDevice={false}>
                    <Ellipses className="absolute left-1/2 top-0 -translate-x-1/2" />
                    <div className="absolute left-1/2 top-56 flex -translate-x-1/2 items-center justify-center">
                        <Switch />
                        <EllipseOnSwitch
                            className="absolute animate-spin"
                            style={{ animationDuration: '2s', animationTimingFunction: 'ease-in-out' }}
                        />
                    </div>
                </MouseParallaxWrapper>
                <h1 className="shadow-heading relative z-10 mb-[105px] mt-[350px] max-w-lg text-center text-[3.375rem] font-medium leading-none tracking-[0.0444rem]">
                    Our website is <br /> <span className="text-[#0099ff]">on redesign</span> <br />{' '}
                    <p className="mt-10 text-2xl leading-none">We will back soon</p>
                </h1>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-4 leading-none">
                <div>
                    <p className="mb-2">LLC «Ftech»</p>
                    <div className="flex flex-wrap items-center gap-6">
                        <p>Bialystok, Poland</p> <a href="mailto:HR@ftech-it.com">HR@ftech-it.com</a>
                    </div>
                </div>
                <div>©️2019-2024</div>
            </div>
        </main>
    )
}

export default Mock
