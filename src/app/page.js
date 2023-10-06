import getDataAxios from "@/lib/getDataWithAxios";

export default async function Home() {
  const data = await getDataAxios();
  console.log(data);
  return (
    <main className="w-[600px] mx-auto mt-10">
      <h1 className="text-blue-500 text-3xl font-bold text-center my-4">
        fetching data from json placeholder
      </h1>
      {data.map((dt) => (
        <div key={dt.id}>
          <h1 className="text-2xl font-bold py-2">{dt.title}</h1>
          <p>{dt.body}</p>
        </div>
      ))}
    </main>
  );
}
