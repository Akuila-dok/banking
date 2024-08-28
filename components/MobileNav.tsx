"use client"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
  

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
            <SheetTrigger>
                <Image src="/icons/hamburger.svg"
                    width={30}
                    height={30}
                    alt='menu'
                    className='cursor-pointer'
                    />
            </SheetTrigger>
                <SheetContent side="left" className=" border-none bg-white">
                    {/* Logo Link */}
                <Link href="/" className='cursor-pointer flex items-center gap-1 px-4'>
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt='Horizon logo'
                    />
                    <h1 className='sidebar-logo text-26 font-ibm-plex-serif font-bold text-black-1'>
                        Horizon
                    </h1>
                </Link>
                <div className="mobilenav-sheet">
                    <SheetClose asChild>
                        <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                              {/* Sidebar Links */}
                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                    return (

                        <SheetClose asChild>
                            <Link 
                            href={item.route} 
                            key={item.label} 
                            className={cn('mobilenav-sheet_close w-full ', { 'bg-bank-gradient': isActive })}
                        >
                            <div className='flex items-center gap-2 p-2'>
                                
                                    <Image
                                        src={item.imgURL}
                                        alt={item.label}
                                        width={20}
                                        height={20}
                                        className={cn('transition-transform duration-300', { 
                                            'brightness-[3] invert-0': isActive 
                                        })}
                                    />
                                
                                <p className={cn('text-16 font-semibold text-black-2', { 'text-white': isActive })}>
                                    {item.label}
                                </p>
                            </div>
                        </Link>
                        </SheetClose>
                        
                    );
                })}

                    USER
                        </nav>
                    </SheetClose>
                    FOOTER
                </div>


              
            </SheetContent>
        </Sheet>
  </section>
  )
}

export default MobileNav