import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        // ?title=AC Repair in Panchu&price=199&brand=Fix Bikaner
        const title = searchParams.get('title') || 'Fix Bikaner Services';
        const price = searchParams.get('price') || '199';
        const brand = searchParams.get('brand') || 'Fix Bikaner';

        const sContainer = {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column' as const,
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to bottom right, #2563eb, #ffffff)', // Blue to White
            fontFamily: 'sans-serif',
            padding: '40px',
            position: 'relative' as const,
        };

        const sBrand = { position: 'absolute' as const, top: 20, right: 40, fontSize: 30, fontWeight: 'bold', color: 'rgba(255,255,255,0.8)' };

        const sCard = {
            display: 'flex',
            flexDirection: 'column' as const,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: '40px 60px',
            borderRadius: '20px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
            textAlign: 'center' as const,
        };

        const sTitle = { fontSize: 60, fontWeight: 'bold', color: '#1e293b', lineHeight: 1.2, marginBottom: 20 };
        const sPriceContainer = { display: 'flex', gap: 20, alignItems: 'center' };

        const sPriceBadge = {
            backgroundColor: '#f0fdf4',
            color: '#166534',
            padding: '10px 20px',
            borderRadius: '50px',
            fontSize: 24,
            fontWeight: 'bold',
            border: '2px solid #bbf7d0'
        };

        const sEta = { fontSize: 24, color: '#64748b' };
        const sFooter = { position: 'absolute' as const, bottom: 20, fontSize: 18, color: '#334155' };

        const pContainer = { style: sContainer };
        const pBrand = { style: sBrand };
        const pCard = { style: sCard };
        const pTitle = { style: sTitle };
        const pPriceContainer = { style: sPriceContainer };
        const pPriceBadge = { style: sPriceBadge };
        const pEta = { style: sEta };
        const pFooter = { style: sFooter };

        return new ImageResponse(
            (
                <div {...pContainer}>
                    {/* Background Pattern or Decoration */}
                    <div {...pBrand}>
                        {brand}
                    </div>

                    <div {...pCard}>
                        <div {...pTitle}>
                            {title}
                        </div>

                        <div {...pPriceContainer}>
                            <div {...pPriceBadge}>
                                From Only ₹{price}
                            </div>
                            <div {...pEta}>
                                Technician Arriving in 30 Mins
                            </div>
                        </div>
                    </div>

                    <div {...pFooter}>
                        Book Now: www.fixbikaner.in
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            },
        );
    } catch {
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
