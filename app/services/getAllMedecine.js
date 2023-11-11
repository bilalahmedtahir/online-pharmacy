export default async function getAllMedicine() {
    const res = await fetch("http://localhost:3000/api/medicines");
    if (!res.ok) throw new Error("fail to fetch data");
    return res.json();
  }