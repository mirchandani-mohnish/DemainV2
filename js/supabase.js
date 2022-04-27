var SUPABASE_URL = "https://ucnntedpwuzzenoqgmae.supabase.co";
var SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjbm50ZWRwd3V6emVub3FnbWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkxMzQ5MjAsImV4cCI6MTk2NDcxMDkyMH0.VLtlgCFbYa3s2X3OxLNLSvEVfWFExvAn3UzRun95wcU ";

var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
window.userToken = null;

const data = async () => {
  console.log("hi");
  const { data, error } = await supabase
    .from("Canteen-Capacity")
    .select("capacity");
  console.log("hi");
  console.log(data);
  console.log(error);
  return data;
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
};

document.addEventListener("DOMContentLoaded", function (event) {
  const capacity = data();
  //   var signUpForm = document.querySelector("#sign-up");
  //   signUpForm.onsubmit = signUpSubmitted.bind(signUpForm);
  //   var logInForm = document.querySelector("#log-in");
  //   logInForm.onsubmit = logInSubmitted.bind(logInForm);
  //   var userDetailsButton = document.querySelector("#user-button");
  //   userDetailsButton.onclick = fetchUserDetails.bind(userDetailsButton);
  //   var logoutButton = document.querySelector("#logout-button");
  //   logoutButton.onclick = logoutSubmitted.bind(logoutButton);
});

// const signUpSubmitted = (event) => {
//   event.preventDefault();
//   const email = event.target[0].value;
//   const password = event.target[1].value;

//   supabase.auth
//     .signUp({ email, password })
//     .then((response) => {
//       response.error ? alert(response.error.message) : setToken(response);
//     })
//     .catch((err) => {
//       alert(err);
//     });
// };

// const logInSubmitted = (event) => {
//   event.preventDefault();
//   const email = event.target[0].value;
//   const password = event.target[1].value;

//   supabase.auth
//     .signIn({ email, password })
//     .then((response) => {
//       response.error ? alert(response.error.message) : setToken(response);
//     })
//     .catch((err) => {
//       alert(err.response.text);
//     });
// };

// const fetchUserDetails = () => {
//   alert(JSON.stringify(supabase.auth.user()));
// };

// const logoutSubmitted = (event) => {
//   event.preventDefault();

//   supabase.auth
//     .signOut()
//     .then((_response) => {
//       document.querySelector("#access-token").value = "";
//       document.querySelector("#refresh-token").value = "";
//       alert("Logout successful");
//     })
//     .catch((err) => {
//       alert(err.response.text);
//     });
// };

// function setToken(response) {
//   if (response.user.confirmation_sent_at && !response?.session?.access_token) {
//     alert("Confirmation Email Sent");
//   } else {
//     document.querySelector("#access-token").value =
//       response.session.access_token;
//     document.querySelector("#refresh-token").value =
//       response.session.refresh_token;
//     alert("Logged in as " + response.user.email);
//   }
// }
