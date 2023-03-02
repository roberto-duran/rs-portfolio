import { NextResponse } from 'next/server'
import {db} from '../../../lib/db'

export async function GET() {
    try {
        const socials = await db.social.findMany({
            select: {
                id: true,
                title: true,
                url: true,
                createdAt: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        return NextResponse.json({ socials }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
