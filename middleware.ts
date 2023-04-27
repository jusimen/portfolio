import { NextResponse} from 'next/server'

export function middleware(req: Request){
    const origin = req.headers.get('origin')

    if(!origin || !origin.includes(process.env.NEXT_PUBLIC_URL ?? "")){
        return new Response('Not allowed', { status: 403 })
    }
    
    return NextResponse.next()
}

export const config = {
    matcher: '/api/contact',
}