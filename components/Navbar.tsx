
"use client";
import { NAV_LINKS } from '@/constanst/Index'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className='flexBetween max-container padding-container relative z-30 py-5 '>
            <Link href={"/"}>
                <a><Image src="/Astro.svg" alt={'logo'} width={200} height={50} /></a>
            </Link>

            {/* main options */}
            <ul className={`h-full gap-12 ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
                {NAV_LINKS.map((link) => (
                    <li key={link.key}>
                        <Link href={link.href}>
                            <a className='regular-16 text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                                {link.label}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* login button */}
            <div className='lg:flexCenter hidden '>
                <Button
                    type="button"
                    title='Login'
                    icon='/user.svg'
                    varient='btn_dark_green'
                />
            </div>

            {/* hamburger */}
            <div onClick={toggleMenu} className='inline-block cursor-pointer lg:hidden'>
                <Image
                    src='menu.svg'
                    alt='menu'
                    width={32}
                    height={32}
                />
            </div>

            {/* Hamburger Menu */}
            {isOpen && (
                <div className="absolute top-0 left-0 w-full h-full bg-peach p-5">
                    <ul className="space-y-4">
                        {NAV_LINKS.map((link) => (
                            <li key={link.key}>
                                <Link href={link.href}>
                                    <a className="text-black">{link.label}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
