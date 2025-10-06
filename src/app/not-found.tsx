'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1>404</h1>
            <h1>Not Found Page</h1>
            <div>
                <Button as={Link} color="primary" variant="shadow" href="/">
                    Return Home
                </Button>
            </div>
        </div>
    );
};

export default NotFoundPage;
