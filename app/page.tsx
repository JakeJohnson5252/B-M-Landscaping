// https://bmlw.vercel.app/
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: tempData, error } = await supabase
    .from("Temp")
    .select("*");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          {/* Display Supabase table as a proper HTML table */}
          <div className="mt-8 w-full">
            <h2 className="text-2xl font-semibold mb-4">Temp Table Data</h2>
            {error && <p className="text-red-500">Error loading data: {error.message}</p>}
            {tempData && tempData.length > 0 ? (
              <table className="table-auto border-collapse border border-gray-300 dark:border-gray-600 w-full">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    {Object.keys(tempData[0]).map((col) => (
                      <th
                        key={col}
                        className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tempData.map((row: any) => (
                    <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      {Object.values(row).map((val, i) => (
                        <td
                          key={i}
                          className="border border-gray-300 dark:border-gray-600 px-4 py-2"
                        >
                          {val?.toString()}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No data found</p>
            )}
          </div>

          
        </div>
        
      </main>
    </div>
  );
}
