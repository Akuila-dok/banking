"use client"

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();

    return (
        <section className='sidebar'>
            <nav className='flex flex-col gap-6'>
                {/* Logo Link */}
                <Link href="/" className='mb-12 cursor-pointer flex items-center gap-2'>
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt='Horizon logo'
                        className='size-[24] max-xl:size-14'
                    />
                    <h1 className='sidebar-logo'>
                        Horizon
                    </h1>
                </Link>

                {/* Sidebar Links */}
                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                    return (
                        <Link 
                            href={item.route} 
                            key={item.label} 
                            className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
                        >
                            <div className='flex items-center gap-2 p-2'>
                                <div className='relative size-6'>
                                    <Image
                                        src={item.imgURL}
                                        alt={item.label}
                                        fill
                                        className={cn('transition-transform duration-300', { 
                                            'brightness-[3] invert-0': isActive 
                                        })}
                                    />
                                </div>
                                <p className={cn('sidebar-label', { '!text-white': isActive })}>
                                    {item.label}
                                </p>
                            </div>
                        </Link>
                    );
                })}

                USER
            </nav>
            fOOTER
        </section>
    );
}

export default Sidebar;
