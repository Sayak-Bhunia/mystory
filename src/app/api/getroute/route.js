import connect from '@/dbConfig/dbConfig';
import { NextResponse } from 'next/server';

connect();

export async function GET(req){
    console.log('GET request');
    return NextResponse.json({ message: 'GET request' });
}