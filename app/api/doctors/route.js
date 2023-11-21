export async function GET() {
    const res = await fetch('https://17cf953e-8d11-41c0-9b61-f0313dff41ed.mock.pstmn.io/getMed',)
    const data = await res.json()
   
    return Response.json({ data })
  }