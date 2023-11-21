export async function GET() {
    const res = await fetch('https://655cabe925b76d9884fdbed3.mockapi.io/api/v1/medicine',)
    const data = await res.json()
    return Response.json({ data: "" });
  }