var SUPABASE_URL = "https://ucnntedpwuzzenoqgmae.supabase.co";
var SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjbm50ZWRwd3V6emVub3FnbWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkxMzQ5MjAsImV4cCI6MTk2NDcxMDkyMH0.VLtlgCFbYa3s2X3OxLNLSvEVfWFExvAn3UzRun95wcU ";

var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const data = async () => {
  const { data, error } = await supabase
    .from("Canteen-Capacity")
    .select("capacity");
  console.log(data);
  console.log(error);
  const occupancy = document.getElementById("occupancy");
  occupancy.innerHTML = data.at(-1).capacity;
  const seatProbability = document.getElementById("seatProbability");
  seatProbability.innerHTML = 100 - data.at(-1).capacity;
  console.log("data changed");

  return data;
};

const value = data();

// return new Promise(function (resolve, reject) {
//     const { name, email } = body;
//     const { data, error } = supabase
//             .from('')
//             .select()
//     //   (error, results) => {
//     //     if (error) {
//     //       reject(error);
//     //     }
//     //     resolve(
//     //       `A new merchant has been added added: ${JSON.stringify(
//     //         results.rows[0]
//     //       )}`
//     //     );
//     //   }
//     );
//   });
