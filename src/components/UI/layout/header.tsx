'use client';

import React, { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site.config';
import { layoutConfig } from '@/config/layout.config';
import RegistrationModal from '@/components/UI/modals/registration.modal';
import LoginModal from '@/components/UI/modals/login.modal';
import { signOutFunc } from '@/actions/sign-out';
import { useAuthStore } from '@/store/auth.store';
import { logError } from 'effect/Effect';

export const Logo = () => {
    return <Image src="/tf.png" alt={siteConfig.title} width={16} height={16} priority />;
};

export default function Header() {
    const pathname = usePathname();

    const { isAuth, session, status, setAuthState } = useAuthStore();

    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleSignOut = async () => {
        try {
            await signOutFunc();
        } catch (error) {
            logError(error);
        }

        setAuthState('unauthenticated', null);
    };

    const getNavItems = () => {
        return siteConfig.navItems
            .filter(item => {
                if (item.href === '/ingredients') {
                    return isAuth;
                }
                return true;
            })
            .map(item => {
                const isActive = pathname === item.href;

                return (
                    <NavbarItem key={item.href}>
                        <Link
                            color="foreground"
                            href={item.href}
                            className={`px-3 py-1
                            ${isActive ? 'text-blue-500' : 'text-foreground'}
                            hover:text-blue-300 hover:border
                            hover:border-blue-300 hover:rounded-md
                            transition-colors
                            transition-border
                            duration-200`}
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                );
            });
    };

    return (
        <Navbar className={`h-[${layoutConfig.headerHeight}]`}>
            <NavbarBrand>
                <Link href="/" className="flex gap-1">
                    <Logo />
                    <p className="font-bold text-inherit">{siteConfig.title}</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {getNavItems()}
            </NavbarContent>
            {/*<LogState />*/}
            {status === 'loading' ? (
                <p>Loading...</p>
            ) : (
                <NavbarContent justify="end">
                    {isAuth && <p>Hello, {session?.user?.email}!</p>}
                    {!isAuth ? (
                        <>
                            <NavbarItem className="hidden lg:flex">
                                <Button
                                    as={Link}
                                    color="secondary"
                                    href="#"
                                    variant="flat"
                                    onPress={() => setIsLoginOpen(true)}
                                >
                                    Login
                                </Button>
                            </NavbarItem>
                            <NavbarItem>
                                <Button
                                    as={Link}
                                    color="primary"
                                    href="#"
                                    variant="flat"
                                    onPress={() => setIsRegistrationOpen(true)}
                                >
                                    Registration
                                </Button>
                            </NavbarItem>
                        </>
                    ) : (
                        <NavbarItem className="hidden lg:flex">
                            <Button
                                as={Link}
                                color="secondary"
                                href="#"
                                variant="flat"
                                onPress={handleSignOut}
                            >
                                Exit
                            </Button>
                        </NavbarItem>
                    )}
                </NavbarContent>
            )}
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
            <RegistrationModal isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
        </Navbar>
    );
}
