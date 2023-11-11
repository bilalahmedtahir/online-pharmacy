export default async function getAllDoctors() {
    const res = await fetch("http://localhost:3000/api/doctors");
    if (!res.ok) throw new Error("fail to fetch data");
    return res.json();
  }