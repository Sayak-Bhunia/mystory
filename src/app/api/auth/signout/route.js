import connect from '@/dbConfig/dbConfig';

import { NextResponse } from 'next/server';

connect();

export async function GET() {
  try {
    const response = NextResponse.json({
      message: 'Logout Successful',
      success: true,
    });

    response.cookies.set('token', '', {
      httpOnly: true,
      expires: new Date(0),
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
