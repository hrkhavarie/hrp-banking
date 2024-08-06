'use client'
import Image from 'next/image'
import { MobileNavProps } from './mobileNav.types'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
  

const MobileNav:React.FC<MobileNavProps>= () => {
    const pathname = usePathname();

  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
  <SheetTrigger>
    <Image 
        src="/assets/icons/hamburger.svg"
        alt='hamburger icon'
        width={30}
        height={30}
        className='cursor-pointer'
        />
  </SheetTrigger>
  <SheetContent side='left' className='border-none bg-white'>
            <Link 
                href="/"
                className='mb-12 cursor-pointer  flex items-center gap-1 px-4'>
                <Image 
                    src="/assets/icons/logo.svg"
                    width={34}
                    height={34}
                    alt='Horizon logo'
                />
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>HRP Finance</h1>
            </Link>
            <div className="mobile-nav-sheet">
                <SheetClose asChild>
                    <nav className='flex h-full flex-col gap-4 p-1 text-white'>
                        {sidebarLinks.map((link)=>{
                        const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
                        return(
                                <SheetClose asChild key={link.route}>
                                    <Link
                                    href={link.route}
                                    key={link.label}
                                    className={cn('mobilenav-sheet_close w-full ', {'bg-bank-gradient' : isActive})}
                                    >
                                        <Image 
                                            src={link.imgURL} 
                                            width={20}
                                            height={20}
                                            alt={link.label}
                                            className={cn({'brightness-[3] invert-0': isActive})}
                                            />d
                                <p className={cn('text-16 font-semibold text-black-2',{'text-white':isActive})}>
                                    {link.label}
                                </p>
                                    </Link>
                                </SheetClose>
                                )
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