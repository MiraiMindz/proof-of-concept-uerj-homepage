'use client';

import { ReactNode, lazy, Suspense } from 'react';

const PortalLayout = lazy(() => import('../layouts/PortalLayout'));

function Layout({ children }: any): ReactNode {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <PortalLayout>
                {children}
            </PortalLayout>
        </Suspense>
    );
}

export default function Index(): ReactNode {
    return (
        <Layout>
            <main>
                <h1>Page</h1>
            </main>
        </Layout>
    );
}
